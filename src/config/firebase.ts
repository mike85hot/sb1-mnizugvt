import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCRjUdE-MqBm8FmLlteEvfEk4ExWdR2nag",
  authDomain: "tizora-5031f.firebaseapp.com",
  projectId: "tizora-5031f",
  storageBucket: "tizora-5031f.firebasestorage.app",
  messagingSenderId: "904159761632",
  appId: "1:904159761632:web:40517ecf2d3b4c8a08ac85",
  measurementId: "G-44KHPE0CM9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);