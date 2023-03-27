import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Copyright from '../src/Copyright';
import AlbumSelection from '../src/Components/AlbumSelection';
import NavBar from '../src/Components/NavBar';

export default function Index() {
  return (
    <div>
    <Box>
      <NavBar/>
      <Box sx={{ my: 4 }} sx={{ marginTop: '100px', marginBottom: '40px'}} >
        <AlbumSelection />
      </Box>
      <Copyright />
    </Box>
    </div>
  );
}
