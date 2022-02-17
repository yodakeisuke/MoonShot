import React from "react"
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

type Props = {
  lead: string;
  label: string;
  placeHolder: string;
  rows?: number;
};

export const Editable: React.FC<Props> = ({lead, label, placeHolder,rows=2}) => {
  return (
    <Paper elevation={3} sx={{my: 2}}>
      <Box sx={{ display: 'flex', alignItems: 'center', height: "3.3rem", pt: 1}}>
        <Typography
          sx={{fontWeight: "bold", fontSize: "clamp(15px, 2.5vw, 17px)", ml:2}}
          align="left"
        >
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
        variant="standard"
        color ="secondary"
        inputProps={{style: {fontSize: "clamp(14px, 2.5vw, 17px)"}}}
        sx={{ml: 2, mb:3, width: "90%"}}
      />
    </Paper>
  )
}

export default Editable
