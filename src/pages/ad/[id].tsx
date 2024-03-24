import React, {useState, useEffect} from 'react';
import {doc, getDoc} from '@firebase/firestore';
import DetailAd from '../../components/DetailAd';
import Header from '@/components/Header';
import {getAdByID, getUserByID} from "@/firebase/controller";
import {GetServerSidePropsContext} from 'next';
import Ad from "@/types/Ad";


export async function getServerSideProps(context: GetServerSidePropsContext) {
    const {id} = context.query;

    if (typeof id !== 'string') {
        // Handle the case where id is not a string
        return {props: {error: 'Invalid id'}};
    }

    let ad = await getAdByID(id);
    if (ad.userId === null) {
        // Handle the case where userId is null
        return {props: {error: 'userId is null'}};
    }
    ad.user = await getUserByID(ad.userId);
    return {props: {ad}}
}

function DetailInzeratu({ad}: { ad: Ad }) {
    return (
        <div className="card">
            {ad && <DetailAd ad={ad}/>}
            {!ad && <p>Loading...</p>}
        </div>
    );
}

export default DetailInzeratu;
