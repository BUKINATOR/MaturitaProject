// components/UserProfile.tsx
import React, { useEffect, useState } from 'react';
import { Box, Divider, Link, Rating, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import ModalProfile from './ModalProfile';
import { authUtils } from '../firebase/authUtils';
import { User } from 'firebase/auth';

interface UserProfileProps {
    userId: string; // You may need to adjust the prop types based on your requirements
}

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const currentUser: User | null = await authUtils.getCurrentUser();
            setUser(currentUser);
            console.log(currentUser);
        };

        fetchUserData();
    }, [userId]);

    const handleAddIconClick = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleSaveText = async (text: string) => {
        // Handle save text logic if needed
    };

    if (!user) {
        // Handle loading state or user not found
        return <div>Loading...</div>;
    }

    return (
        <>
            <Typography variant="h4" sx={{ display: 'flex', marginLeft: '6rem' }}>
                Vítej na svém účtu {user && user.displayName}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        marginLeft: '6rem',
                        height: '100%',
                        justifyContent: 'start',
                        alignItems: 'center',
                    }}
                >
                    {/* ... (rest of the profile UI code) */}
                    {/* Note: You can pass props like userId to other components if needed */}
                    <ModalProfile isOpen={isModalOpen} onClose={handleModalClose} onSave={handleSaveText} />
                </Box>
            </Box>
        </>
    );
};

export default UserProfile;
