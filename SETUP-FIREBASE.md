# Firebase setup for the Get a Quote form

The quote form no longer uses FormSubmit. It saves requests to **Cloud Firestore** and redirects to `thank-you.html`.

## 1. Create / open a Firebase project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a project (or open an existing one)
3. Click the **Web** icon (`</>`) to register a web app
4. Copy the `firebaseConfig` object

## 2. Enable Firestore

1. **Build → Firestore Database → Create database**
2. Choose **Production mode** (or test mode for quick testing)
3. Pick a region (e.g. `us-central1`)

## 3. Security rules

In Firestore → **Rules**, paste the contents of `firestore.rules` from this repo and **Publish**.

## 4. Paste your config into the site

Open `js/firebase-config.js` and replace the placeholders:

```js
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc"
};
```

Commit and push (or edit on GitHub).

## 5. Test the form

1. Open `quote.html` on your site
2. Submit a test quote
3. You should land on `thank-you.html`
4. In Firebase Console → Firestore → `quotes` collection, you should see the new document

## 6. Optional: get emails in your inbox

Firestore alone stores the requests (free on Spark). To also **email** `sparkandshine009@gmail.com`:

1. Firebase Console → **Extensions**
2. Install **Trigger Email from Firestore** (`firestore-send-email`)
3. Collection name: `mail`
4. SMTP: use Gmail with an [App Password](https://myaccount.google.com/apppasswords)
   - SMTP host: `smtp.gmail.com`
   - Port: `465` (SSL) or `587`
   - User: your Gmail
   - Password: the 16-character app password

The form already writes a document to the `mail` collection on each submit. Once the extension is installed, those become real inbox emails.

> Note: Some SMTP setups work best on the **Blaze** (pay-as-you-go) plan. Blaze still has a free tier for low volume.

## Viewing requests without email

Firebase Console → Firestore → `quotes` — every submission is listed with name, email, service, message, and timestamp.
