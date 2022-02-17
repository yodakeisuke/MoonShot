import React from "react"
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type Props = {
  whyCount: number;
};

export const WhyBox: React.FC<Props> = (whyCount) => {
  return (
    <Box sx={{ display: 'grid', alignItems: 'center'}}>
      <TextField
        id="filled-multiline-static"
        label={`cause ${whyCount}`}
        multiline
        rows={2}
        defaultValue="〜だから"
        variant="standard"
        color ="secondary"
        fullWidth={true}
        inputProps={{style: {fontSize: "clamp(15px, 2vw, 18px)"}}}
      />
      <IconButton>
        why?
      </IconButton>
    </Box>
  )
}

export default WhyBox
