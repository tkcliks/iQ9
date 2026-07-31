import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { 
  getAuth, 
  signInWithCustomToken, 
  signInAnonymously, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updatePassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  onSnapshot 
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Your project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa2Ixuuh5fhZtHvcOtmVc9T-gMysC1EEQ",
  authDomain: "iq9-ai-exam.firebaseapp.com",
  projectId: "iq9-ai-exam",
  storageBucket: "iq9-ai-exam.firebasestorage.app",
  messagingSenderId: "405773574409",
  appId: "1:405773574409:web:775b444dc307ba5b6573d8",
  measurementId: "G-REDWW7N79P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = 'iq9-app';

// Export services globally for Babel/React script modules
window.FirebaseServices = {
  auth,
  db,
  appId,
  signInWithCustomToken,
  signInAnonymously,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updatePassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
  doc,
  setDoc,
  getDoc,
  onSnapshot
};
