import React, {useEffect, useState} from 'react';
import {
    onSnapshot,
    query,
    where,
    collection,
    deleteDoc,
    doc,
    QuerySnapshot,
    DocumentData
} from '@firebase/firestore';
import Information from './AdsDetails';
import {authUtils} from '../firebase/authUtils';
import {useSession} from "next-auth/react";
import AdsDetails from "./AdsDetails";
import DeleteIcon from '@mui/icons-material/Delete';


function MyAds() {

}

export default MyAds;
