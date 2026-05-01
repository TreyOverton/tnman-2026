/**
 * Seed Firestore with initial access docs.
 *
 * Why a script (not an admin UI bootstrap): the rules require an admin to
 * write to access/*, and there is no admin yet on a fresh project. The
 * one-time bootstrap relies on Firestore allowing writes only when the
 * docs do not yet exist (rules check `request.auth.token.email in admins`,
 * which evaluates against `get(...)` and fails closed when admins doc is
 * absent — so this script must be run once before rules are deployed, OR
 * with rules temporarily relaxed). Recommended order:
 *
 *   1. firebase deploy --only firestore:indexes
 *   2. npm run seed   (writes access/admins, access/allowedEmails)
 *   3. firebase deploy --only firestore:rules
 *
 * Run interactively from a terminal that can open a browser for OAuth.
 */

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCjjnBNxe_0cjGhvMNks8KsUmLnDrDyq_0',
  authDomain: 'tnman-2026.firebaseapp.com',
  projectId: 'tnman-2026',
  appId: '1:1072049931332:web:b4fd334af14d20804d6811',
};

const ADMIN_EMAILS = [
  'aaron.overton@tnstateguard.org',
  'sheaf@tnstateguard.org',
];

const ALLOWED_EMAILS: string[] = [];

const INJECTS = [
  {
    slug: 'soldier-kia',
    title: 'Soldier KIA / Mass-Casualty',
    scenario:
      'A simulated soldier becomes a casualty during operations. ICP must coordinate medical response, family notification (notional), chain-of-command reporting, and continuity of mission. Playbook content authored by 1LT Overton in /admin/injects.',
    active: false,
  },
  {
    slug: 'downed-uas',
    title: 'Downed UAS Recovery',
    scenario:
      'A team UAS goes down outside the planned recovery area. Air Ops must coordinate recovery; SECFOR establishes a recovery cordon if outside HAAP; safety verifies battery/RF status. Playbook content authored by 1LT Overton in /admin/injects.',
    active: false,
  },
  {
    slug: 'scenario-3-tbd',
    title: 'Scenario 3 — TBD',
    scenario:
      'Reserved for a third inject scenario. Title and content to be authored before exercise execution.',
    active: false,
  },
];

async function main() {
  console.log('Initializing Firebase…');
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  console.log('Sign-in: a browser window will open. Use an admin TNSG account.');
  const provider = new GoogleAuthProvider();
  const cred = await signInWithPopup(auth, provider);
  const email = cred.user.email?.toLowerCase();
  console.log(`Signed in as: ${email}`);
  if (!email) {
    throw new Error('No email on signed-in account.');
  }

  console.log('Writing access/admins…');
  await setDoc(doc(db, 'access', 'admins'), {
    emails: ADMIN_EMAILS,
    updatedAt: new Date().toISOString(),
    updatedBy: email,
  });

  console.log('Writing access/allowedEmails…');
  await setDoc(doc(db, 'access', 'allowedEmails'), {
    emails: ALLOWED_EMAILS,
    updatedAt: new Date().toISOString(),
    updatedBy: email,
  });

  for (const inject of INJECTS) {
    console.log(`Writing injects/${inject.slug}…`);
    await setDoc(doc(db, 'injects', inject.slug), {
      title: inject.title,
      scenario: inject.scenario,
      active: inject.active,
      createdAt: new Date().toISOString(),
      createdBy: email,
    });
    await setDoc(doc(db, 'injects', inject.slug, 'private', 'playbook'), {
      playbook: {},
      updatedAt: new Date().toISOString(),
    });
  }

  console.log('Seed complete.');
  console.log('Note: sheaf@tnstateguard.org is a placeholder — confirm LTC Sheaf actual email and update via /admin/access.');
  process.exit(0);
}

main().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
