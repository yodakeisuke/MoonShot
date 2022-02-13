import React from "react"
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type Props = {
  lead: string;
  label: string;
  placeHolder: string;
  rows?: number;
};

export const Editable: React.FC<Props> = ({lead, label, placeHolder,rows=2}) => {
  return (
    <Box sx={{display: 'grid'}}>
      <Box sx={{ display: 'flex', alignItems: 'center'}}>
        <Typography sx={{fontWeight: "bold", fontSize: "0.9rem"}} align="left" >
          {lead}
        </Typography>
        <IconButton>
          ◉
        </IconButton>
      </Box>
      <TextField
        id="filled-multiline-static"
        label={label}
        multiline
        rows={rows}
        defaultValue={placeHolder}
        variant="filled"
        color ="secondary"
        fullWidth={true}
        inputProps={{style: {fontSize: "clamp(3px, 2vw, 15px)"}}}
      />
    </Box>
  )
}

export default Editable
