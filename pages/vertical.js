import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import VerticalAlbum from '../src/Components/VerticalAlbum';
import NavBar from '../src/Components/NavBar';

export default function Vertical() {
  return (
    <>
    <NavBar/>
    <VerticalAlbum/>
    </>
  );
}
