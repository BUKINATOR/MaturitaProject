import React from "react";
import Header from "../components/Header";
import Ads from "../components/Ads";
import {getSession} from "next-auth/react";
import {InzeratySeznamCollection} from "@/firebase/controller";
import {getDocs, query, where} from "@firebase/firestore";

export async function getServerSideProps(context) {
    let docs = await getDocs(InzeratySeznamCollection);
    let list = [];
    docs.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        list.push({
            id: doc.id,
            ...doc.data()
        })
    });
    return {props: {adus: list}};
}

const Inzeraty = ({adus}) => {
    return (
        <>
            <Header/>
            <Ads addus={adus}/>
        </>

    )
}

export default Inzeraty;