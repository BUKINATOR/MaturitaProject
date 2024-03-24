import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {Link} from '@mui/material';
import {User} from 'firebase/auth';
import {signOut, useSession} from "next-auth/react";
import Typography from "@mui/material/Typography";

function Header() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const {data: session, status} = useSession()
    let [user, setUser] = useState<{ name?: string | null; email?: string | null; image?: string | null; } | undefined>(undefined)
    useEffect(() => {
        if (status === "authenticated")
            setUser(session.user);
    }, [status])

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={{backgroundColor: 'white'}}>
                <Toolbar>
                    <Box component="div" sx={{flexGrow: 1}}>
                        <Link href='/'>
                            <img src="/logo.png" alt="logo" style={{maxWidth: '100%', height: 'auto'}}/>
                        </Link>
                    </Box>
                    {user ? (
                        <div>
                            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                                <Link href="myads" underline="hover"
                                      sx={{display: 'flex', color: 'black', justifyContent: 'end', padding: 2}}>
                                    {'Moje Inzeráty'}
                                </Link>

                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle sx={{width: 30, height: 30, color: '#51B371'}}>
                                    </AccountCircle>
                                </IconButton>
                                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem>
                                            <Link sx={{color: 'black'}} underline="hover" href="/profile">Profil</Link>
                                        </MenuItem>
                                        <MenuItem>
                                            <Link sx={{color: 'black'}} underline="hover" href="/ad/create">Vytvořit
                                                inzerát</Link>
                                        </MenuItem>
                                        <MenuItem>
                                            <Link sx={{color: 'black'}} underline="hover" href="/ads">Inzeráty</Link>
                                        </MenuItem>
                                        <MenuItem onClick={() => signOut()}>
                                            Odhlásit se
                                        </MenuItem>
                                    </Menu>
                                </Box>
                            </Box>
                        </div>
                    ) : (
                        <Box sx={{display: 'flex', flexDirection: 'row'}}>
                            <Link href="/auth/signin" underline="hover"
                                  sx={{display: 'flex', color: 'black', justifyContent: 'end', padding: 2}}>
                                {'Přihlásit se'}
                            </Link>
                            <Link href="/auth/register" underline="hover"
                                  sx={{display: 'flex', color: 'black', justifyContent: 'end', padding: 2}}>
                                {'Registrovat se'}
                            </Link>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
