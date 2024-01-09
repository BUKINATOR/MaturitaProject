import React, {useEffect, useState} from "react";
import kategorieData from "@/json/kategorie.json";
import {Box, Button, Grid, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import lokaceData from "@/json/lokace.json";
import Ad from "@/types/Ad";

type RubrikaOptions = {
    [key: string]: string[];
};
interface Props {
    ad: Ad,
    change: (ad: Ad) => void,
    sumbit: () => void
}

export default function EditAd(props: Props) {
    const [rubrika, setRubrika] = useState(props.ad.section);
    const [kategorie, setKategorie] = useState<string>(props.ad.category);
    const [cena, setCena] = useState<number>(props.ad.salary);
    const [lokace, setLokace] = useState<string>(props.ad.location);
    const [text, setText] = useState<string>(props.ad.text);
    const [phoneNumber, setPhoneNumber] = useState<string>(props.ad.phoneNumber);

    useEffect(() => {
        props.ad.section = rubrika
        props.ad.category = kategorie
        props.ad.salary = cena
        props.ad.location = lokace
        props.ad.text = text
        props.ad.phoneNumber = phoneNumber

        if (props.change) props.change(props.ad)
    }, [rubrika, kategorie, cena, lokace, text, phoneNumber]);

    const rubrikaOptions: RubrikaOptions = kategorieData.kategorie;

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
                <form onSubmit={(e) => {
                    e.preventDefault()
                    props.sumbit && props.sumbit()
                }}>
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
                                <MenuItem value="domacnost">Domácnost</MenuItem>
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
                            Uložit
                        </Button>
                    </Box>
                </form>
            </Box>
            <Box component="div" sx={{position: 'absolute', left: 0, bottom: 0, zIndex: -1}}>
                <img src="/flowers.png" alt="logo"/>
            </Box>
            <Box component="div" sx={{position: 'absolute', zIndex: -1, right: 0, bottom: 0}}>
                <img src="/Women_cleaner.png" alt="logo"/>
            </Box>
        </>
    );
}