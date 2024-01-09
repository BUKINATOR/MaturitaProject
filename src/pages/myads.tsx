import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import MyAd from "@/components/MyAd";
import {getSession, useSession} from "next-auth/react";
import {deleteDoc, doc, DocumentData, onSnapshot, query, QuerySnapshot, where} from "@firebase/firestore";
import {getAllAds, getAllAdsOfUser, getUserByID, InzeratySeznamCollection} from "@/firebase/controller";
import Ad from "@/types/Ad";
import AdsDetails from "@/components/AdsDetails";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

export async function getServerSideProps(context) {
    let session = await getServerSession(context.req, context.res, authOptions);

    if (!session?.user) {
        return {
            redirect: {
                destination: '/auth/signin',
                permanent: false,
            },
        }
    }

    let ads = await getAllAdsOfUser(session.user.id)
    let user = await getUserByID(session.user.id);
    ads.forEach((a) => a.user = user);
    return {props: {ads: ads}};
}

interface AdsProps {
    ads: Ad[]
}

const Myads: React.FC = (props: AdsProps) => {
    const [inzeratyseznam, setInzeratySeznam] = useState<Ad[]>(props.ads);

    async function handleDelete(id) {
        await fetch("/api/ad/delete", {
            method: "POST",
            body: JSON.stringify({
                "id": id
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        location.reload();
    }

    return (
        <div className="card">
            <h2 className="title">Moje Inzeráty</h2>
            {inzeratyseznam && inzeratyseznam.length ? (
                <div>
                    {inzeratyseznam?.map((ad) => (
                        <div key={ad.id}>
                            <AdsDetails ad={ad} showDeleteIcon={!!ad.id} handleDelete={() => handleDelete(ad.id)} />
                        </div>
                    ))}
                </div>
            ) : (
                <h2 className='zadny inzerat'>Nejsou tu žádné inzeráty</h2>
            )}
        </div>
    );
}

export default Myads;