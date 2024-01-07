'use client';

import { IconButton, Stack, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  thumbnailImages: string[];
};
const products: Product[] = [
  {
    id: 1,
    name: 'Akupanel | 240',
    description: '',
    price: 130,
    images: [
      '/akupanel-copper-oxide-showcase.jpg',
      '/akupanel-grey-oxide-showcase.jpg',
      '/akupanel-oxide-blue-showcase.jpg',
      '/akupanel-white-oxide-showcase.jpg',
      '/akupanel-charcoal-showcase.jpg',
      '/akupanel-snow-showcase.jpg',
    ],
    thumbnailImages: [
      '/akupanel-copper-oxide-100x100.jpg.webp',
      '/akupanel-grey-oxide-100x100.jpg.webp',
      '/akupanel-oxide-blue-100x100.jpg.webp',
      '/akupanel-white-oxide-100x100.jpg.webp',
      '/akupanel-charcoal-100x100.jpg.webp',
      '/akupanel-snow-100x100.jpg.webp',
    ],
  },
  {
    id: 2,
    name: 'Akupanel | 300 Klassiek Eiken',
    description: '',
    price: 150,
    images: [
      '/akupanel-60-classic-oak-vertical-2048x2048.png.webp',
      '/akupanel-60-classic-oak-vertical-1536x1536.png',
      '/Akupanel60-natural-horisontal.png',
      '/akupanel-60-walnut-vertical-1536x1536.png',
      '/Akupanel60-brown-horisontal.png',
      '/Akupanel60-grey-horisontal.png',
    ],
    thumbnailImages: [
      '/classic-oak-black-felt-front-100x100.jpg',
      '/classic-oak-black-felt-front-100x100.jpg',
      '/rustic-natural-oak-front-100x100.jpg',
      '/walnut-front-100x100.jpg',
      '/rustic-brown-front-100x100.jpg',
      '/rustic-grey-oak-front-100x100.jpg',
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
  productDetailContainer: {
    backdropFilter: 'blur(30px)',
    backgroundColor: 'rgba(0,0,0,.2)',
    borderRadius: '24px',
    padding: '10px',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    right: '10px',
    bottom: ' 10px',
  },
}));

export default function ProductHero() {
  const [selectedImage, setSelectedImage] = useState(products[0].images[0]);
  const [selectedProductId, setSelectedProductId] = useState(products[0].id);
  const [selectedSmallImageId, setSelectedSmallImageId] = useState(0);
  const [selectedGroup, setSelectedGroup] = useState(0);
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
              key={product.id}
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
                setSelectedSmallImageId(0);
              }}
            >
              {product.name}
            </Stack>
          );
        })}
      </Stack>
      <Stack className={classes.smallImagesContainer}>
        {selectedProductDetails &&
          selectedProductDetails.thumbnailImages.map((image, i) => {
            if (
              (selectedGroup === 0 && i < 3) ||
              (selectedGroup === 1 && i > 2 && i < 6)
              // ||(selectedGroup === 2 && i > 5 && i < 9)
            ) {
              return (
                <Image
                  key={image}
                  src={image}
                  alt={image}
                  width={60}
                  height={60}
                  style={{
                    borderRadius: '50%',
                    cursor: 'pointer',
                    border:
                      selectedSmallImageId === i ? 'solid 2px #565656' : 'none',
                    marginTop: '10px',
                  }}
                  onClick={() => {
                    setSelectedSmallImageId(i);
                    setSelectedImage(selectedProductDetails.images[i]);
                  }}
                />
              );
            }
          })}

        <IconButton
          onClick={() =>
            setSelectedGroup(selectedGroup < 1 ? selectedGroup + 1 : 0)
          }
        >
          <ArrowDropDownIcon />
        </IconButton>
      </Stack>
      <Stack className={classes.productDetailContainer}>
        {selectedProductDetails && (
          <Image
            key={selectedProductDetails.thumbnailImages[selectedSmallImageId]}
            src={selectedProductDetails.thumbnailImages[selectedSmallImageId]}
            alt={selectedProductDetails.thumbnailImages[selectedSmallImageId]}
            width={70}
            height={70}
            style={{
              borderRadius: '18px',
              cursor: 'pointer',
            }}
          />
        )}
        <Stack>
          <Typography>{selectedProductDetails?.name}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
