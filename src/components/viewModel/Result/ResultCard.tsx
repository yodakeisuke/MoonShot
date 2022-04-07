import React from 'react';
import { useRecoilValue } from 'recoil';

import { selectBestAction } from 'components/viewModel/Action/ActionState';
import { selectRootCause } from 'components/viewModel/Why/WhyState';
import AnalysisFigure from 'components/viewModel/Result/AnalysisFigure';

import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { yellow } from '@mui/material/colors';

export const ResultCard: React.FC = () => {
  const rootCause = useRecoilValue(selectRootCause);
  const bestAction = useRecoilValue(selectBestAction);

  return (
    <Card sx={{ bgcolor: 'white' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <AddTaskIcon />
        <CardHeader title="My Achievement" />
      </Box>
      <Divider />
      <CardContent sx={{ display: 'grid', justifyContent: 'center' }}>
        <AnalysisFigure />
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          <ArrowDownwardIcon />
          <Typography>WHY?</Typography>
        </Box>
        <Card
          elevation={1}
          sx={{ bgcolor: '#F5F5F5', width: '60vw', height: '100px', justifySelf: 'center' }}
        >
          <CardHeader
            subheader="root cause"
            subheaderTypographyProps={{ color: yellow[700] }}
            sx={{ p: 0.1, textAlign: 'center' }}
          />
          <CardContent sx={{ p: 1 }}>{ rootCause?.cause }</CardContent>
        </Card>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          <ArrowDownwardIcon />
          <Typography>THEN...</Typography>
        </Box>
        <Card
          elevation={1}
          sx={{ bgcolor: '#F5F5F5', width: '60vw', height: '100px', justifySelf: 'center' }}
        >
          <CardHeader
            subheader="my action"
            subheaderTypographyProps={{ color: yellow[700] }}
            sx={{ p: 0.1, textAlign: 'center' }}
          />
          <CardContent sx={{ p: 1 }}>{ bestAction?.plan }</CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default ResultCard;
