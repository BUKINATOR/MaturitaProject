import React, {useEffect, useState} from "react";
import {useSession} from "next-auth/react";

const VytvoreniInzeratu: React.FC = () => {
    const {data: session, status} = useSession()

    let [sessionData, setSessionData] = useState(session)
    let [sessionStatus, setSessionStatus] = useState(status)

    useEffect(() => {
        setSessionData(session)
        setSessionStatus(status)
    }, [session, status])

    return null;
};

export default VytvoreniInzeratu;