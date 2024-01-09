import React, {useEffect, useState} from "react";
import CreateAd from '../components/CreateAd';
import Header from "../components/Header";
import {useSession} from "next-auth/react";
import kategorieData from "@/json/kategorie.json";
import {Box, Button, Grid, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import lokaceData from "@/json/lokace.json";

const VytvoreniInzeratu: React.FC = () => {
    const {data: session, status} = useSession()

    let [sessionStatus, setSessionStatus] = useState(session)
    useEffect(() => {
        sessionStatus = status
    }, [session])


};

export default VytvoreniInzeratu;
