import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from 'src/aws-exports';
import { NextPage } from 'next';
import React from 'react';
import Layout from '../Layout';
import { Box } from '@mui/material';
Amplify.configure(awsExports);

const MyAchievementList: NextPage = () => {
  return (
    <Authenticator>
    {({ signOut, user }) => (
      <Layout title="myAchievement" >
        <Box sx={{mx: 'auto', width: '85%',  mt: 3}}>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </Box>
      </Layout>
    )}
    </Authenticator>
  )
}

export default MyAchievementList
