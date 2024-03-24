/*
import React, {FormEvent, useState} from 'react';
import {Button, Container, Grid, Link, TextField, Typography} from "@mui/material";
import {authUtils} from "@/firebase/authUtils";
import { useNavigate } from 'react-router-dom';


function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleForm = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const userCredential = await authUtils.signin(email, password, displayName);
            alert(`Vítej: ${displayName}`);
            navigate('/');
        } catch (error: any) {
            if (error.code === 'auth/email-already-in-use') {
                setError('Tato e-mailová adresa je již používána.');
            } else if (error.code === 'auth/invalid-email') {
                setError('Neplatný formát e-mailové adresy.');
            } else if (error.code === 'auth/weak-password') {
                setError('Heslo by mělo mít alespoň 6 znaků a obsahovat alespoň jedno velké písmeno.');
            } else {
                setError('Během registrace došlo k chybě.');
            }
            setEmail('');
            setPassword('');
        }
    }

    return (
        <Container maxWidth="xs">
            <form onSubmit={handleForm}>
                <Typography variant="h4" align="center">
                    Registrace
                </Typography>
                <TextField
                    margin="normal"
                    fullWidth
                    id="email"
                    label="E-mail"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    margin="normal"
                    fullWidth
                    id="name"
                    label="Jméno"
                    type="name"
                    required
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                />
                <TextField
                    margin="normal"
                    fullWidth
                    id="password"
                    label="Heslo"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <Typography variant="body1" color="error">{error}</Typography>}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Registrovat se
                </Button>
            </form>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    Již máte účet? <Link href="login">Přihlášení</Link>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Register;*/
