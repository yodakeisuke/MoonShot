import { NextPage } from 'next';
import React from 'react';

import Layout from '../../components/Layout';
import ResultCard from 'components/viewModel/Result/ResultCard';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Authenticator } from '@aws-amplify/ui-react';

const SaveMyAchievement: NextPage = () => {
  return (
    <Authenticator>
    {() => (
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
