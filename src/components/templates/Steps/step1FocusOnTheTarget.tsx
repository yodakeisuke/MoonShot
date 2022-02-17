import type { NextPage } from 'next'
import React from 'react'
import Box from '@mui/material/Box';
import Editable from '../../molecules/Editable';
import StepLeader from '../../molecules/StepLeader';

const FocusOnTheTarget: NextPage = () => {
  return (
    <Box sx={{display: 'grid', gap: 3}}>
      <Box>
        <StepLeader step={1} />
        <Editable
          lead="理想の状態を可視化しましょう"
          label="ToBe:"
          placeHolder="（テーマ）についてどのような状態である"
          rows={3}
        />
      </Box>
      <Box>
      <StepLeader step={2} />
        <Editable
          lead="現在の状態を可視化しましょう"
          label="AsIs:"
          placeHolder="（テーマ）についてどのような状態である"
        />
      </Box>
      <Box>
        <StepLeader step={3} />
        <Editable
          lead="理想 ー 現在 の差分を特定しましょう"
          label="Gap:"
          placeHolder="何がどの程度どうなっていない"
        />
      </Box>
    </Box>
  )
}

export default FocusOnTheTarget
