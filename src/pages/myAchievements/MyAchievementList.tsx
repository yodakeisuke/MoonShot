import { NextPage } from 'next';
import React from 'react';

import Layout from 'components/Layout';
import Typography from '@mui/material/Typography';

import API, { graphqlOperation } from '@aws-amplify/api';
import { listAchievements } from 'graphql/queries';

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
