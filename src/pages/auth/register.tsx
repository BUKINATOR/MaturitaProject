import {useState} from 'react';
import {signIn} from 'next-auth/react';
import {getCsrfToken} from 'next-auth/react';
import {useRouter} from 'next/router';
import {GetServerSidePropsContext, InferGetServerSidePropsType} from "next";
import {func} from "prop-types";

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    };
}

export default function Register({csrfToken, currentUser}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // Nové pole pro jméno uživatele
    const [error, setError] = useState(null);

    async function submit(e) {
        e.preventDefault();

        let response = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({
                "email": email,
                "password": password,
                "name": name,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        let data = await response.json();

        if (data.error) {
            setError(data.error);
            return;
        }

        location.replace("/auth/signin")
    }

    return (
        <>
            <h1>Register</h1>
            <form method="post" onSubmit={submit}>
                <input name="csrfToken" type="hidden" defaultValue={csrfToken}/>
                <label>
                    Name
                    <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>
                    Email
                    <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    Password
                    <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button type="submit">Register</button>
            </form>
            {error ? <span style={{color: "red"}}>{error}</span> : null}
        </>
    )
}
