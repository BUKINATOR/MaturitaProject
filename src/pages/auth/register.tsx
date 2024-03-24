import React, {useState} from 'react';
import {signIn} from 'next-auth/react';
import {getCsrfToken} from 'next-auth/react';
import {useRouter} from 'next/router';
import {GetServerSidePropsContext, InferGetServerSidePropsType} from "next";
import {func} from "prop-types";
import {Box, Button, Grid, Link, TextField, Typography} from "@mui/material";

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    };
}

export default function Register({csrfToken}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // Nové pole pro jméno uživatele
    const [error, setError] = useState(null);

    async function submit(e: React.FormEvent) {
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
            <Typography variant="h4" align="center" sx={{marginTop: 10, marginBottom: 2}}>
                Registrace
            </Typography>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <form method="post" onSubmit={submit}>
                        <input name="csrfToken" type="hidden" defaultValue={csrfToken}/>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                margin: {xs: '10px', sm: 'auto'},
                                padding: {xs: '10px', sm: '20px'},
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                borderRadius: '10px',
                            }}
                        >
                            <TextField
                                label="Name"
                                variant="outlined"
                                name="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                margin="normal"
                                fullWidth
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                margin="normal"
                                fullWidth
                            />
                            <TextField
                                label="Password"
                                variant="outlined"
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                margin="normal"
                                fullWidth
                                sx={{marginBottom: '16px', backgroundColor: 'white'}}
                            />
                            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    sx={{
                                        width: '70%', marginTop: '16px', backgroundColor: '#51B371',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: '#3F8C5D',
                                        },
                                    }}
                                >
                                    Registrovat se
                                </Button>
                                <Typography sx={{marginTop: '16px', textAlign: 'center', color: '#555555'}}>
                                    Již máte účet? <Link href="/auth/signin" style={{color: '#51B371'}}>Přihlásit
                                    se</Link>
                                </Typography>
                            </Box>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </>
    )
}
