import React from "react";
import Header from "../components/Header";
import Profil from "../components/Profile";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";


const Inzeraty = () => {
    const {data: session, status} = useSession();
    const router = useRouter();

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (!session) {
        router.push("/auth/signin");
        return null;
    }

    return (
        <>
            <Header/>
            <Profil/>
        </>
    )
}

export default Inzeraty;