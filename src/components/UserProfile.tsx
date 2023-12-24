// pages/profilUzivatele/[id].tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter
import UserProfile from '../components/UserProfile';
import { User } from 'firebase/auth';
import { authUtils } from '../firebase/authUtils';

const UserProfilePage = () => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter(); // Use useRouter to access the router object
    const { id } = router.query;

    useEffect(() => {
        const fetchUserData = async () => {
            const currentUser: User | null = await authUtils.getCurrentUser();
            setUser(currentUser);
        };

        fetchUserData();
    }, [id]);

    if (!user) {
        // Handle loading state or user not found
        return <div>Loading...</div>;
    }

    return (
        <>
            <UserProfile userId={id} />
        </>
    );
};

export default UserProfilePage;
