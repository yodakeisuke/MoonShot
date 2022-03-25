import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from '/public/logo.svg'
import FeatureMenu from './FeatureMenu';
import Button from '@mui/material/Button'
import Link from 'next/link';
import { useEffect } from 'react';

import { Amplify } from 'aws-amplify';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from 'src/aws-exports';
import { useMemo } from 'react';


Amplify.configure(awsExports);

export const Header: React.FC = () => {

  const { route } = useAuthenticator(context => [context.route]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ boxShadow: 0, backgroundColor: "transparent", px: 0}} >
        <Toolbar sx={{display: 'flex',justifyContent: 'space-between'}}>
          <Logo width="200" height="70" viewBox="0 0 911 353" />
          { route }
            { route === 'authenticated' ?
              <React.Fragment>
                    <FeatureMenu />
              </React.Fragment>
              :
              <Link href="/myAchievements/SignIn" as="signin" passHref={true}>
                <Button variant="outlined" color="inherit" size="medium" sx={{my: 3, py: 1, px: 2}}>
                  login
                </Button>
              </Link> }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header
