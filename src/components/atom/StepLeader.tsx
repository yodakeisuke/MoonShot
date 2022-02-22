import React from "react"
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';

type Props = {
  step: number
};

export const StepLeader: React.FC<Props> = ({step}) => {
  return (
    <React.Fragment>
      <Typography
        variant="caption"
        sx={{mb: 1, fontSize: "clamp(14px, 2.5vw, 18px)"}}
      >
        Step {step}
      </Typography>
      <Divider />
    </React.Fragment>
  )
}

export default StepLeader
