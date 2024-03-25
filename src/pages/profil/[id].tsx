// pages/profil/[id].tsx
import React from 'react';
import UserProfile from '../../components/UserProfile';
import {getUserByID} from "@/firebase/controller";
import {User} from "@/types/User";
import {GetServerSidePropsContext} from 'next';

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const {id} = context.query;

    if (typeof id !== 'string') {
        return {
            notFound: true,
        };
    }

    let user = await getUserByID(id)
    return {props: {user: user}};
}

interface Props {
    user: User
}

const ProfileDetailPage = (props: Props) => {
    return (
        <div>
            {props.user && <UserProfile user={props.user}/>}
        </div>
    );
};

export default ProfileDetailPage;
