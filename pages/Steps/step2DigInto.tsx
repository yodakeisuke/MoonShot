import type { NextPage } from 'next'
import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StepLeader from '../../components/StepLeader';
import IconButton from '@mui/material/IconButton';
import WhyBox from '../../components/WhyBox';

const DigInto: NextPage = () => {
  return (
    <Box sx={{display: 'grid'}}>
      <StepLeader step={1} />
      <Typography sx={{fontWeight: "bold", fontSize: "0.9rem"}} align="left" >
        本質的な改善対象を浮かび上がらせましょう
      </Typography>
      <IconButton>
          ◉
      </IconButton>
      <WhyBox whyCount={1} />
    </Box>
  )
}

export default DigInto
