import { NextPage } from 'next';
import React from 'react';

import Layout from 'components/Layout';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';

import { Authenticator } from '@aws-amplify/ui-react';

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
