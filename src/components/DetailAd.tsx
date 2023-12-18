import React from 'react';
import {NewInzeratType} from '@/types/ad';
import {Box} from '@mui/material';

interface IProps {
    ad: NewInzeratType;
}

function DetailAd({ad}: IProps) {
    console.log(ad, 'inzerat');
    return (
        <div className="detail-inzerat-view">
            <Box sx={{backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '80%'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', padding: '1rem'}}>
                    <div className="jmeno">{ad.displayName}</div>
                    <div className="cena">{`${ad.cena}/h`}</div>
                    <div className="kategorie">{ad.kategorie}</div>
                    <div className="rubrika">{ad.rubrika}</div>
                    <div className="lokace">{ad.lokace}</div>
                    <div className="phoneNumber">{ad.phoneNumber}</div>
                    <div className="text">{ad.text}</div>
                </Box>
            </Box>
        </div>
    );
}

export default DetailAd;
