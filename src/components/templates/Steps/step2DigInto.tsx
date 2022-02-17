import type { NextPage } from 'next'
import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StepLeader from '../../molecules/StepLeader';
import IconButton from '@mui/material/IconButton';
import WhyBox from '../../molecules/WhyBox';

const DigInto: NextPage = () => {
  return (
    <Box sx={{display: 'grid', gap: 2}}>
      <StepLeader step={1} />
      <Typography sx={{fontWeight: "bold", fontSize: "0.9rem"}} align="left" >
        本質的な改善対象を浮かび上がらせましょう
      </Typography>
      <WhyBox whyCount={1} />
    </Box>
  )
}

export default DigInto
