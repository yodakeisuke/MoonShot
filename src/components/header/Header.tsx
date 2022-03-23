import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from '/public/logo.svg'
import FeatureMenu from './FeatureMenu';

export const Header: React.FC = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ boxShadow: 0, backgroundColor: "transparent", px: 0}} >
        <Toolbar sx={{display: 'flex',justifyContent: 'space-between'}}>
          <Logo width="200" height="70" viewBox="0 0 911 353" />
            <FeatureMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header
