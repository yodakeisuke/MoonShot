import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from '/public/logo.svg'
import FeatureMenu from './FeatureMenu';
import Button from '@mui/material/Button'
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Auth } from 'aws-amplify'

export const Header: React.FC = () => {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  useEffect(() => {
    setCurrentUser()
  }, )

  const setCurrentUser = async () => {
    try {
      await Auth.currentAuthenticatedUser()
      setIsAuthenticated(true)
    } catch (e) {
      setIsAuthenticated(false)
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ boxShadow: 0, backgroundColor: "transparent", px: 0}} >
        <Toolbar sx={{display: 'flex',justifyContent: 'space-between'}}>
          <Link href="/" passHref>
            <Logo width="200" height="70" viewBox="0 0 911 353" />
          </Link>
            {isAuthenticated ?
              <FeatureMenu />
              :
              <Link href="/myAchievements/Account" as="Account" passHref>
                <Button variant="outlined" color="inherit" size="medium" sx={{my: 3, py: 1, px: 2}}>
                  login
                </Button>
              </Link>
            }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header
