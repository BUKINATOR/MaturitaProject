import {Box, Button, Grid, Link, TextField, Typography} from "@mui/material";
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
            <Typography variant="h4" align="center" sx={{marginTop: 10, marginBottom:2}}>
                Prihlášení
            </Typography>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <form method="post" action="/api/auth/callback/credentials">
                        {router.query.error && <span style={{color: "red"}}>{router.query.error}</span>}
                        <input name="csrfToken" type="hidden" defaultValue={csrfToken}/>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                margin: { xs: '10px', sm: 'auto' },
                                padding: { xs: '10px', sm: '20px' },
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
                            />
                            <TextField
                                label="Heslo"
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
                                    sx={{
                                        width: '70%', marginTop: '16px', backgroundColor: '#51B371',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: '#3F8C5D',
                                        },
                                    }}
                                >
                                    Přihlásit se
                                </Button>
                                <Typography sx={{marginTop: '16px', textAlign: 'center', color: '#555555'}}>
                                    Nemáte vytvořený účet? <Link href="/auth/register" style={{color: '#51B371'}}>Vytvořit
                                    účet</Link>
                                </Typography>
                            </Box>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </>
    )
}
