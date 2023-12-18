import React, {useState, useEffect} from 'react';
import {onSnapshot, QuerySnapshot, DocumentData} from "@firebase/firestore";
import {NewInzeratType} from "../types/ad";
import AdsFilter from "./AdsFilter";
import Information from "./AdsDetails";
import {Grid} from '@mui/material';
import {InzeratySeznamCollection} from '@/firebase/controller';

function Ads() {
    const [inzeratyseznam, setInzeratySeznam] = useState<NewInzeratType[]>([]);
    const [filter, setFilter] = useState({categories: "", location: "", priceFrom: "", priceTo: ""});

    useEffect(() => {
        const unsubscribe = onSnapshot(InzeratySeznamCollection, (snapshot: QuerySnapshot<DocumentData>) => {
            const filteredAds = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
            }).filter((ad) => {
                // Implement your filtering logic here
                const categoryMatch = !filter.categories || ad.kategorie === filter.categories;
                const locationMatch = !filter.location || ad.lokace === filter.location;
                const priceFromMatch = !filter.priceFrom || ad.cena >= parseInt(filter.priceFrom, 10);
                const priceToMatch = !filter.priceTo || ad.cena <= parseInt(filter.priceTo, 10);
                return categoryMatch && locationMatch && priceFromMatch && priceToMatch;
            });

            setInzeratySeznam(filteredAds);
        });

        return () => unsubscribe();
    }, [filter]);

    const handleFilter = (newFilter: any) => {
        setFilter(newFilter);
    };

    return (
        <div className="card">
            <AdsFilter filter={filter} setFilter={handleFilter}/>
            <Grid container spacing={3} sx={{
                paddingLeft: '35rem', paddingRight: '35rem', '@media (max-width: 2300px)': {
                    paddingLeft: '30rem', paddingRight: '30rem'
                }, '@media (max-width: 2100px)': {
                    paddingLeft: '25rem', paddingRight: '25rem'
                }, '@media (max-width: 1960px)': {
                    paddingLeft: '22rem', paddingRight: '22rem'
                }, '@media (max-width: 1770px)': {
                    paddingLeft: '0rem', paddingRight: '0rem'
                },
            }}>
                {inzeratyseznam.map((ad) => (
                    <Grid item xs={12} sm={6} key={ad.id} className="ad-card">
                        <Information ad={ad}/>
                    </Grid>
                ))}
            </Grid>
            {inzeratyseznam.length === 0 && (
                <h2 className="zadny inzerat">Nejsou tu žádné inzeráty, první je tvůj</h2>
            )}
        </div>
    );
}

export default Ads;
