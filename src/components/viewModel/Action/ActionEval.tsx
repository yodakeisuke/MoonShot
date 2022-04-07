import React from 'react';
import { useRecoilState } from 'recoil';

import { stateActionCost, stateActionPerformance } from 'components/viewModel/Action/ActionState';
import { ActionId, ActionPlan } from 'components/viewModel/Action/ActionType';

import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

type EvalProps = {
  plan: ActionPlan;
  actionId: ActionId;
};

export const ActionEval: React.FC<EvalProps> = ({ plan, actionId }) => {
  const [cost, setCost] = useRecoilState(stateActionCost(actionId));
  const [performance, setPerformance] = useRecoilState(stateActionPerformance(actionId));

  const costChange = (_event: Event, newValue: number | number[]) => {
    setCost(newValue as number);
  };

  const performanceChange = (_event: Event, newValue: number | number[]) => {
    setPerformance(newValue as number);
  };

  return (
    <Paper elevation={3} sx={{ my: 2, flex: 1 }}>
      <Typography sx={{ m: 1, fontSize: 'clamp(14px, 2.5vw, 17px)' }}>
        {plan}
      </Typography>
      <Box sx={{ display: 'grid', alignItems: 'center', mb: 1 }}>
        <Typography fontWeight="bold" sx={{ fontSize: 'clamp(11px, 1.7vw, 14px)', textAlign: 'center' }}>
          COST
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mx: '5vw' }}>
          <ThumbDownIcon />
          <Slider
            size="small"
            defaultValue={50}
            aria-label="Small"
            valueLabelDisplay="auto"
            value={cost}
            onChange={costChange}
            sx={{ mx: '2.5vw' }}
          />
          <ThumbUpIcon />
        </Box>
      </Box>
      <Box sx={{ display: 'grid', alignItems: 'center', mb: 1 }}>
        <Typography fontWeight="bold" sx={{ fontSize: 'clamp(11px, 1.7vw, 14px)', textAlign: 'center' }}>
          PERFORMANCE
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mx: '5vw' }}>
          <ThumbDownIcon />
          <Slider
            size="small"
            defaultValue={50}
            aria-label="Small"
            valueLabelDisplay="auto"
            value={performance}
            onChange={performanceChange}
            sx={{ mx: '2.5vw' }}
          />
          <ThumbUpIcon />
        </Box>
      </Box>
    </Paper>
  );
};

export default ActionEval;
