
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

const SaveMock: React.FC = () => {

  const rootCause = useRecoilValue(selectRootCause);
  const bestAction = useRecoilValue(selectBestAction);
  const asIs = useRecoilValue(stateAsIs);
  const toBe = useRecoilValue(stateToBe);
  const gap = useRecoilValue(stateGap);

  async function createNewAchievement() {
    const Achievement = {
      user: "testuser",
      theme: "testtheme",
      asIs: asIs,
      toBe: toBe,
      gap: gap,
      cause: rootCause,
      action: bestAction,
    };
    await API.graphql(graphqlOperation(createAchievement, { input: Achievement }));
  }

  return (
    <Box sx={{mx: 'auto', width: '85%',  mt: 3}}>
      <Typography>保存</Typography>
      <button onClick={createNewAchievement}>SAVE</button>
    </Box>
  )
}

export default SaveMock
