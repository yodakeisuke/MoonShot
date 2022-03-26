import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from 'src/aws-exports';
import { NextPage } from 'next';
import React from 'react';
import { Box } from '@mui/material';
Amplify.configure(awsExports);

const MyAchievementList: NextPage = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
      <Box>
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
      </Box>
      )}
    </Authenticator>
  )
}

export default MyAchievementList
