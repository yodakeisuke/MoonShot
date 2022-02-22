import React from 'react'
import Button from '@mui/material/Button';

type WhyButtonProps = {
  children?: never
}

const WhyButton: React.FC<WhyButtonProps>  = () => {
  return (
    <Button variant="contained" size="large">
      WHY？
    </Button>
  )
}

export default WhyButton
