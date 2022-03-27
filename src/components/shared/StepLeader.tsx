import React from 'react';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

type Props = {
  step: number,
  lead: string
};

export const StepLeader: React.FC<Props> = ({step, lead}) => {
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'end', height: "3.3rem", pt: 0.7, pb: 0.2}}>
        <Typography
          variant="caption"
          sx={{fontSize: "clamp(13px, 2.5vw, 17px)"}}
        >
          Step {step}
        </Typography>
        <Typography
          sx={{fontWeight: "bold", fontSize: "clamp(13px, 2.5vw, 17px)", ml: 2, flex: 1}}
          align="left"
        >
          {lead}
        </Typography>
        <Tooltip title="how to">
          <Button variant="contained" color="secondary"
            sx={{fontSize: "clamp(10px, 2vw, 14px)", padding: 0.1, mb: 0.4, mx: 0.3}}>
              tips?
          </Button>
        </Tooltip>
      </Box>
      <Divider />
    </React.Fragment>
  )
}

export default StepLeader
