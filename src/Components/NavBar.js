import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Camera from '@mui/icons-material/Camera';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Camera/>
          </IconButton>
          <Typography variant="h4" color="inherit" component="div">
            6BY4S
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}