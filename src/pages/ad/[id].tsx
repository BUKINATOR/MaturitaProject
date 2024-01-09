import React, {useState, useEffect} from 'react';
import {doc, getDoc} from '@firebase/firestore';
import DetailAd from '../../components/DetailAd';
import Header from '@/components/Header';
import {getAdByID} from "@/firebase/controller";

export async function getServerSideProps(context) {
    const { id } = context.query;
    let ad = await getAdByID(id);
    return {props: {ad}}
}

function DetailInzeratu({ad}) {
    return (
        <div className="card">
            {ad && <DetailAd ad={ad}/>}
            {!ad && <p>Loading...</p>}
        </div>
    );
}

export default DetailInzeratu;
