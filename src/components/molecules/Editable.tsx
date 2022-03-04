import React from "react"
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

type Props = {
  label: string | number;
  placeHolder: string;
  rows?: number;
};

export const Editable: React.FC<Props> = ({label, placeHolder,rows=2}) => {
  return (
    <Paper elevation={3} sx={{my: 2, flex: 1}}>
      <TextField
        id="filled-multiline-static"
        label={label}
        multiline
        rows={rows}
        defaultValue={placeHolder}
        variant="standard"
        color ="secondary"
        inputProps={{style: {fontSize: "clamp(14px, 2.5vw, 17px)"}}}
        sx={{ml: 2, my:2, width: "90%"}}
      />
    </Paper>
  )
}

export default Editable
