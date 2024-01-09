import React, {useState} from 'react';
import {
    FormControl,
    Select,
    MenuItem,
    Box,
    SelectChangeEvent,
    InputLabel, TextField,
} from '@mui/material';
import lokaceData from '../json/lokace.json'; // Nový import lokací
import kategorieData from '../json/kategorie.json'; // Nový import kategorií

interface AdsFilterProps {
    filter: { categories: string; location: string; priceFrom: string; priceTo: string };
    setFilter: (value: any) => void;
}

function AdsFilter({filter, setFilter}: AdsFilterProps) {
    const handleCategoriesChange = (event: SelectChangeEvent) => {
        const selectedCategory = event.target.value;
        const newFilterValue = selectedCategory === "Všechny kategorie" ? "" : selectedCategory;
        setFilter({...filter, categories: newFilterValue});
    };
    const handleLocationChange = (event: SelectChangeEvent) => {
        const selectedLocation = event.target.value;
        const newFilterValue = selectedLocation === "Všechny lokace" ? "" : selectedLocation;
        setFilter({...filter, location: newFilterValue});
    };

    const handlePriceFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const numericValue = event.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
        setFilter({...filter, priceFrom: numericValue});
    };

    const handlePriceToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const numericValue = event.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
        setFilter({...filter, priceTo: numericValue});
    };


    const kategorieOptions = [
        ...kategorieData.kategorie.vsechnykategorie,
        ...kategorieData.kategorie.zahrada,
        ...kategorieData.kategorie.domacnost
    ].map((category) => (
        <MenuItem key={category} value={category}>
            {category}
        </MenuItem>
    ));

    const lokaceOptions = lokaceData.lokace.map((location) => (
        <MenuItem key={location} value={location}>
            {location}
        </MenuItem>
    ));

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '2rem',
                    marginBottom: '2rem',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                        marginLeft: '5rem',
                        marginRight: '5rem',
                        alignItems: 'center',
                        backgroundColor: '#F8F8F8',
                        border: 1,
                        borderRadius: 12,
                        borderColor: '#51B371',
                        '@media (max-width: 690px)': {
                            flexDirection: 'column'
                        },
                    }}
                >
                    <FormControl fullWidth sx={{margin: '0.5rem'}}>
                        <InputLabel id="kategorie-label">Kategorie</InputLabel>
                        <Select
                            labelId="kategorie-label"
                            id="kategorie-select"
                            label="Kategorie"
                            value={filter.categories}
                            onChange={handleCategoriesChange}
                            displayEmpty
                            className="categories-select"
                            sx={{
                                '.MuiOutlinedInput-notchedOutline': {
                                    border: 0,
                                    borderRadius: 8,
                                    backgroundColor: 'none'
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#51B371',
                                },
                            }}
                        >
                            {kategorieOptions}
                        </Select>
                    </FormControl>


                    <FormControl fullWidth sx={{margin: '0.5rem'}}>
                        <InputLabel id="lokace-label">Lokace</InputLabel>
                        <Select
                            labelId="lokace-label"
                            id="lokace-select"
                            label="Lokace"
                            value={filter.location}
                            onChange={handleLocationChange}
                            displayEmpty
                            className="location-select"
                            sx={{
                                '.MuiOutlinedInput-notchedOutline': {
                                    border: 0,
                                    borderRadius: 8,
                                    backgroundColor: 'none'
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#51B371',
                                },
                            }}
                        >
                            {lokaceOptions}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{margin: '0.5rem'}}>
                        <TextField
                            id="price-from-select"
                            label="Cena od"
                            value={filter.priceFrom}
                            onChange={handlePriceFromChange}
                            className="price-select"
                            InputProps={{
                                sx: {
                                    '.MuiOutlinedInput-notchedOutline': {
                                        border: 0,
                                        borderRadius: 8,
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparentní bílé pozadí
                                    },
                                    '& input': {
                                        color: 'black',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#51B371',
                                    },
                                },
                            }}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{margin: '0.5rem'}}>
                        <TextField
                            id="price-to-select"
                            label="Cena do"
                            value={filter.priceTo}
                            onChange={handlePriceToChange}
                            className="price-select"
                            InputProps={{
                                sx: {
                                    '.MuiOutlinedInput-notchedOutline': {
                                        border: 0,
                                        borderRadius: 8,
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparentní bílé pozadí
                                    },
                                    '& input': {
                                        color: 'black',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#51B371',
                                    },
                                },
                            }}
                        />
                    </FormControl>

                </Box>
            </Box>
        </div>
    );
}

export default AdsFilter;
