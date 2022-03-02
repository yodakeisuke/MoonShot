import React from "react";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

type Props = {
  step: number,
  lead: string
};

export const StepLeader: React.FC<Props> = ({step, lead}) => {
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', height: "3.3rem", pt: 1}}>
        <Typography
          variant="caption"
          sx={{fontSize: "clamp(14px, 2.5vw, 18px)"}}
        >
          Step {step}
        </Typography>
        <Typography
          sx={{fontWeight: "bold", fontSize: "clamp(15px, 2.5vw, 17px)", ml: 2, flex: 1}}
          align="left"
        >
          {lead}
        </Typography>
        <Tooltip title="how to" sx={{padding: 0.1, mr: 4}}>
          <Button variant="contained" size="small">tips?</Button>
        </Tooltip>
      </Box>
      <Divider />
    </React.Fragment>
  )
}

export default StepLeader
