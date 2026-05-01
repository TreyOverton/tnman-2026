import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut as fbSignOut,
  onAuthStateChanged,
  type User,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { getFirebase } from './firebase';

const TNSG_DOMAIN = 'tnstateguard.org';

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
  await signInWithPopup(auth, provider);
}

export async function signOut(): Promise<void> {
  const { auth } = getFirebase();
  await fbSignOut(auth);
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
