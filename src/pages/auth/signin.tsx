import {Box, Button, Link, TextField, Typography} from "@mui/material";
import type {GetServerSidePropsContext, InferGetServerSidePropsType} from "next";
import {getCsrfToken} from "next-auth/react"
import {useRouter} from "next/router";

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    }
}

export default function SignIn({csrfToken}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter()
    return (
        <>
            <Typography variant="h4" align="center" sx={{marginTop: 10}}>
                Přihlášení
            </Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', marginTop: 2}}>
                <form method="post" action="/api/auth/callback/credentials">
                    {router.query.error && <span style={{color: "red"}}>{router.query.error}</span>}
                    <input name="csrfToken" type="hidden" defaultValue={csrfToken}/>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '400px',
                            height: '300px',
                            margin: 'auto',
                            padding: '20px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '10px',
                        }}
                    >
                        <TextField
                            label="Email"
                            variant="outlined"
                            name="email"
                            type="email"
                            margin="normal"
                            fullWidth
                            sx={{marginBottom: '16px', backgroundColor: 'white'}}
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            name="password"
                            type="password"
                            margin="normal"
                            fullWidth
                            sx={{marginBottom: '16px', backgroundColor: 'white'}}
                        />
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Button
                                variant="contained"
                                type="submit"
                                color="primary"
                                sx={{width: '70%', marginTop: '16px', backgroundColor: '#2196F3'}}
                            >
                                Přihlásit se
                            </Button>
                            <Typography sx={{marginTop: '16px', textAlign: 'center', color: '#555555'}}>
                                Nemáte vytvořený účet? <Link href="/auth/register" style={{color: '#2196F3'}}>Vytvořit
                                účet</Link>
                            </Typography>
                        </Box>
                    </Box>
                </form>
            </Box>
        </>
    )
}
