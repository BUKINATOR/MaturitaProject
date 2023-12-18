import firebase_app from "./firebase";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    User
} from "firebase/auth";
import {updateProfile} from "firebase/auth";
import {unsubscribe} from "diagnostics_channel";

const auth = getAuth(firebase_app);
export const authUtils = {
    login: async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password);
    },
    logout: async () => {
        await auth.signOut()
    },
    signin: async (email: string, password: string, displayName: string) => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(userCredential.user, {displayName});
    },
    checkEmailInUse: async (email: string) => {

    },
}