import React from 'react';

import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';

// 検討: react-hook-form
type Props = {
  label: string | number;
  placeHolder?: string | undefined;
  rows?: number;
  // Todo: 適切な型
  onChange: any;
};

export const Editable: React.FC<Props> = ({ label, placeHolder = '', rows = 2, onChange }) => {
  return (
    <Paper elevation={3} sx={{ my: 2, flex: '1' }}>
      <TextField
        id="filled-multiline-static"
        label={label}
        placeholder={placeHolder}
        multiline
        rows={rows}
        defaultValue={placeHolder}
        variant="standard"
        color="primary"
        inputProps={{ style: { fontSize: 'clamp(14px, 2.5vw, 17px)' } }}
        sx={{ ml: 2, my: 1, width: '90%' }}
        onChange={onChange}
      />
    </Paper>
  );
};

export default Editable;
