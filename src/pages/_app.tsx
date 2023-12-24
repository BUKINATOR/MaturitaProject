import type {AppProps} from 'next/app'
import {SessionProvider} from "next-auth/react"
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {getAuth} from "firebase/auth";
import '../styles/global.css';


export declare interface UserInfo {
    readonly displayName: string | null;
    readonly email: string | null;
    readonly phoneNumber: string | null;
    readonly photoURL: string | null;
    readonly providerId: string;
    readonly uid: string;
}

export async function getServerSideProps({req, res}) {
    let ses = await getServerSession(req, res, authOptions);
    ses.user.id = ses.user.image;
    return {
        props: {
            session: ses
        }
    }
}

export default function App({Component, pageProps: {session, ...pageProps}}: AppProps) {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    )
}