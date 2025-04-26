// src/firebase/config.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDzLfa_ZBowHXM3DL3AbgDdW7-xNFwpXfc",
  authDomain: "sugumar-portfolio.firebaseapp.com",
  databaseURL: "https://sugumar-portfolio-default-rtdb.firebaseio.com", // Add this line
  projectId: "sugumar-portfolio",
  storageBucket: "sugumar-portfolio.appspot.com", // Fixed URL
  messagingSenderId: "755209028697",
  appId: "1:755209028697:web:3accaeb9735b2af7c99d48",
  measurementId: "G-MCXQLZVXJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth, Database, and Storage instances
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);

export default app;