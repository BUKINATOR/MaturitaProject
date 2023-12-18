import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import firebase_app from "../../../firebase/firebase";

const auth = getAuth(firebase_app);

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {label: 'Email', type: 'email'},
                password: {label: 'Password', type: 'password'}
            },
            async authorize(credentials, req) {
                let email = credentials.email;
                let password = credentials.password;

                let fbUser = (await signInWithEmailAndPassword(auth, email, password)).user;
                let user = {id: fbUser.uid, name: fbUser.displayName, email: fbUser.email, image: fbUser.uid};

                console.log(user)

                return user;

                throw new Error("wrong auth");
            }
        })
    ],
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/signin', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    }
}

export default NextAuth(authOptions)