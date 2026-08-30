import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAL17ZEiWJWltjDJOpDoSnCpmFOPzQCidY",
  authDomain: "sparkle-and-shine-testimonials.firebaseapp.com",
  projectId: "sparkle-and-shine-testimonials",
  storageBucket: "sparkle-and-shine-testimonials.firebasestorage.app",
  messagingSenderId: "957259216547",
  appId: "1:957259216547:web:708cb1df556474fe303116"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const QUOTES_COLLECTION = "quotes";
export const BUSINESS_EMAIL = "sparkandshine009@gmail.com";
