import * as React from 'react';
import Container from '@mui/material/Container';
import HorizontalAlbum from '../src/Components/HorizontalAlbum';
import NavBar from '../src/Components/NavBar'

export default function Horizontal() {
  return (
    <>
    <NavBar/>
      <HorizontalAlbum/>
    </>
  );
}
