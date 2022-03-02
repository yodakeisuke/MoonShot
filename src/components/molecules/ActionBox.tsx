import React from "react"
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type Props = {
  actionCount: number;
};

export const ActionBox: React.FC<Props> = (whyCount) => {
  return (
      <Box sx={{ display: 'flex'}}>
        <TextField
          id="standard-basic"
          label={`action ${whyCount}`}
          variant="standard"
          fullWidth={true}
          color ="secondary"
        />
        <IconButton>
          +
        </IconButton>
      </Box>
  )
}

export default ActionBox
