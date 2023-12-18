import React from "react";
import CreateAd from '../components/CreateAd';
import Header from "../components/Header";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

const VytvoreniInzeratu: React.FC = () => {
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
            <CreateAd/>
        </>
    );
};

export default VytvoreniInzeratu;
