import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyCjjnBNxe_0cjGhvMNks8KsUmLnDrDyq_0',
  authDomain: 'tnman.web.app',
  projectId: 'tnman-2026',
  appId: '1:1072049931332:web:b4fd334af14d20804d6811',
};

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;

export function getFirebase(): { app: FirebaseApp; auth: Auth; db: Firestore } {
  if (!app) {
    app = getApps().length ? getApps()[0]! : initializeApp(firebaseConfig);
  }
  if (!auth) auth = getAuth(app);
  if (!db) db = getFirestore(app);
  return { app, auth, db };
}
