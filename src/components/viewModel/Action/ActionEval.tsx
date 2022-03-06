import * as React from 'react';
import Slider from '@mui/material/Slider';
import { ActionId, ActionPlan } from './ActionType';
import { useRecoilState } from 'recoil';
import { stateActionCost, stateActionPerformance } from './ActionState';
import { Box, Paper, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

type EvalProps = {
  plan: ActionPlan;
  actionId: ActionId;
  childeren?: never;
};

export const ActionEval: React.FC<EvalProps> = ({plan, actionId}) => {
  const [cost, setCost] = useRecoilState(stateActionCost(actionId));
  const [performance, setPerformance] = useRecoilState(stateActionPerformance(actionId));

  const costChange = (event: Event, newValue: number | number[]) => {
    setCost(newValue as number);
  };

  const performanceChange = (event: Event, newValue: number | number[]) => {
    setPerformance(newValue as number);
  };

  return (
    <Paper elevation={3} sx={{my: 2, flex: 1}}>
      <Typography sx={{m: 1, fontSize: "clamp(14px, 2.5vw, 17px)"}}>
        {plan}
      </Typography>
      <Box sx={{display: "grid", alignItems: "center", mb: 1}}>
        <Typography fontWeight="bold" sx={{fontSize: "clamp(11px, 1.7vw, 14px)", textAlign: "center"}}>
          COST
        </Typography>
        <Box sx={{display: "flex", alignItems: "center", mx: "5vw"}}>
          <ThumbUpIcon />
          <Slider
            size="small"
            defaultValue={50}
            aria-label="Small"
            valueLabelDisplay="auto"
            value={cost}
            onChange={costChange}
            sx={{mx: "2.5vw"}}
          />
          <ThumbDownIcon />
        </Box>
      </Box>
      <Box sx={{display: "grid", alignItems: "center", mb: 1}}>
        <Typography fontWeight="bold" sx={{fontSize: "clamp(11px, 1.7vw, 14px)", textAlign: "center"}}>
          PERFORMANCE
        </Typography>
        <Box sx={{display: "flex", alignItems: "center", mx: "5vw"}}>
          <ThumbUpIcon />
          <Slider
            size="small"
            defaultValue={50}
            aria-label="Small"
            valueLabelDisplay="auto"
            value={performance}
            onChange={performanceChange}
            sx={{mx: "2.5vw"}}
          />
          <ThumbDownIcon />
        </Box>
      </Box>
    </Paper>
  );
}

export default ActionEval
