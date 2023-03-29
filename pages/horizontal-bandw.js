import * as React from 'react';
import HorizontalAlbumBandW from '../src/Components/HorizontalAlbumBandW';
import NavBar from '../src/Components/NavBar';
import Copyright from '../src/Copyright';
import { Box } from '@mui/material';

export default function Horizontal() {
  return (
    <>
    <NavBar/>
    <Box sx={{ my: 4 }} sx={{ marginTop: '80px', marginBottom: '40px'}} >
        <HorizontalAlbumBandW />
      </Box>
    <Copyright/>
    </>
  );
}
