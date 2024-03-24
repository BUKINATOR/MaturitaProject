import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import {getSession} from "next-auth/react";
import {getAllAds, getUserByID} from "@/firebase/controller";
import {DocumentData, getDocs, onSnapshot, query, QuerySnapshot, where} from "@firebase/firestore";
import AdsFilter from "@/components/AdsFilter";
import { GetServerSidePropsContext } from 'next';
import {Grid} from "@mui/material";
import AdsDetails from "@/components/AdsDetails";
import Ad from "@/types/Ad";
import Box from "@mui/material/Box";

export async function getServerSideProps(context: GetServerSidePropsContext) {
    let ads = await getAllAds()
    let fullads = await Promise.all(ads.map(async (a) => {
        if (a.userId === null) {
            // Handle the case where userId is null
            return {...a, user: null};
        }
        return {...a, user: await getUserByID(a.userId)}
    }));
    return {props: {ads: fullads}};
}

interface AdsProps {
    ads: Ad[]
}

const Ads = (props: AdsProps) => {
    const [inzeratyseznam, setInzeratySeznam] = useState<Ad[]>(props.ads);
    const [filter, setFilter] = useState({categories: "", location: "", priceFrom: "", priceTo: ""});

    const handleFilter = (newFilter: any) => {
        let newlist : Ad[] = []
        props.ads.forEach((ad) => {
            if ((newFilter.categories != "" ? (ad.category == newFilter.categories) : true) &&
                (newFilter.location != "" ? (ad.location == newFilter.location) : true) &&
                (newFilter.priceFrom != "" ? (ad.salary >= newFilter.priceFrom) : true) &&
                (newFilter.priceTo != "" ? (ad.salary <= newFilter.priceTo) : true))
                newlist.push(ad);
        })
        setInzeratySeznam(newlist)
        setFilter(newFilter);
    };

    return (
        <Box className="card">
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
                {
                    inzeratyseznam.map((ad) => {
                        console.log(ad);
                        return (<Grid item xs={12} sm={6} key={ad.id} className="ad-card">
                            <AdsDetails ad={ad}/>
                        </Grid>)
                    })
                }
            </Grid>
            {inzeratyseznam.length === 0 && (
                <h2 className="zadny inzerat">Nejsou tu žádné inzeráty, první je tvůj!</h2>
            )}
            <Box
                component="div"
                sx={{
                    position: "absolute",
                    zIndex: -1,
                    bottom: 0,
                    right: 0,
                    "@media (max-width: 1500px)": {
                        display: "none",
                    },
                }}
            >
                <img src="Ads_BG.jpg" alt="logo" style={{width: "100%"}}/>
            </Box>
            <Box
                component="div"
                sx={{
                    position: "absolute",
                    zIndex: -1,
                    bottom: 0,
                    left: 0,
                    "@media (max-width: 1500px)": {
                        display: "none",
                    },
                }}
            >
                <img src="Ads_BG_03.jpg" alt="logo" style={{width: "100%"}}/>
            </Box>

        </Box>
    );
}

export default Ads;