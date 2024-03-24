import React from 'react';
import Ad from '../types/Ad';
import {Box, Rating} from '@mui/material';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';  // Přidána ikona chatu
import PersonIcon from "@mui/icons-material/Person";
import {useRouter} from 'next/router';
import Link from 'next/link';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
    ad: Ad;
    showDeleteIcon?: boolean;
    handleDelete?: () => void;
}


function AdsDetails({ad, showDeleteIcon = false, handleDelete}: Props) {
    const router = useRouter();

    return (
        <div className="inzerat-preview">
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Box sx={{
                    backgroundColor: 'white',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    width: '100%',
                    maxWidth: '562px',
                    height: '150px'
                }}>
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <Box sx={{display: 'flex', justifyContent: 'start', flex: 4, flexDirection: 'column'}}>
                            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    marginRight: '1rem',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    borderRadius: '50%',
                                    marginTop: '0.5rem',
                                    marginLeft: '0.5rem',
                                    width: 55,
                                    cursor: 'pointer'
                                }}>
                                    <Link href={`/profile/${ad.user.id}`} passHref>
                                        <PersonIcon sx={{width: 45, height: 45, color: 'grey'}}/>
                                    </Link>
                                </Box>
                                <Box
                                    sx={{display: 'flex', flexDirection: 'column', marginTop: '0.5rem'}}>
                                    <div className="jmeno">{ad.user.displayName}</div>
                                    <Rating sx={{fontSize: '17px'}} name="half-rating-read" defaultValue={3.5}
                                            precision={0.5} readOnly/>
                                    <div className="cena">{`${ad.salary}/h`}</div>
                                </Box>
                            </Box>
                            <Box sx={{marginLeft: '1rem', marginTop: '0.5rem'}}>
                                <div className="text">{ad.text}</div>
                            </Box>
                        </Box>
                        <Box
                            className="DetailAd"
                            sx={{
                                marginTop: '10px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flex: 1,
                                flexDirection: 'column',
                                padding: '1rem',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    borderRadius: '50%',
                                    width: 30,
                                    height: 30,
                                    padding: '0.5rem',
                                }}
                            >
                                <Link href={`/ad/${ad.id}`}>
                                    <ArrowForwardIosRoundedIcon
                                        sx={{
                                            color: 'grey',
                                            display: 'flex',
                                            alignItems: 'center',
                                            width: 22,
                                            height: 22
                                        }}
                                    />
                                </Link>
                            </Box>
                            {!showDeleteIcon && (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'white',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        borderRadius: '50%',
                                        width: 30,
                                        height: 30,
                                        marginTop: '5%',
                                        padding: '0.5rem',
                                    }}
                                >
                                    <ChatBubbleOutlineRoundedIcon
                                        sx={{
                                            color: 'grey',
                                            display: 'flex',
                                            alignItems: 'center',
                                            width: 22,
                                            height: 22
                                        }}
                                    />
                                </Box>
                            )}
                            {showDeleteIcon && (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'white',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        borderRadius: '50%',
                                        width: 30,
                                        height: 30,
                                        marginTop: '5%',
                                        padding: '0.5rem',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => handleDelete && handleDelete()}

                                >
                                    <DeleteIcon sx={{color: 'red'}}/>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default AdsDetails;
