import React from 'react';
import Ad from '../types/Ad';
import {Box} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import NotesIcon from '@mui/icons-material/Notes';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

interface Props {
    ad: Ad
}

function DetailAd(props: Props) {
    console.log(props.ad, 'inzerat');
    return (
        <Box className="detail-inzerat-view" sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh'
        }}>
            <Box
                sx={{
                    backgroundColor: 'white',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    width: '100%',
                    maxWidth: '600px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box
                    className="jmeno"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '1rem',
                        borderBottom: '1px solid #ccc',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            marginRight: '1rem',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '50%',
                            width: 40,
                            height: 40,
                            cursor: 'pointer',
                        }}
                    >
                        <PersonIcon sx={{width: 35, height: 35, color: '#51B371'}}/>
                    </Box>
                    <Box sx={{fontWeight: 700, fontSize: 18}}>{props.ad.user.displayName}</Box>
                </Box>

                <Box
                    className="cena"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '1rem',
                        borderBottom: '1px solid #ccc',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            marginRight: '1rem',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '50%',
                            width: 40,
                            height: 40,
                            cursor: 'pointer',
                        }}
                    >
                        <AttachMoneyIcon sx={{width: 35, height: 35, color: '#51B371'}}/>
                    </Box>
                    <Box sx={{fontWeight: 700, fontSize: 18}}>{`${props.ad.salary}/h`}</Box>
                </Box>


                <Box
                    className="kategorie"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '1rem',
                        borderBottom: '1px solid #ccc',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            marginRight: '1rem',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '50%',
                            width: 40,
                            height: 40,
                            cursor: 'pointer',
                        }}
                    >
                        <NotesIcon sx={{width: 35, height: 35, color: '#51B371'}}/>
                    </Box>
                    <Box sx={{fontWeight: 700, fontSize: 18}}>{props.ad.category}</Box>
                </Box>


                <Box
                    className="lokace"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '1rem',
                        borderBottom: '1px solid #ccc',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            marginRight: '1rem',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '50%',
                            width: 40,
                            height: 40,
                            cursor: 'pointer',
                        }}
                    >
                        <LocationOnIcon sx={{width: 35, height: 35, color: '#51B371'}}/>
                    </Box>
                    <Box sx={{fontWeight: 700, fontSize: 18}}>{props.ad.location}</Box>
                </Box>

                <Box
                    className="cislo"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '1rem',
                        borderBottom: '1px solid #ccc',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            marginRight: '1rem',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '50%',
                            width: 40,
                            height: 40,
                            cursor: 'pointer',
                        }}
                    >
                        <PhoneIphoneIcon sx={{width: 35, height: 35, color: '#51B371'}}/>
                    </Box>
                    <Box sx={{fontWeight: 700, fontSize: 18}}>{props.ad.phoneNumber}</Box>
                </Box>

                <Box className="text" sx={{padding: '1rem', fontWeight: 700, fontSize: 18, display: 'flex'}}>
                    {props.ad.text}
                </Box>
            </Box>
        </Box>
    );
}

export default DetailAd;
