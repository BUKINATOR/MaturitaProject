// UserProfile.tsx
import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {Box, Divider, Link, Rating, Typography} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import ModalProfile from './ModalProfile';
import {useSession} from 'next-auth/react';

type User = {
    displayName: string;
};
const UserProfile = ({user}: { user: User }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const {data: session, status} = useSession();
    const router = useRouter();

    const handleAddIconClick = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleSaveText = async (text: string) => {
        // Handle saving text to the user profile
        console.log('Text saved:', text);
    };

    return (
        <>
            <Typography variant="h2" sx={{display: 'flex', marginLeft: '6rem', fontFamily: 'Bebas Neue'}}>
                Vítej na účtu {user.displayName}
            </Typography>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Box
                    sx={{
                        display: 'flex',
                        marginLeft: '6rem',
                        height: '100%',
                        justifyContent: 'start',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}
                >
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <Box className='whiteBox'
                             sx={{
                                 width: '361px',
                                 height: '100px',
                                 backgroundColor: '#fff',
                                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                 display: 'flex',
                                 alignItems: 'center',
                                 justifyContent: 'center'
                             }}
                        >
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'start',
                                alignItems: 'center',
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    marginRight: '1rem',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    borderRadius: '50%',
                                    width: 60,
                                    height: 60
                                }}>
                                    <PersonIcon sx={{width: 50, height: 50, color: 'grey'}}/>
                                </Box>

                                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography variant="subtitle1"
                                                sx={{fontWeight: 'bold'}}>{user && user.displayName}</Typography>
                                    <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly/>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="Omne"
                             sx={{
                                 width: '361px',
                                 height: '230px',
                                 backgroundColor: '#F8F8F8',
                                 marginTop: '1rem'
                             }}
                        >
                            <Box sx={{display: 'flex', width: '100%', marginLeft: '1rem', marginTop: '0.5rem'}}>
                                <Typography variant="h6" sx={{color: '#707070'}}>O mně</Typography>
                            </Box>
                        </Box>
                        <Box className="Dovednosti"
                             sx={{
                                 width: '361px',
                                 height: '230px',
                                 backgroundColor: '#F8F8F8',
                                 marginTop: '1rem'
                             }}
                        >
                            <Box sx={{display: 'flex', width: '100%', marginLeft: '1rem', marginTop: '0.5rem'}}>
                                <Typography variant="h6" sx={{color: '#707070'}}>Dovednosti</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="Recenze"
                         sx={{
                             width: '400px',
                             height: '590px',
                             backgroundColor: '#F8F8F8',
                             marginLeft: '1rem'
                         }}
                    >
                        <Box sx={{display: 'flex', width: '100%', marginLeft: '1rem', marginTop: '0.5rem'}}>
                            <Typography variant="h6" sx={{color: '#707070'}}>Recenze</Typography>
                        </Box>
                    </Box>
                    <Box className="Inzeráty"
                         sx={{
                             width: '400px',
                             height: '590px',
                             backgroundColor: '#F8F8F8',
                             marginLeft: '1rem'
                         }}
                    >
                        <Box sx={{display: 'flex', width: '100%', marginLeft: '1rem', marginTop: '0.5rem'}}>
                            <Typography variant="h6" sx={{color: '#707070'}}>Inzeráty</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box component="div" sx={{position: 'absolute', zIndex: -1, right: 0, bottom: 0}}>
                    <img src="/Image 15.png" alt="logo"/>
                </Box>

            </Box>
        </>
    );
};

export default UserProfile;
