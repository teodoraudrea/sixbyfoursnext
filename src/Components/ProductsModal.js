import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, IconButton, } from '@mui/material';
import { ShoppingBag } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'white',
  color: '#251b24',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'af4413fdf4msh2aae4ffc5484f38p10f532jsndf809ae7083a',
		'X-RapidAPI-Host': 'amazon-merchant-data.p.rapidapi.com'
	}
};

export default function ProductsModal() {
  const [open, setOpen] = React.useState(false);
  const [products, setProducts] = React.useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    fetch('https://amazon-merchant-data.p.rapidapi.com/search-products?term=35mm%20film&country=uk', options)
      .then(response => response.json())
      .then(data => setProducts(data.content.offers))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <IconButton
        size="large"
        color="secondary"
        aria-label="modal"
        sx={{ mr: 2 }}
        onClick={handleOpen}
      >
        <ShoppingBag />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            35mm film selection:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 6 }}>
          {products.slice(0, 3).map((product) => (
              <div key={product.name}>
                <img src={product.image} alt={product.name} style={{ width: '50px' }} />
                <a href={product.link} style={{ textDecoration: 'none' , color: '#251b24'}}>
                  <h4>{product.name}</h4>
                </a>
                <p>£{product.price}</p>
                <Divider/>
              </div>
            ))}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
