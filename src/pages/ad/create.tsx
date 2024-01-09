import React, {useEffect, useState} from "react";
import CreateAd from '../components/CreateAd';
import Header from "../components/Header";
import {useSession} from "next-auth/react";
import kategorieData from "@/json/kategorie.json";
import {Box, Button, Grid, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import lokaceData from "@/json/lokace.json";
import EditAd from "@/components/EditAd";

const VytvoreniInzeratu: React.FC = () => {
    const {data: session, status} = useSession()

    let ad = {
        id: "",
        category: "",
        location: "",
        phoneNumber: "",
        salary: 0,
        section: "",
        text: "",
        userId: null,
    }

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
            <EditAd ad={ad} sumbit={submit}/>
        </>
    );
};

export default VytvoreniInzeratu;
