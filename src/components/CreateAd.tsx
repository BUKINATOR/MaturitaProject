import React, {useEffect, useState} from "react";
import {addAd} from "../firebase/controller";
import {useRouter} from 'next/router';
import {authUtils} from "../firebase/authUtils";
import {Box, Button, Grid, MenuItem, Select, SelectChangeEvent, TextField, Typography} from "@mui/material";
import rubrikyData from "../json/rubriky.json";
import kategorieData from "../json/kategorie.json";
import lokaceData from "../json/lokace.json";
import {useSession} from "next-auth/react";

type RubrikaOptions = {
    [key: string]: string[];
};

export default function CreateAd() {
    const [rubrika, setRubrika] = useState("");
    const [kategorie, setKategorie] = useState<string>("");
    const [cena, setCena] = useState<number>();
    const [lokace, setLokace] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const router = useRouter();

    const rubrikaOptions: RubrikaOptions = kategorieData.kategorie;

    const {data: session, status} = useSession();

    const addNewAd = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(session.user)

        const adData = {
            kategorie,
            displayName: session.user.name,
            rubrika,
            cena: Number(cena),
            lokace,
            text,
            userId: session.user.id, // Ensure user is defined before accessing uid
            phoneNumber,
        };

        await addAd(adData);
        router.push("/inzeraty");
        console.log("Úspěšně přidán váš nový inzerát");

        const errors: string[] = [];

        if (!rubrika) {
            errors.push("Vyberte rubriku.");
        }

        if (kategorie.length === 0) {
            errors.push("Vyberte kategorii.");
        }

        if (!cena) {
            errors.push("Zadejte cenu.");
        }

        if (!lokace) {
            errors.push("Zadejte lokalitu.");
        }

        if (!text) {
            errors.push("Zadejte text inzerátu.");
        }

        if (errors.length > 0) {
            console.log("Inzerát vytvořen neúspěšně.");
            errors.forEach((error) => {
                console.log(error);
            });
            return;
        }
    };

    const handleRubrikaChange = (e: SelectChangeEvent<unknown>) => {
        const selectedRubrika = e.target.value as string;
        setRubrika(selectedRubrika);
        setKategorie(rubrikaOptions[selectedRubrika][0] || "");
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80vh',
                    maxWidth: '726px',
                    width: '100%',
                    margin: '0 auto',
                    '@media (max-width: 1200px)': {
                        height: '50vh'
                    },
                }}>
                <form onSubmit={(e) => addNewAd(e)}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Select
                                name="rubrika"
                                required
                                value={rubrika}
                                onChange={(e) => handleRubrikaChange(e)}
                                fullWidth
                                sx={{
                                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.25)',
                                    '.MuiOutlinedInput-notchedOutline': {border: 0},
                                    borderRadius: '0', // Set border-radius to 0 for sharp edges
                                }}
                            >
                                <MenuItem value="">
                                    <em>Vyberte rubriku</em>
                                </MenuItem>
                                <MenuItem value="zahrada">Zahrada</MenuItem>
                                <MenuItem value="dum">Domácnost</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={6}>
                            <Select
                                name="kategorie"
                                required
                                value={kategorie}
                                onChange={(e) => setKategorie(e.target.value as string)}
                                fullWidth
                                sx={{
                                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.25)',
                                    '.MuiOutlinedInput-notchedOutline': {border: 0},
                                    borderRadius: '0', // Set border-radius to 0 for sharp edges
                                }}
                            >
                                <MenuItem value="">
                                    <em>Vyberte kategorii</em>
                                </MenuItem>
                                {rubrikaOptions[rubrika]?.map((kat) => (
                                    <MenuItem key={kat} value={kat}>
                                        {kat}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                type="number"
                                label="Cena"
                                value={cena}
                                onChange={(e) => setCena(Number(e.target.value))}
                                fullWidth
                                InputProps={{
                                    sx: {
                                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.25)',
                                        '.MuiOutlinedInput-notchedOutline': {border: 0},
                                        borderRadius: '0', // Set border-radius to 0 for sharp edges
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Select
                                name="lokace"
                                required
                                value={lokace}
                                onChange={(e) => setLokace(e.target.value as string)}
                                fullWidth
                                sx={{
                                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.25)',
                                    '.MuiOutlinedInput-notchedOutline': {border: 0},
                                    borderRadius: '0', // Set border-radius to 0 for sharp edges
                                }}
                            >
                                <MenuItem value="">
                                    <em>Vyberte lokalitu</em>
                                </MenuItem>
                                {lokaceData.lokace.map((lokaceItem) => (
                                    <MenuItem key={lokaceItem} value={lokaceItem}>
                                        {lokaceItem}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Telefonní číslo"
                                value={phoneNumber}
                                onChange={(e) => {
                                    const formattedValue = e.target.value.replace(/[^0-9+]/g, '');
                                    setPhoneNumber(formattedValue);
                                }}
                                fullWidth

                                inputProps={{
                                    inputMode: 'tel',
                                    pattern: '[+0-9]*',
                                }}
                                InputProps={{
                                    sx: {
                                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.25)',
                                        '.MuiOutlinedInput-notchedOutline': {border: 0},
                                        borderRadius: '0', // Set border-radius to 0 for sharp edges
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{paddingBottom: '1rem', marginTop: '2rem'}}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Text"
                                multiline
                                name="text"
                                rows={4}
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                fullWidth
                                InputProps={{
                                    sx: {
                                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.25)',
                                        '.MuiOutlinedInput-notchedOutline': {border: 0},
                                        borderRadius: '0', // Set border-radius to 0 for sharp edges
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{display: 'flex', width: '100%', justifyContent: 'end'}}>
                        <Button type="submit" variant="contained" color="primary"
                                sx={{display: 'flex', backgroundColor: '#51B371'}}>
                            Vytvořit
                        </Button>
                    </Box>
                </form>
            </Box>
            <Box component="div" sx={{position: 'absolute', left: 0, bottom: 0, zIndex: -1}}>
                <img src="flowers.png" alt="logo"/>
            </Box>
            <Box component="div" sx={{position: 'absolute', zIndex: -1, right: 0, bottom: 0}}>
                <img src="Women_cleaner.png" alt="logo"/>
            </Box>
        </>
    );
};
