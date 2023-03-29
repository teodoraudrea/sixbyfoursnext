import * as React from 'react';
import Copyright from '../src/Copyright';
import VerticalAlbumColour from '../src/Components/VerticalAlbumColour';
import NavBar from '../src/Components/NavBar';
import { Box } from '@mui/material';

export default function Vertical() {
  return (
    <>
    <NavBar/>
    <Box sx={{ my: 4 }} sx={{ marginTop: '80px', marginBottom: '40px'}} >
        <VerticalAlbumColour />
    </Box>
    <Copyright/>
    </>
  );
}
