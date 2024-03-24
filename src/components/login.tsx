/*
import React, {FormEvent, useState} from 'react';
import {Button, Container, Grid, Link, TextField, Typography} from "@mui/material";
import {authUtils} from '../firebase-config/authUtils';
import {useNavigate} from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleForm = async (event: FormEvent) => {
        event.preventDefault();
        try {
            await authUtils.login(email, password);
            const user = authUtils.getCurrentUser(); // Assuming you have a function to get the current user
            if (user) {
                setDisplayName(user.displayName || ''); // Set display name or an empty string if not available
                alert(`Vítej: ${user.displayName || ''}`);
            }
            navigate('/vytvoreniInzeratu');
        } catch (error) {
            setError("Nesprávné heslo nebo email");
            setEmail('');
            setPassword('');
        }
    }

    return (
        <Container maxWidth="xs">
            <form onSubmit={handleForm}>
                <Typography variant="h4" align="center">
                    Přihlášení
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
                    Přihlásit se
                </Button>
            </form>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    Ještě nemáte účet? <Link href="register">Registrace</Link>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login;*/
