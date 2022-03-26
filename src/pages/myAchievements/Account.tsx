import { NextPage } from 'next';
import React from 'react';
import Layout from '../Layout';

import { Authenticator } from '@aws-amplify/ui-react';
import { Box, Button, Typography } from '@mui/material';

import LogoutIcon from '@mui/icons-material/Logout';

const Account: NextPage = () => {

  return (
    <Layout title="Account" >
      <Authenticator>
        {({signOut, user}) => (
          <Box sx={{display: "grid", gap: 3, justifyContent: "center"}}>
            <Typography variant="h4" align="center">Hello!</Typography>
            <Button
              onClick={signOut} color="inherit" startIcon={<LogoutIcon />} size="large"
              sx={{width: "20vw"}}>
              Sign out
            </Button>
          </Box>
        )}
      </Authenticator>
    </Layout>
  )
}

export default Account
