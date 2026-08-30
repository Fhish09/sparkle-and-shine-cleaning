/**
 * Firebase configuration for Sparkle & Shine
 *
 * SETUP (one-time):
 * 1. Go to https://console.firebase.google.com
 * 2. Create a project (or open an existing one)
 * 3. Add a Web app → copy the firebaseConfig object below
 * 4. Build → Firestore Database → Create database → Start in test mode
 *    (or production with the rules in firestore.rules)
 * 5. Paste your real values into firebaseConfig below
 * 6. (Optional email alerts) Extensions → Install "Trigger Email from Firestore"
 *    and point it at collection "mail" with your Gmail app password SMTP
 */

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Collection where quote requests are stored
const QUOTES_COLLECTION = "quotes";

// Business inbox for optional Trigger Email extension
const BUSINESS_EMAIL = "sparkandshine009@gmail.com";
