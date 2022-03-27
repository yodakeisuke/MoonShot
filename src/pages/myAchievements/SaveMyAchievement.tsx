import { Authenticator } from '@aws-amplify/ui-react';
import { NextPage } from 'next';
import React from 'react';
import Layout from 'components/Layout';
import { Box, Fab } from '@mui/material';
import ResultCard from 'components/viewModel/Result/ResultCard';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { selectBestAction } from 'components/viewModel/Action/ActionState';
import { stateAsIs, stateToBe, stateGap } from 'components/viewModel/Analysis/AnalysisState';
import { selectRootCause } from 'components/viewModel/Why/WhyState';

import API, { graphqlOperation } from '@aws-amplify/api';
import { createAchievement } from 'graphql/mutations';
import { onCreateAchievement } from 'graphql/subscriptions';
import { useState } from 'react';
import Button from '@mui/material/Button';
import StepLeader from 'components/shared/StepLeader';
import Editable from 'components/shared/Editable';
import { changeEvent } from 'components/viewModel/GlobalType';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Link from 'next/link';


const SaveMyAchievement: NextPage = () => {

  const [saveResult, setSaveResult] = useState<String>("SAVE")

  const [theme, setTheme] = useState<String>("");
  const rootCause = useRecoilValue(selectRootCause);
  const bestAction = useRecoilValue(selectBestAction);
  const asIs = useRecoilValue(stateAsIs);
  const toBe = useRecoilValue(stateToBe);
  const gap = useRecoilValue(stateGap);

  const createNewAchievement = async ( userName: String | undefined, _theme: String ) => {
    const user = userName;

    await API.graphql(graphqlOperation(createAchievement, { input: {
        user: user,
        theme: _theme,
        asIs: asIs,
        toBe: toBe,
        gap: gap,
        cause: rootCause.cause,
        action: bestAction.plan,
      }
    }));
  };

  useEffect(() => {
    const client = API.graphql(graphqlOperation(onCreateAchievement));

    if ('subscribe' in client) {
      const subscription = client.subscribe({
        next: () => {
          setSaveResult("COMPLETED!");
        }
      });
      return () => subscription.unsubscribe();
    }
  }, []);

  return (
    <Authenticator>
<<<<<<< HEAD
    {() => (
=======
    {({ user }) => (
>>>>>>> origin/develop
      <Layout title="save" >
        <Box sx={{mx: 'auto', width: '85%',  mt: 3}}>
          <Box>
            <StepLeader step={1} lead="保存するテーマ名を設定する" />
            <Editable
              label="Theme:"
              placeHolder="簡単なテーマ名"
              onChange={(ev: changeEvent) => setTheme(ev.target.value)}
              rows={1}
            />
          </Box>
          <Box sx={{display: "grid", }}>
            <StepLeader step={2} lead="保存しましょう！" />
            <Button
              size="large" variant="contained" startIcon={<SaveAsIcon />}
              sx={{width: "260px", m: 4, justifySelf: "center"}}
              onClick={() => createNewAchievement(user.username, theme)}>
                {saveResult}
            </Button>
          </Box>
          <ResultCard />
          <Link href="/" passHref>
            <Fab color="secondary" sx={{mt: 3}}>
              <ArrowLeftIcon fontSize="large"/>
            </Fab>
          </Link>
        </Box>
      </Layout>
    )}
    </Authenticator>
  )
}

export default SaveMyAchievement
