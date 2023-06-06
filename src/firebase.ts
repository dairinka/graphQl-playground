import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

let initialize;
console.log(import.meta.env.MODE);
if (import.meta.env.MODE === 'development') {
  initialize = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,
  };
} else {
  initialize = {
    apiKey: import.meta.env.APIKEY,
    authDomain: import.meta.env.AUTHDOMAIN,
    projectId: import.meta.env.PROJECTID,
    storageBucket: import.meta.env.STORAGEBUCKET,
    messagingSenderId: import.meta.env.MESSAGINGSENDERID,
    appId: import.meta.env.APPID,
  };
}

const app = initializeApp(initialize);
const auth = getAuth(app);
const db = getFirestore(app);

const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : String(error);

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
};

const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = res;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    } as unknown);
    await updateProfile(user, { displayName: name });
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, logInWithEmailAndPassword, registerWithEmailAndPassword, logout };
