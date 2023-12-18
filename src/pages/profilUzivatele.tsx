// pages/userProfile/[userId].tsx
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import UserProfile from '@/components/UserProfile';

const UserProfilePage = () => {
    const router = useRouter();
    const { userId } = router.query;

    return (
        <Box>
            <h1>User Profile Page</h1>
            <UserProfile userId={userId as string} />
        </Box>
    );
};

export default UserProfilePage;
