import React from "react";
import Header from "../components/Header";
import MyAd from "@/components/MyAd";
import {getSession} from "next-auth/react";
import {query, where} from "@firebase/firestore";
import {InzeratySeznamCollection} from "@/firebase/controller";

/*
export async function getServerSideProps(context) {
    let session = await getSession(context);
    if (!session)
        return {props:{}};

    console.log(session);
    let q = query(InzeratySeznamCollection, where("userId", "==", session.user.uid));
    let docs = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
    return {props:{}};
}
*/
import {getServerSideProps} from "@/pages/_app";

export {getServerSideProps};

const MojeInzeraty: React.FC = () => {

    return (
        <>
            <Header/>
            <MyAd/>
        </>

    )
}

export default MojeInzeraty;