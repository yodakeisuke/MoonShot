import React, { ReactNode } from "react";
import IconButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';

type ButtonRoundedProps = {
  children: ReactNode;
  color?: string;
};

const Round = styled(IconButton)({
  boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.3)",
  borderRadius: '30%',
  fontSize: "clamp(10px, 1.5vw, 15px)",
  padding: 0,
});

const ButtonRounded: React.FC<ButtonRoundedProps>  = ( {children, color="secondary"} ) => {
  return (
    <Round variant="contained" size="small" sx={{color: color}}>
      {children}
    </Round >
  )
}

export default ButtonRounded
