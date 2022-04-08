import React from 'react';
import type { NextPage } from 'next';

import Box from '@mui/material/Box';
import StepLeader from 'components/shared/StepLeader';

import { ActionList } from 'components/viewModel/Action/ActionList';
import { ActionEvalList } from 'components/viewModel/Action/ActionEvalList';

const Planning: NextPage = () => {
  return (
    <Box sx={{ display: 'grid', gap: 2 }}>
      <Box>
        <StepLeader step={1} lead="対策の洗い出し" />
        <ActionList />
      </Box>
      <Box>
        <StepLeader step={2} lead="実行アクションの評価" />
        <ActionEvalList />
      </Box>
    </Box>
  );
};

export default Planning;
