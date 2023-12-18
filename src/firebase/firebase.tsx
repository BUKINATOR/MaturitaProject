import {initializeApp} from "firebase/app";
import {getAuth, setPersistence, browserSessionPersistence} from 'firebase/auth';
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDMl8XiGnIq46H_a_h64uwO89Y8kNRrT00",
    authDomain: "hodinovy-syn.firebaseapp.com",
    databaseURL: "https://hodinovy-syn-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hodinovy-syn",
    storageBucket: "hodinovy-syn.appspot.com",
    messagingSenderId: "650676154485",
    appId: "1:650676154485:web:4b1dca8bbeedc2e5f6c83c",
    measurementId: "G-YN1L6FFWZ4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);


export {app, auth, storage, db};


export default app;
