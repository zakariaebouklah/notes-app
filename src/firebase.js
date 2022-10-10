// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_DOMAIN,
    projectId:  process.env.REACT_APP_PROJECT_ID,
    storageBucket:  process.env.REACT_APP_BUCKET_ID,
    messagingSenderId:  process.env.REACT_APP_MESSAGING_ID,
    appId: process.env.REACT_APP_APP_ID
};
console.log(process.env)
console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// db.settings({timestampsInSnapshots: true});

export {app, auth, db};