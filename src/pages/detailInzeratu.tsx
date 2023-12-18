// pages/DetailInzeratu.tsx
import { useRouter } from 'next/router';
import React from 'react';

const DetailInzeratu: React.FC = () => {
    const router = useRouter();
    const adId = router.query.id;

    console.log('ID from router:', adId);

    return (
        <div>
            <h1>Detail of Inzeratu {adId}</h1>
        </div>
    );
};

export default DetailInzeratu;
