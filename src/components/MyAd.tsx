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
import {InzeratySeznamCollection} from '../firebase/controller';
import {NewInzeratType} from '../types/ad';
import Information from './AdsDetails';
import {authUtils} from '../firebase/authUtils';
import DeleteIcon from '@mui/icons-material/Delete';
import {useSession} from "next-auth/react";


function MyAds() {
    const [inzeratyseznam, setInzeratySeznam] = useState<NewInzeratType[]>([]);
    const {data: session, status} = useSession();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (session.user) {
                    const userUid = session.user.id;
                    const adsQuery = query(InzeratySeznamCollection, where('userId', '==', userUid));

                    const unsubscribe = onSnapshot(adsQuery, (snapshot: QuerySnapshot<DocumentData>) => {
                        setInzeratySeznam(snapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        })));
                    });

                    return () => unsubscribe();
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    const handleDeleteAd = async (adId: string | undefined) => {
        try {
            const adRef = doc(InzeratySeznamCollection, adId);
            await deleteDoc(adRef);
            // Můžete také aktualizovat stav, abyste odstranili smazaný inzerát z seznamu, pokud je to potřeba.
        } catch (error) {
            console.error('Error deleting ad:', error);
        }
    };

    return (
        <div className="card">
            <h2 className="title">Moje Inzeráty</h2>
            {inzeratyseznam && inzeratyseznam.length ? (
                <div>
                    {inzeratyseznam?.map((ad) => (
                        <div key={ad.id}>
                            <Information ad={ad}/>
                            {ad.id && (
                                <DeleteIcon sx={{color: 'red'}} onClick={() => handleDeleteAd(ad.id)}
                                            style={{cursor: 'pointer'}}/>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <h2 className='zadny inzerat'>Nejsou tu žádné inzeráty</h2>
            )}
        </div>
    );
}

export default MyAds;
