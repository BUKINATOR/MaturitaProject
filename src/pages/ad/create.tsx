import React, {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import kategorieData from "@/json/kategorie.json";
import {Box, Button, Grid, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import lokaceData from "@/json/lokace.json";
import EditAd from "@/components/EditAd";
import Ad from "@/types/Ad";

const VytvoreniInzeratu: React.FC = () => {
    const {data: session, status} = useSession()

    const [ad, setAd] = useState<Ad>({
        id: "",
        category: "",
        location: "",
        phoneNumber: "",
        salary: 0,
        section: "",
        text: "",
        userId: null,
        user: session?.user // assuming 'session' contains the user information
    });

    const change = (updatedAd:  Ad) => {
        setAd(updatedAd);
    };

    async function submit() {
        await fetch("/api/ad/create", {
            method: "POST",
            body: JSON.stringify(ad),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        location.replace("/myads");
    }

    return (
        <>
            <EditAd ad={ad} change={change} sumbit={submit}/>
        </>
    );
};

export default VytvoreniInzeratu;
