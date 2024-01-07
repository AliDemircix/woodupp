'use client';

import { Stack } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import { useState } from 'react';
export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
};
const products: Product[] = [
  {
    id: 1,
    name: 'Akupanel | 240',
    description: '',
    price: 130,
    images: [
      '/akupanel-white-oxide.jpg',
      '/akupanel-grey-oxide.jpg',
      '/akupanel-oxide-blue-showcase.jpg',
    ],
  },
  {
    id: 2,
    name: 'Akupanel | 300 Klassiek Eiken',
    description: '',
    price: 150,
    images: [
      '/akupanel-grey-oxide.jpg',
      '/akupanel-white-oxide.jpg',
      '/akupanel-oxide-blue-showcase.jpg',
    ],
  },
];
const useStyles = makeStyles((theme: Theme) => ({
  productHeroTab: {
    backgroundColor: 'hsla(0,0%,100%,.4)',
    borderRadius: '100px',
    boxSizing: 'border-box',
    display: 'inline-flex',
    padding: '15px 20px',
    position: 'absolute',
    top: '50px',
    left: '20px',
  },
  smallImagesContainer: {
    backdropFilter: 'blur(10px)',
    backgroundColor: 'hsla(0,0%,100%,.2)',
    borderRadius: '24px',
    padding: '10px',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    right: '50px',
    top: ' 50px',
  },
}));

export default function ProductHero() {
  const [selectedImage, setSelectedImage] = useState(products[0].images[0]);
  const [selectedProductId, setSelectedProductId] = useState(products[0].id);
  const selectedProductDetails = products.find(
    (product) => product.id === selectedProductId,
  );
  const classes = useStyles();
  return (
    <Stack
      sx={{
        height: '600px',
        position: 'relative',
        width: '90%',
        margin: 'auto',
      }}
    >
      <Image
        alt={selectedImage}
        src={selectedImage}
        fill
        style={{
          objectFit: 'cover',
          margin: '2rem 0 2rem 0',
          borderRadius: '24px',
        }}
      />
      <Stack className={classes.productHeroTab} direction={'row'}>
        {products.map((product) => {
          return (
            <Stack
              borderRadius="100px"
              p={2}
              sx={{
                backgroundColor:
                  selectedProductId === product.id ? 'white' : '',
                cursor: 'pointer',
                transition: 'all .9s',
              }}
              onClick={() => {
                setSelectedProductId(product.id);
                setSelectedImage(product.images[0]);
              }}
            >
              {product.name}
            </Stack>
          );
        })}
      </Stack>
      <Stack className={classes.smallImagesContainer}>
        {selectedProductDetails &&
          selectedProductDetails.images.map((image, i) => {
            return (
              <Image
                src={image}
                alt={image}
                width={60}
                height={60}
                style={{ borderRadius: '50%', cursor: 'pointer' }}
                onClick={() =>
                  setSelectedImage(selectedProductDetails.images[i])
                }
              />
            );
          })}
      </Stack>
    </Stack>
  );
}
