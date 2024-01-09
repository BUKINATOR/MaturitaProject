// UserProfile.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Divider, Link, Rating, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import ModalProfile from './ModalProfile';
import { useSession } from 'next-auth/react';

const UserProfile = ({ userId }) => {
    const [userData, setUserData] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Check if there is an active session and user data
                if (session?.user) {
                    const fetchedUserData = await fetch(`/api/users/${userId}`);
                    const userData = await fetchedUserData.json();
                    setUserData(userData);
                } else {
                    // If there is no active session, redirect to the home page
                    router.push('/');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        if (userId && status === 'authenticated') {
            fetchUserData();
        } else {
            // If there is no userId or the user is not authenticated, redirect to the home page
            router.push('/');
        }
    }, [userId, session, status, router]);

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

    if (!userData) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Typography variant="h4" sx={{ display: 'flex', marginLeft: '6rem' }}>
                Vítej na profilu uživatele {userData.name}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                {/* ... Zde můžete pokračovat v zobrazování informací o uživateli */}
                <Box
                    sx={{
                        display: 'flex',
                        marginLeft: '6rem',
                        height: '100%',
                        justifyContent: 'start',
                        alignItems: 'center',
                    }}
                >
                    {/* ... Zde můžete pokračovat ve zobrazení informací o uživateli */}
                </Box>
                <ModalProfile
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                    onSave={handleSaveText}
                />
            </Box>
        </>
    );
};

export default UserProfile;
