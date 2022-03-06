import type { NextPage } from 'next'
import React from 'react'
import Box from '@mui/material/Box';
import StepLeader from '../../components/shared/StepLeader';
import { WhyList } from '../../components/viewModel/Why/WhyList'

const DigInto: NextPage = () => {
  return (
    <Box sx={{display: 'grid', gap: 1.3}}>
      <Box>
        <StepLeader step={1} lead="根本原因を探る" />
        <WhyList />
      </Box>
    </Box>
  )
}

export default DigInto
