import React, {useState, useEffect} from 'react';
import {doc, getDoc} from '@firebase/firestore';
import DetailAd from '../../components/DetailAd';
import {NewInzeratType} from '../../types/ad';
import {InzeratySeznamCollection} from '../../firebase/controller';
import {useRouter} from 'next/router';
import Header from '@/components/Header';

function DetailInzeratu() {
    const router = useRouter();
    const {id} = router.query;
    const [ad, setAd] = useState<NewInzeratType | null>(null);

    useEffect(() => {
        const fetchAd = async () => {
            try {
                const adDoc = doc(InzeratySeznamCollection, id as string);
                const adSnapshot = await getDoc(adDoc);

                if (adSnapshot.exists()) {
                    setAd({
                        id: adSnapshot.id,
                        ...adSnapshot.data(),
                    });
                } else {
                    console.log('Ad not found');
                }
            } catch (error) {
                console.error('Error fetching ad:', error);
            }
        };

        fetchAd();
    }, [id]);

    return (
        <div className="card">
            <Header/>
            {ad && <DetailAd ad={ad}/>}
            {!ad && <p>Loading...</p>}
        </div>
    );
}

export default DetailInzeratu;
