import Typography from "@mui/material/Typography";
import {FC, PropsWithChildren} from "react";
import Box from "@mui/material/Box";
import * as React from "react";

type Props = {
    icon: React.ReactNode
    index: Number
}


export const Iconcomponent: FC<PropsWithChildren<Props>> = ({icon, children, index}) => {
    return (
        <>
            <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <Typography variant='h3' sx={{color: 'lightGrey'}}>{String(index + '.')}</Typography>
                {icon}
                <Typography sx={{fontFamily: 'Oswald'}}>{children}</Typography>
            </Box>
        </>
    );

}
