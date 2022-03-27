import { Authenticator } from '@aws-amplify/ui-react';
import { NextPage } from 'next';
import React from 'react';
import Layout from 'components/Layout';
import { Divider, Typography } from '@mui/material';

import API, { graphqlOperation } from '@aws-amplify/api';
import { listAchievements } from 'graphql/queries';
import { useEffect } from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import CardOfList from 'components/shared/CardOfList';
import { Achievement } from 'components/viewModel/Result/AchievementType';
import { Auth } from 'aws-amplify';

const MyAchievementList: NextPage = () => {

  const [userName, setUserName] = useState<String>("");
  {/* todo: any見直す */}
  const [achievements, setAchievements] = useState<any>();

  const getAllAchievements = async (_userName: String) => {
    const _filter = {user: {eq: _userName}};
    const _result = await API.graphql(graphqlOperation(listAchievements, {filter: _filter}));
    setAchievements(_result);
  };

  const setCurrentUserName = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser()
      setUserName(user.username)
    } catch (e) {
      setUserName("")
    }
  }

  useEffect(() => {
    setCurrentUserName()
  }, )

  useEffect(() => {
    getAllAchievements(userName)
  }, [userName])

  return (
    <Authenticator>
      {() => (
        <Layout title="myAchievements">
          <Box>
            <Typography variant="h4">MyList</Typography>
            <Divider sx ={{mt: 1, mb: 3}} />
            <Box sx={{display: "flex", flexDirection: "row", gap: 3, flexWrap: "wrap"}}>
              {achievements?.data.listAchievements.items.length ?
                achievements?.data.listAchievements.items.map((e: Achievement, index: React.Key) => (
                  <CardOfList key={index} item={e} />
                ))
              : <Typography variant="h5">未登録です</Typography>
              }
            </Box>
        </Box>
        </Layout>
      )}
    </Authenticator>
  )
}

export default MyAchievementList
