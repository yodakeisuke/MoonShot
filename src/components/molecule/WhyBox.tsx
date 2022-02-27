import React from "react"
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WhyButton from "../atom/WhyButton";
import InputBox from "../atom/InputBox";

type Props = {
  whyCount: number;
};

export const WhyBox: React.FC<Props> = (whyCount) => {
  return (
    <Box sx={{ display: 'grid', alignItems: 'center'}}>
      <InputBox
        label="test"
        placeHolder= "holder"
      />
      <WhyButton />
    </Box>
  )
}

export default WhyBox
