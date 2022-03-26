import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from 'src/aws-exports';
import { NextPage } from 'next';
import React from 'react';
import Layout from '../Layout';
import { Box, Typography } from '@mui/material';

import API, { graphqlOperation } from '@aws-amplify/api';
import { listAchievements } from 'src/graphql/queries';

const MyAchievementList: NextPage = () => {

  async function getAllAchievements() {
    return await API.graphql(graphqlOperation(listAchievements));
  }
  const result = getAllAchievements

  return (
    <Layout title="myAchievements">
      <h1>myList</h1>
      <Typography>{JSON.stringify(result)}</Typography>
    </Layout>
  )
}

export default MyAchievementList
