import { Authenticator } from '@aws-amplify/ui-react';
import { NextPage } from 'next';
import React from 'react';
import Layout from '../Layout';
import { Typography } from '@mui/material';

import API, { graphqlOperation } from '@aws-amplify/api';
import { listAchievements } from 'src/graphql/queries';
import { useEffect } from 'react';
import { useState } from 'react';
import ResultList from 'src/components/viewModel/Result/ResultList';

const MyAchievementList: NextPage = () => {

  {/* todo: any見直す */}
  const [achievements, setAchievements] = useState<any>();

  const getResult = async function getAllAchievements() {
    const result = await API.graphql(graphqlOperation(listAchievements))
    setAchievements(result);
    console.log(result);
  };

  useEffect(() => {
    getResult();
  }, [])

  return (
    <Authenticator>
      {({user}) => (
        <Layout title="myAchievements">
          <h1>myList</h1>
          <ResultList items={achievements?.data.listAchievements.items}/>
          <Typography>{achievements?.data.listAchievements.items[1].user}</Typography>
          <Typography>全部</Typography>
          <Typography>{JSON.stringify({achievements})}</Typography>
          <Typography>ユーザ情報</Typography>
          <Typography>{JSON.stringify({user})}</Typography>
        </Layout>
      )}
    </Authenticator>
  )
}

export default MyAchievementList
