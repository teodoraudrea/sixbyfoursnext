import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { AppBar } from '@mui/material';

export default function Copyright() {
  return (
    <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0, paddingTop: '20px', paddingBottom: '20px'}}>
    <Typography variant="h6" color="secondary" align="center" sx={{ flexGrow: 1, textAlign: 'center' }}>
      {'Copyright © '}
      <MuiLink color="secondary" href="https://www.linkedin.com/in/teodora-udrea-620a9a11a/">
        Teodra Udrea 6by4s
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
    </AppBar>
  );
}
