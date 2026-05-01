import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  signOut as fbSignOut,
  onAuthStateChanged,
  type User,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { getFirebase } from './firebase';

const TNSG_DOMAIN = 'tnstateguard.org';
const EMAIL_LINK_STORAGE_KEY = 'tnman:emailForSignIn';

export type AccessState = {
  user: User | null;
  email: string | null;
  hasAccess: boolean;
  isAdmin: boolean;
  reason?: string;
};

export async function signIn(): Promise<void> {
  const { auth } = getFirebase();
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  await signInWithRedirect(auth, provider);
}

export async function completeRedirectSignInIfPresent(): Promise<boolean> {
  const { auth } = getFirebase();
  const result = await getRedirectResult(auth);
  return !!result;
}

export async function signOut(): Promise<void> {
  const { auth } = getFirebase();
  await fbSignOut(auth);
}

export async function sendEmailSignInLink(email: string): Promise<void> {
  const { auth } = getFirebase();
  const url = window.location.origin + '/';
  await sendSignInLinkToEmail(auth, email, {
    url,
    handleCodeInApp: true,
  });
  window.localStorage.setItem(EMAIL_LINK_STORAGE_KEY, email);
}

export async function completeEmailSignInIfPresent(): Promise<boolean> {
  const { auth } = getFirebase();
  const href = window.location.href;
  if (!isSignInWithEmailLink(auth, href)) return false;
  let email = window.localStorage.getItem(EMAIL_LINK_STORAGE_KEY);
  if (!email) {
    email = window.prompt('Confirm the email address that received the sign-in link:') || '';
    if (!email) return false;
  }
  await signInWithEmailLink(auth, email, href);
  window.localStorage.removeItem(EMAIL_LINK_STORAGE_KEY);
  window.history.replaceState(null, '', window.location.pathname);
  return true;
}

export function onAccessChange(cb: (state: AccessState) => void): () => void {
  const { auth } = getFirebase();
  return onAuthStateChanged(auth, async (user) => {
    if (!user || !user.email) {
      cb({ user: null, email: null, hasAccess: false, isAdmin: false });
      return;
    }
    const email = user.email.toLowerCase();
    const domain = email.split('@')[1] ?? '';
    const tnsg = domain === TNSG_DOMAIN;

    let isAllowlisted = false;
    let isAdmin = false;
    try {
      const allow = await getAllowlistEmails();
      isAllowlisted = allow.includes(email);
    } catch {
      // hybrid: rules permit reading access/* only when domain or allowlist OK,
      // so a TNSG user might be unable to read access docs for the allowlist check.
      // Domain match alone is sufficient.
    }
    try {
      const admins = await getAdminEmails();
      isAdmin = admins.includes(email);
    } catch {
      isAdmin = false;
    }

    const hasAccess = tnsg || isAllowlisted || isAdmin;
    cb({
      user,
      email,
      hasAccess,
      isAdmin,
      reason: hasAccess ? undefined : 'Your Google account is not on the participant access list.',
    });
  });
}

async function getAllowlistEmails(): Promise<string[]> {
  const { db } = getFirebase();
  const snap = await getDoc(doc(db, 'access', 'allowedEmails'));
  if (!snap.exists()) return [];
  const data = snap.data();
  const list = Array.isArray(data?.emails) ? data.emails : [];
  return list.map((e: unknown) => String(e).toLowerCase());
}

async function getAdminEmails(): Promise<string[]> {
  const { db } = getFirebase();
  const snap = await getDoc(doc(db, 'access', 'admins'));
  if (!snap.exists()) return [];
  const data = snap.data();
  const list = Array.isArray(data?.emails) ? data.emails : [];
  return list.map((e: unknown) => String(e).toLowerCase());
}

export async function refreshAccess(): Promise<AccessState> {
  return new Promise((resolve) => {
    const stop = onAccessChange((s) => {
      stop();
      resolve(s);
    });
  });
}
