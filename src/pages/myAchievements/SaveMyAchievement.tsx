import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from 'src/aws-exports';
import { NextPage } from 'next';
import React from 'react';
import Layout from '../Layout';
import { Box, Typography } from '@mui/material';
import ResultCard from 'src/components/viewModel/Result/ResultCard';
Amplify.configure(awsExports);

const SaveMyAchievement: NextPage = () => {
  return (
    <Authenticator>
    {({ signOut, user }) => (
      <Layout title="save" >
        <Box sx={{mx: 'auto', width: '85%',  mt: 3}}>
          <Typography>以下の内容を保存します</Typography>
          <ResultCard />
        </Box>
      </Layout>
    )}
    </Authenticator>
  )
}

export default SaveMyAchievement
