
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { selectBestAction } from 'src/components/viewModel/Action/ActionState';
import { stateAsIs, stateToBe, stateGap } from 'src/components/viewModel/Analysis/AnalysisState';
import { selectRootCause } from 'src/components/viewModel/Why/WhyState';

import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from 'src/aws-exports';
Amplify.configure(awsExports);

import API, { graphqlOperation } from '@aws-amplify/api';
import { createAchievement } from 'src/graphql/mutations';

async function createNewTodo() {
  const todo = { name:  "Todo " + Math.floor(Math.random() * 10) };
  await API.graphql(graphqlOperation(createAchievement, { input: todo }));
}

const SaveMock: React.FC = () => {

  const RootCause = useRecoilValue(selectRootCause);
  const BestAction = useRecoilValue(selectBestAction);
  const asIs = useRecoilValue(stateAsIs);
  const toBe = useRecoilValue(stateToBe);
  const Gap = useRecoilValue(stateGap);

  return (
    <Box sx={{mx: 'auto', width: '85%',  mt: 3}}>
      <Typography>保存</Typography>



    </Box>
  )
}

export default SaveMock
