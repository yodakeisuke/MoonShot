import type { NextPage } from 'next'
import React from 'react'
import Box from '@mui/material/Box';
import Editable from '../../../components/molecules/Editable';
import StepLeader from '../../../components/molecules/StepLeader';

const FocusOnTheTarget: NextPage = () => {
  return (
    <Box sx={{display: 'grid', gap: 3}}>
      <Box>
        <StepLeader step={1} lead="理想の状態を可視化しましょう" />
        <Editable
          label="ToBe:"
          placeHolder="（テーマ）についてどのような状態である"
        />
      </Box>
      <Box>
      <StepLeader step={2} lead="現在の状態を可視化しましょう" />
        <Editable
          label="AsIs:"
          placeHolder="（テーマ）についてどのような状態である"
        />
      </Box>
      <Box>
        <StepLeader step={3} lead="理想 ー 現在 の差分を特定しましょう" />
        <Editable
          label="Gap:"
          placeHolder="何がどの程度どうなっていない"
        />
      </Box>
    </Box>
  )
}

export default FocusOnTheTarget
