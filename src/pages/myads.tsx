import React, {useEffect, useState} from "react";
import {getAllAds, getAllAdsOfUser, getUserByID} from "@/firebase/controller";
import Ad from "@/types/Ad";
import AdsDetails from "@/components/AdsDetails";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import Typography from "@mui/material/Typography";
import {GetServerSidePropsContext} from 'next';

export async function getServerSideProps(context: GetServerSidePropsContext) {
    let session = await getServerSession(context.req, context.res, {
        ...authOptions,
        session: undefined
    });
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

const Myads: React.FC<AdsProps> = (props: AdsProps) => {
    const [inzeratyseznam, setInzeratySeznam] = useState<Ad[]>(props.ads);

    async function handleDelete(id: string) {
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
            <Typography
                variant="h1"
                sx={{
                    textAlign: 'center',
                    fontFamily: 'Bebas Neue',
                    fontWeight: 400,
                    paddingTop: 5,
                    paddingBottom: 5,
                    fontSize: {
                        xs: '3rem',  // Adjust the font size for extra small screens
                        sm: '3rem',  // Adjust the font size for small screens
                        md: '3rem',  // Adjust the font size for medium screens
                        lg: '3.5rem',  // Adjust the font size for large screens
                    },
                }}
            >
                Moje Inzeráty
            </Typography>
            {inzeratyseznam && inzeratyseznam.length ? (
                <div>
                    {inzeratyseznam?.map((ad) => (
                        <div key={ad.id}>
                            <AdsDetails ad={ad} showDeleteIcon={!!ad.id} handleDelete={() => handleDelete(ad.id)}/>
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
