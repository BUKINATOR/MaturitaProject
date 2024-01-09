import type {AppProps} from 'next/app'
import {SessionProvider} from "next-auth/react"
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {getAuth} from "firebase/auth";
import '../styles/global.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

export default function App({Component, pageProps: {session, ...pageProps}}: AppProps) {
    return (
        <SessionProvider session={session}>
            <Header/>
            <Component {...pageProps} />
        </SessionProvider>
    )
}