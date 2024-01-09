// pages/profil/[id].tsx
import React from 'react';
import { useRouter } from 'next/router';
import UserProfile from '../../components/UserProfile';

const ProfileDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>User Profile</h1>
            {id && <UserProfile userId={id} />}
        </div>
    );
};

export default ProfileDetailPage;
