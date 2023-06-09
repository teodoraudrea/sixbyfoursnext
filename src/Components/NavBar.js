import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Camera, ShoppingBag } from '@mui/icons-material';
import Link from '../Link';
import ProductsModal from './ProductsModal';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            color="secondary"
            aria-label="home"
            sx={{ mr: 2 }}
            component={Link} noLinkStyle href="/"
          >
            <Camera/>
          </IconButton>
          <Typography color="white" variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Six by Four's
          </Typography>
          <ProductsModal/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}