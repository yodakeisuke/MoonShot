import type { NextPage } from 'next'
import React from 'react'
import Box from '@mui/material/Box';
import StepLeader from '../../../components/molecules/StepLeader';
import { WhyList } from '../../../components/organisms/model_Why/WhyList'

const DigInto: NextPage = () => {
  return (
    <Box sx={{display: 'grid', gap: 1}}>
      <StepLeader step={1} lead="本質的な改善対象を浮かび上がらせましょう" />
      <WhyList />
    </Box>
  )
}

export default DigInto
