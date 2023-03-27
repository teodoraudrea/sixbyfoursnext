import * as React from 'react';
import Container from '@mui/material/Container';
import HorizontalAlbum from '../src/Components/HorizontalAlbum';
import NavBar from '../src/Components/NavBar';
import Copyright from '../src/Copyright';
import { Box } from '@mui/material';

export default function Horizontal() {
  return (
    <>
    <NavBar/>
    <Box sx={{ my: 4 }} sx={{ marginTop: '80px', marginBottom: '40px'}} >
        <HorizontalAlbum />
      </Box>
    <Copyright/>
    </>
  );
}
