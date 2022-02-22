import React from 'react';
import TextField from "@mui/material/TextField";

type InputBoxProps = {
  label: string;
  placeHolder: string;
  rows?: number;
  children?: never
};

const InputBox: React.FC<InputBoxProps>  = ({label, placeHolder,rows=2}) => {
  return (
    <TextField
      id="filled-multiline-static"
      label={label}
      multiline
      rows={rows}
      defaultValue={placeHolder}
      variant="standard"
      color ="secondary"
      inputProps={{style: {fontSize: "clamp(14px, 2.5vw, 17px)"}}}
      sx={{ml: 2, mb:3, width: "90%"}}
  />
  )
}

export default InputBox
