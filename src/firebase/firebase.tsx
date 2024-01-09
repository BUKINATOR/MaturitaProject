import {initializeApp} from "firebase/app";
import {getAuth, setPersistence, browserSessionPersistence} from 'firebase/auth';
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_CONFIG_apiKey,
    authDomain: process.env.FIREBASE_CONFIG_authDomain,
    databaseURL: process.env.FIREBASE_CONFIG_databaseURL,
    projectId: process.env.FIREBASE_CONFIG_projectId,
    storageBucket: process.env.FIREBASE_CONFIG_storageBucket,
    messagingSenderId: process.env.FIREBASE_CONFIG_messagingSenderId,
    appId: process.env.FIREBASE_CONFIG_appId,
    measurementId: process.env.FIREBASE_CONFIG_measurementId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);


export {app, auth, storage, db};


export default app;
