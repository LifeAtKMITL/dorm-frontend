import React from "react";

import { AppBar, Box, Toolbar } from "@mui/material";
import { logoImg } from 'assets';


export type MainLayoutProps = {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    return <Box>
        <AppBar style={{ background: '#071217' }}>
            <Toolbar>
                <Box flexGrow={1}>
                    <Box>
                        {/* enter link here */}
                        <img width='60px' height='60px' src={logoImg} alt='logo'/>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>


        <Box  style={{ background: 'black' }}>
            <Toolbar/>
            {children}
        </Box>


    </Box>

}