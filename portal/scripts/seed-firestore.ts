/**
 * Seed Firestore with initial access docs and inject scenarios.
 *
 * Run order:
 *   1. Firestore must be in Test Mode (open writes), OR rules not yet deployed.
 *   2. npm run seed   (writes access/* and injects/*)
 *   3. firebase deploy --only firestore:rules,firestore:indexes
 *
 * No auth: Test Mode allows unauthenticated writes for the first 30 days.
 * The Firebase Auth Node SDK does not support signInWithPopup, so this
 * runs without a signed-in user and stamps `seed-script` as updatedBy.
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCjjnBNxe_0cjGhvMNks8KsUmLnDrDyq_0',
  authDomain: 'tnman-2026.firebaseapp.com',
  projectId: 'tnman-2026',
  appId: '1:1072049931332:web:b4fd334af14d20804d6811',
};

const ADMIN_EMAILS = [
  'aaron.overton@tnstateguard.org',
  'john.sheaf@tnstateguard.org',
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
  const db = getFirestore(app);

  const updatedBy = 'seed-script';
  const now = new Date().toISOString();

  console.log('Writing access/admins…');
  await setDoc(doc(db, 'access', 'admins'), {
    emails: ADMIN_EMAILS,
    updatedAt: now,
    updatedBy,
  });

  console.log('Writing access/allowedEmails…');
  await setDoc(doc(db, 'access', 'allowedEmails'), {
    emails: ALLOWED_EMAILS,
    updatedAt: now,
    updatedBy,
  });

  for (const inject of INJECTS) {
    console.log(`Writing injects/${inject.slug}…`);
    await setDoc(doc(db, 'injects', inject.slug), {
      title: inject.title,
      scenario: inject.scenario,
      active: inject.active,
      createdAt: now,
      createdBy: updatedBy,
    });
    await setDoc(doc(db, 'injects', inject.slug, 'private', 'playbook'), {
      playbook: {},
      updatedAt: now,
    });
  }

  console.log('');
  console.log('Seed complete.');
  console.log('Admin allowlist seeded with: 1LT Aaron Overton + LTC John Sheaf. Manage via /admin/access.');
  process.exit(0);
}

main().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
