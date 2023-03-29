import * as React from 'react';
import Copyright from '../src/Copyright';
import VerticalAlbumBandW from '../src/Components/VerticalAlbumBandW';
import NavBar from '../src/Components/NavBar';
import { Box } from '@mui/material';

export default function Vertical() {
  return (
    <>
    <NavBar/>
    <Box sx={{ my: 4 }} sx={{ marginTop: '80px', marginBottom: '40px'}} >
        <VerticalAlbumBandW />
    </Box>
    <Copyright/>
    </>
  );
}
