import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { selectBestAction } from 'src/components/viewModel/Action/ActionState';
import { stateAsIs, stateToBe, stateGap } from 'src/components/viewModel/Analysis/AnalysisState';
import { selectRootCause } from 'src/components/viewModel/Why/WhyState';

import API, { graphqlOperation } from '@aws-amplify/api';
import { createAchievement } from 'src/graphql/mutations';
import { onCreateAchievement } from 'src/graphql/subscriptions';
import { useState } from 'react';

const SaveMock: React.FC = () => {
  const [saveResult, setSaveResult] = useState()

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
      cause: rootCause?.cause,
      action: bestAction?.plan,
    };
    await API.graphql(graphqlOperation(createAchievement, { input: Achievement }));
  }

  useEffect(() => {
    const client = API.graphql(graphqlOperation(onCreateAchievement));

    if ('subscribe' in client) {
      const subscription = client.subscribe({
        // todo: any見直す
        next: (eventData: any) => {
          const Achievement = eventData.value.data.onCreateAchievement;
          setSaveResult(Achievement);
        }
      });

      return () => subscription.unsubscribe();
    }
  }, []);

  return (
    <Box sx={{mx: 'auto', width: '85%',  mt: 3}}>
      <Typography>保存</Typography>
      <button onClick={createNewAchievement}>SAVE</button>
      <Typography>{JSON.stringify(saveResult)}</Typography>
    </Box>
  )
}

export default SaveMock
