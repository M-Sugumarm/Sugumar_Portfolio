import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDzLfa_ZBowHXM3DL3AbgDdW7-xNFwpXfc",
  authDomain: "sugumar-portfolio.firebaseapp.com",
  projectId: "sugumar-portfolio",
  storageBucket: "sugumar-portfolio.firebasestorage.app",
  messagingSenderId: "755209028697",
  appId: "1:755209028697:web:3accaeb9735b2af7c99d48",
  measurementId: "G-MCXQLZVXJB",
  databaseURL: "https://sugumar-portfolio-default-rtdb.firebaseio.com"  // Add this line for Realtime Database
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const database = getDatabase(app);