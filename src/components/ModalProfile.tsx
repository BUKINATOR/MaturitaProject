// ModalProfile.jsx

import React, {useState} from 'react';
import {Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField} from '@mui/material';

interface ModalProfileProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (text: string) => void;
}

const ModalProfile: React.FC<ModalProfileProps> = ({isOpen, onClose, onSave}) => {
    const [textInput, setTextInput] = useState('');

    const handleSaveText = () => {
        onSave(textInput);
        onClose();
    };

    return (
        <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
            <DialogTitle>Zadejte text</DialogTitle>
            <DialogContent>
                <TextField
                    label="Text"
                    variant="outlined"
                    fullWidth
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                />
            </DialogContent>
            <DialogActions sx={{justifyContent: 'space-between', padding: '16px'}}>
                <Button onClick={onClose} color="secondary" sx={{color: 'white', backgroundColor: '#f44336'}}>
                    Zrušit
                </Button>
                <Button onClick={handleSaveText} color="primary" sx={{color: 'white', backgroundColor: '#4caf50'}}>
                    Uložit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ModalProfile;
