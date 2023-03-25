import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Copyright from '../src/Copyright';
import AlbumSelection from '../src/Components/AlbumSelection';
import NavBar from '../src/Components/NavBar';

export default function Index() {
  return (
    <div>
    <NavBar/>
      <Box sx={{ my: 4 }}>
        <AlbumSelection/>
        <Copyright />
      </Box>
    </div>
  );
}
