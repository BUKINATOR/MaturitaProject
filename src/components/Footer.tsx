import React from 'react';
import Box from "@mui/material/Box";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Typography from "@mui/material/Typography";

function Footer() {
    return (
        <>
            <Box className="footer" sx={{
                display: 'flex', justifyContent: 'center', marginTop: '23.3rem', '@media (max-width: 1800px)': {
                    marginTop: 10
                },
            }}>
                <Box
                    sx={{
                        width: '100%',
                        height: '350px',
                        backgroundColor: '#F1F1F1',
                        bottom: 0
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        '@media (max-width: 490px)': {
                            flexDirection: 'column', alignItems: 'center'
                        },
                    }}>
                        <Box className="logo">
                            <img src="/biggerLogo.png" alt="logo" style={{margin: '1rem'}}/>
                        </Box>
                        <Box className="icons"
                             sx={{
                                 display: 'flex',
                                 flexDirection: 'row',
                                 color: '#51B371',
                                 marginRight: '10px',
                             }}>
                            <InstagramIcon style={{width: '35px', height: '35px', marginRight: '20px'}}/>
                            <YouTubeIcon style={{width: '35px', height: '35px', marginRight: '20px'}}/>
                            <TwitterIcon style={{width: '35px', height: '35px', marginRight: '20px'}}/>
                            <FacebookIcon style={{width: '35px', height: '35px', marginRight: '20px'}}/>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Typography sx={{fontSize: '1.2rem'}}>Centrum Podpory</Typography>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Typography sx={{fontSize: '1.2rem'}}>O nás</Typography>
                    </Box>
                </Box>
            </Box>


        </>
    );

}

export default Footer;