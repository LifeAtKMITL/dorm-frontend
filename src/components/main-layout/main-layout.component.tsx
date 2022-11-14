import React from 'react';

import { AppBar, Box, Toolbar } from '@mui/material';
import { logoImg } from 'assets';
import NavBar from 'components/navbar';

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box>
      <AppBar>
        <NavBar />
      </AppBar>
      <Box style={{ background: 'black' }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export const MainLayout2: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box>
      <AppBar>
        <NavBar />
      </AppBar>
      <Box style={{ background: 'black' }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
