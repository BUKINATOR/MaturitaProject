import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {NextPage} from "next";
import {Grid, Link} from "@mui/material";
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import {Stack} from "@mui/system";
import {Iconcomponent} from "./IconComponents";
import {Mainbutton} from "./MainButton";
import {Mainbutton2} from "@/components/MainButton2";
import Footer from "@/components/Footer";


function MainPage() {
    return (
        <>
            <Typography
                variant="h1"
                sx={{
                    textAlign: 'center',
                    fontFamily: 'Bebas Neue',
                    fontWeight: 400,
                    paddingTop: 10,
                    fontSize: {
                        xs: '1.5rem',  // Adjust the font size for extra small screens
                        sm: '3rem',  // Adjust the font size for small screens
                        md: '4rem',  // Adjust the font size for medium screens
                        lg: '5rem',  // Adjust the font size for large screens
                    },
                }}
            >
                "NAJDI SI BRIGÁDNÍKA SVÝCH SNŮ"
            </Typography>

            <Box sx={{display: 'flex', justifyContent: 'center', paddingTop: 10}}>
                <Link href="vytvoreniInzeratu" underline="none"><Mainbutton content="Napiš svůj inzerát"/></Link>
                <Link href="inzeraty" underline="none"><Mainbutton content="Najdi Brigádníka"/></Link>
            </Box>

            <Box component="div" sx={{
                position: 'absolute', zIndex: -1, right: 0, marginTop: -40, '@media (max-width: 1200px)': {
                    display: 'none',
                },
            }}>
                <img src="Women.png" alt="logo"/>
            </Box>
            <Box component="div" sx={{position: 'absolute', zIndex: -1, left: 0, marginTop: -15, marginLeft: -35}}>
                <img src="Dog1.png" alt="logo"/>
            </Box>
            <Typography
                variant="h1"
                sx={{
                    textAlign: 'center',
                    fontFamily: 'Bebas Neue',
                    fontWeight: 400,
                    paddingTop: 55,
                    fontSize: {
                        xs: '2rem',  // Adjust the font size for extra small screens
                        sm: '2rem',  // Adjust the font size for small screens
                        md: '3rem',  // Adjust the font size for medium screens
                        lg: '4rem',  // Adjust the font size for large screens
                    },
                }}
            >
                JEDNODUCHÝ POSTUP
            </Typography>
            <Stack direction="row" spacing={5} sx={{alignItems: 'center', justifyContent: 'center', paddingTop: 10}}>
                <Iconcomponent
                    icon={<NotesOutlinedIcon sx={{color: '#51B371', fontSize: ['10vw', '8vw', '6vw']}}/>}
                    index={1}
                    children={'Vytvoř si inzerát'}
                ></Iconcomponent>
                <HorizontalRuleOutlinedIcon sx={{color: 'grey', fontSize: ['8vw', '6vw', '4vw']}}/>
                <Iconcomponent
                    icon={<TravelExploreOutlinedIcon sx={{color: '#51B371', fontSize: ['10vw', '8vw', '6vw']}}/>}
                    index={2}
                    children={'Vyber si služby'}
                ></Iconcomponent>
                <HorizontalRuleOutlinedIcon sx={{color: 'grey', fontSize: ['8vw', '6vw', '4vw']}}/>
                <Iconcomponent
                    icon={<SavingsOutlinedIcon sx={{color: '#51B371', fontSize: ['10vw', '8vw', '6vw']}}/>}
                    index={3}
                    children={'Začni vydělávat'}
                ></Iconcomponent>
            </Stack>
            <Stack direction="row" spacing={5} sx={{alignItems: 'center', justifyContent: 'center', paddingTop: 10}}>
                <Iconcomponent
                    icon={<PeopleAltOutlinedIcon sx={{color: '#51B371', fontSize: ['10vw', '8vw', '6vw']}}/>}
                    index={1}
                    children={'Najdi si brigádníka'}
                ></Iconcomponent>
                <HorizontalRuleOutlinedIcon sx={{color: 'grey', fontSize: ['8vw', '6vw', '4vw']}}/>
                <Iconcomponent
                    icon={<TextsmsOutlinedIcon sx={{color: '#51B371', fontSize: ['10vw', '8vw', '6vw']}}/>}
                    index={2}
                    children={'Domluv se s ním'}
                ></Iconcomponent>
                <HorizontalRuleOutlinedIcon sx={{color: 'grey', fontSize: ['8vw', '6vw', '4vw']}}/>
                <Iconcomponent
                    icon={<DoneOutlineOutlinedIcon sx={{color: '#51B371', fontSize: ['10vw', '8vw', '6vw']}}/>}
                    index={3}
                    children={'Získej brigádníka'}
                ></Iconcomponent>
            </Stack>
            <Box className="greenline-textblock1"
                 sx={{display: 'flex', justifyContent: 'start', marginTop: '200px', marginLeft: '200px'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontFamily: 'Bebas Neue',
                            fontWeight: 400,
                            fontSize: {
                                xs: '2rem',
                                sm: '2rem',
                                md: '3rem',
                                lg: '5rem',
                            },
                        }}
                    >
                        Brigádníci po celé ČR
                    </Typography>
                    <Typography sx={{color: '#A2A2A2', fontFamily: 'Segoe UI', fontWeight: 500, fontSize: '1.1rem'}}>
                        Více než 10 000 brigádníků po celé ČR,<br/>vyber
                        si svého brigádníka.
                    </Typography>
                    <Link href="vytvoreniInzeratu" underline="none"><Mainbutton2
                        content="Najdi svého brigádníka"/></Link>

                </Box>
            </Box>

            <Box sx={{
                position: 'relative', overflow: 'hidden', zIndex: -1, marginTop: '-680px', '@media (max-width: 1920px)': {
                    marginTop: '-580px'
                },
            }}>
                <img
                    src="greenline.png"
                    alt="Green Line and Panacek"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </Box>
            <Box className="greenline-textblock2"
                 sx={{
                     display: 'flex', justifyContent: 'end', marginTop: '-70rem', marginRight: '130px', '@media (max-width: 1920px)': {
                         marginTop: '-50rem'
                     },
                 }}>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontFamily: 'Bebas Neue',
                            fontWeight: 400,
                            fontSize: {
                                xs: '2rem',
                                sm: '2rem',
                                md: '3rem',
                                lg: '5rem',
                            },
                        }}
                    >
                        Staň se brigádníkem<br/>
                        a začni vydělávat
                    </Typography>
                    <Typography sx={{color: '#A2A2A2', fontFamily: 'Segoe UI', fontWeight: 500, fontSize: '1.1rem'}}>
                        Založ si inzerát na brigádu a začni<br/>
                        vydělávat.
                    </Typography>
                    <Link href="vytvoreniInzeratu" underline="none"><Mainbutton2
                        content="Vytvoř si svůj první inzerát"/></Link>
                    <Box component="div" sx={{position: 'absolute', zIndex: -1, right: 0, marginTop: 8}}>
                        <img src="konev.png" alt="logo"/>
                    </Box>
                </Box>
            </Box>
            <Footer/>


        </>
    );

}

export default MainPage;