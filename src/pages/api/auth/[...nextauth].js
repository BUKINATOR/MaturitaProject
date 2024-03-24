import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import {getUserByID, getCredentials} from "@/firebase/controller";
import {createHash} from "crypto";


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
                let creds = await getCredentials(email, createHash("sha256").update(password).digest("hex"));
                if (!creds)
                    throw new Error("Unknown credentials")
                let user = await getUserByID(creds.userId);

                return {id: user.id, name: user.displayName, email: creds.email, image: null};

                throw new Error("wrong auth");
            }
        })
    ],
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/signin', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
    },
    callbacks: {
        session: async ({session, token}) => {
            if (session?.user) {
                session.user.id = token.uid;
            }
            return session;
        },
        jwt: async ({user, token}) => {
            if (user) {
                token.uid = user.id;
            }
            return token;
        },
        register: async (name, email, password) => {
            console.log(name, email, password);
        },
    },
    session: {
        strategy: 'jwt',
    },
}

export default NextAuth(authOptions)