import type { NextPage } from 'next'
import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StepLeader from '../../../components/atom/StepLeader';
import IconButton from '@mui/material/IconButton';
import ActionBox from '../../../components/molecule/ActionBox';
import DecisionTable from '../../../components/molecule/DecisionTable';

const Planning: NextPage = () => {
  return (
    <Box sx={{display: 'grid', gap: 2}}>
      <StepLeader step={1} />
      <Typography sx={{fontWeight: "bold", fontSize: "0.9rem"}} align="left" >
        可能な限り対策を挙げてみましょう
      </Typography>
      <ActionBox actionCount={1} />
      <StepLeader step={2} />
      <Typography sx={{fontWeight: "bold", fontSize: "0.9rem"}} align="left" >
        対策案を評価・選択しましょう
      </Typography>
      <DecisionTable
        headers = {["a", "a", "a", "a"]}
        datas = {["a", "a", "a", "a"]}
      >
      </DecisionTable>
    </Box>
  )
}

export default Planning
