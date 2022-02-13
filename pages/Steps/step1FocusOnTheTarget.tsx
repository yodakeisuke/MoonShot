import type { NextPage } from 'next'
import React from 'react'
import { Box, IconButton, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

const FocusOnTheTarget: NextPage = () => {
  return (
    <React.Fragment>
      <Box>
        <Typography variant="caption" sx={{mb: 1}}>Step 1</Typography>
        <Divider />
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
        <Typography sx={{fontWeight: "bold", fontSize: "0.9rem"}} align="left" >
            理想の状態を可視化しましょう
          </Typography>
          <IconButton>
            ◉
          </IconButton>
        </Box>
          <TextField
          id="filled-multiline-static"
          label="ToBe:"
          multiline
          rows={2}
          defaultValue="（テーマ）について〜〜のような状態である"
          variant="filled"
          color ="secondary"
          fullWidth={true}
          inputProps={{style: {fontSize: "5px"}}}
        />
      </Box>
      <Box>
      <Typography variant="caption" sx={{mb: 1}}>Step 2</Typography>
        <Divider />
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <Typography sx={{fontWeight: "bold", fontSize: "0.9rem"}} align="left" >
            現在の状態を可視化しましょう
          </Typography>
          <IconButton>
            ◉
          </IconButton>
        </Box>
          <TextField
          id="filled-multiline-static"
          label="AsIs:"
          multiline
          rows={2}
          defaultValue="（テーマ）について〜〜のような状態である"
          variant="filled"
          color ="secondary"
          fullWidth={true}
          inputProps={{style: {fontSize: "5px"}}}
        />
      </Box>
      <Box>
      <Typography variant="caption" sx={{mb: 1}}>Step 3</Typography>
        <Divider />
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <Typography sx={{fontWeight: "bold", fontSize: "0.9rem"}} align="left" >
            理想 ー 現在 の差分を特定しましょう
          </Typography>
          <IconButton>
            ◉
          </IconButton>
        </Box>
          <TextField
          id="filled-multiline-static"
          label="Gap:"
          multiline
          rows={2}
          defaultValue="（テーマ）について〜〜のような状態である"
          variant="filled"
          color ="secondary"
          fullWidth={true}
          inputProps={{style: {fontSize: "5px"}}}
        />
      </Box>
    </React.Fragment>
  )
}

export default FocusOnTheTarget
