import {Box, Button, Link, TextField, Typography} from "@mui/material";
import type {GetServerSidePropsContext, InferGetServerSidePropsType} from "next";
import {getCsrfToken} from "next-auth/react"
import {useRouter} from "next/router";

export default function SignIn({csrfToken}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter()
    return (
        <form method="post" action="/api/auth/callback/credentials">
            {router.query.error && <span style={{color: "red"}}>{router.query.error}</span>}
            <input name="csrfToken" type="hidden" defaultValue={csrfToken}/>
            <label>
                Username
                <input name="email" type="email"/>
            </label>
            <label>
                Password
                <input name="password" type="password"/>
            </label>
            <button type="submit">Sign in</button>
        </form>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    }
}