import {useState} from 'react';
import {signIn} from 'next-auth/react';
import {getCsrfToken} from 'next-auth/react';
import {useRouter} from 'next/router';
import {GetServerSidePropsContext, InferGetServerSidePropsType} from "next";

export default function Register({csrfToken, currentUser}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // Nové pole pro jméno uživatele

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const result = await signIn('credentials', {
                redirect: false,
                email,
                password,
                name,
            });

            if (result?.error) {
                console.error(result.error);
            } else {
                router.push('/dashboard');
            }
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <form method="post" onSubmit={handleSubmit}>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken}/>
            <label>
                Email
                <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
                Password
                <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            {/* Pole pro jméno uživatele */}
            <label>
                Name
                <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <button type="submit">Register</button>
        </form>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const currentUser = {name: ''};

    return {
        props: {
            csrfToken: await getCsrfToken(context),
            currentUser,
        },
    };
}
