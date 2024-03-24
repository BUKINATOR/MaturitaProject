import React, {useEffect, useState} from "react";
import {Box, Divider, Link, Rating, Typography} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import ModalProfile from "@/components/ModalProfile";
import {getAdByID, getUserByID} from "@/firebase/controller";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {GetServerSidePropsContext} from 'next';
import {User} from "firebase/auth";


export async function getServerSideProps(context: GetServerSidePropsContext) {
    let session = await getServerSession(context.req, context.res, {
        ...authOptions,
        session: undefined
    });
    let user = await getUserByID(session.user.id);
    return {props: {user}}
}

const Inzeraty = ({user}: {
    user: User
}) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [enteredText, setEnteredText] = useState('');

    const handleAddIconClick = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleSaveText = async (text: string) => {
        setEnteredText(text);
        setModalOpen(false);
    };

    return (
        <>
            <Typography variant="h2" sx={{display: 'flex', marginLeft: '6rem', fontFamily: 'Bebas Neue'}}>
                Vítej na svém účtu {user && user.displayName}
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        marginLeft: '6rem',
                        height: '100%',
                        justifyContent: 'start',
                        alignItems: 'center',
                    }}
                >
                    <Box className='whiteBox'
                         sx={{
                             width: '400px',
                             height: '600px',
                             backgroundColor: '#fff',
                             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                             marginRight: '1rem',
                         }}
                    >
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'start',
                            alignItems: 'center',
                            marginTop: '2rem',
                            marginLeft: '2rem'
                        }}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                marginRight: '1rem',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                borderRadius: '50%',
                                width: 76,
                                height: 76
                            }}>
                                <PersonIcon sx={{width: 50, height: 50, color: 'grey'}}/>
                            </Box>

                            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                <Typography variant="subtitle1"
                                            sx={{mt: 1, fontWeight: 'bold'}}>{user && user.displayName}</Typography>
                                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly/>
                            </Box>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            width: '80%',
                            margin: '0 auto'
                        }}>
                            <Divider sx={{
                                margin: '0 auto',
                                marginBottom: '0.5rem',
                                marginTop: '2rem',
                                backgroundColor: '#F8F8F8',
                                width: '100%'
                            }}/>
                            <Typography sx={{}} variant="subtitle1">{user && user.email}</Typography>
                            <Link sx={{color: 'green'}}>Změna e-mailu</Link>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            width: '80%',
                            margin: '0 auto'
                        }}>
                            <Divider sx={{
                                margin: '0 auto',
                                marginBottom: '0.5rem',
                                marginTop: '2rem',
                                backgroundColor: '#F8F8F8',
                                width: '100%'
                            }}/>
                            <Typography sx={{}} variant="subtitle1">Změnit heslo</Typography>
                            <Link sx={{color: 'green'}}>Změna hesla</Link>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            width: '80%',
                            margin: '0 auto'
                        }}>
                            <Divider sx={{
                                margin: '0 auto',
                                marginBottom: '0.5rem',
                                marginTop: '2rem',
                                backgroundColor: '#F8F8F8',
                                width: '100%'
                            }}/>
                            <Typography sx={{}} variant="subtitle1">Centrum podpory</Typography>
                            <Link sx={{color: 'green'}}>Podpora</Link>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft: '88px'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                            }}
                        >
                            <Box className="Omne"
                                 sx={{
                                     width: '361px',
                                     height: '230px',
                                     backgroundColor: '#F8F8F8',
                                     marginRight: '1rem',
                                     position: 'relative'
                                 }}
                            >
                                <Box sx={{display: 'flex', width: '100%', marginLeft: '1rem', marginTop: '0.5rem'}}>
                                    <Typography variant="h6" sx={{color: '#707070'}}>O mně</Typography>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    position: 'absolute',
                                    bottom: '0',
                                    right: '0',
                                    margin: '1rem',
                                }}>
                                    <Box
                                        onClick={handleAddIconClick}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: 'white',
                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                            borderRadius: '50%',
                                            width: 35,
                                            height: 35,
                                        }}
                                    >
                                        <AddIcon
                                            sx={{
                                                color: 'grey',
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}
                                        />
                                    </Box>
                                </Box>
                                {/* Display the entered text */}
                                {enteredText && (
                                    <Typography variant="body1" sx={{marginLeft: '1rem', marginTop: '1rem'}}>
                                        Zadaný text (Omne): {enteredText}
                                    </Typography>
                                )}
                            </Box>

                            <Box className="dovednosti"
                                 sx={{
                                     width: '361px',
                                     height: '230px',
                                     backgroundColor: '#F8F8F8',
                                     marginRight: '1rem',
                                     position: 'relative'
                                 }}
                            >
                                <Box sx={{display: 'flex', width: '100%', marginLeft: '1rem', marginTop: '0.5rem'}}>
                                    <Typography variant="h6" sx={{color: '#707070'}}>Dovednosti</Typography>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    position: 'absolute',
                                    bottom: '0',
                                    right: '0',
                                    margin: '1rem',
                                }}>
                                    <Box
                                        onClick={handleAddIconClick}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: 'white',
                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                            borderRadius: '50%',
                                            width: 35,
                                            height: 35,
                                        }}
                                    >
                                        <AddIcon
                                            sx={{
                                                color: 'grey',
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}
                                        />
                                    </Box>
                                </Box>
                                {/* Display the entered text */}
                                {enteredText && (
                                    <Typography variant="body1" sx={{marginLeft: '1rem', marginTop: '1rem'}}>
                                        Zadaný text (Dovednosti): {enteredText}
                                    </Typography>
                                )}
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: '1rem',
                            }}
                        >
                            <Box className="Recenze"
                                 sx={{
                                     width: '100%',
                                     height: '360px',
                                     backgroundColor: '#F8F8F8',
                                     marginRight: '1rem',
                                 }}
                            >
                                <Box sx={{display: 'flex', width: '100%', marginLeft: '1rem', marginTop: '0.5rem'}}>
                                    <Typography variant="h6" sx={{color: '#707070'}}>Recenze</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box component="div" sx={{position: 'absolute', zIndex: -1, right: 0, bottom: 0}}>
                        <img src="profile.png" alt="logo"/>
                    </Box>
                </Box>

                <ModalProfile
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                    onSave={handleSaveText}
                />
            </Box>
        </>
    );
}

export default Inzeraty;