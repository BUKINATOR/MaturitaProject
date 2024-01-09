import Box from "@mui/material/Box";
import * as React from "react";
import {Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import {FC} from "react";

type Props = {
    content?: string
}


export const Mainbutton2: FC<Props> = (props) => {
    const {content} = props;
    return (
        <>
            <Box sx={{
                width: 400,
                height: 60,
                marginTop: '1rem',
                boxShadow: 5,
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: 'white',

            }}>
                <Typography sx={{marginLeft: 2, color: '#A2A2A2'}}>{content}</Typography>
                <Button variant="contained" sx={{
                    boxShadow: 0,
                    marginRight: 2,
                    borderRadius: 3,
                    height: 40,
                    display: 'flex',
                    backgroundColor: '#51B371',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#3F8C5D',
                    },
                }}>Pokračovat
                </Button>
            </Box>

        </>
    );

}
