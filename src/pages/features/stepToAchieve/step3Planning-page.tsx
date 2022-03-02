import type { NextPage } from 'next'
import React from 'react'
import Box from '@mui/material/Box';
import StepLeader from '../../../components/molecules/StepLeader';
import ActionBox from '../../../components/molecules/ActionBox';
import DecisionTable from '../../../components/molecules/DecisionTable';

const Planning: NextPage = () => {
  return (
    <Box sx={{display: 'grid', gap: 2}}>
      <StepLeader step={1} lead="可能な限り対策を挙げてみましょう"/>
      <ActionBox actionCount={1} />
      <StepLeader step={2} lead="対策案を評価・選択しましょう"/>
      <DecisionTable
        headers = {["a", "a", "a", "a"]}
        datas = {["a", "a", "a", "a"]}
      >
      </DecisionTable>
    </Box>
  )
}

export default Planning
