'use client';

import { Stack } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import ProductCard from './productCard';
import { Product, products } from '../../lib/producthero/constants';
import ProductSmallImgCard from './productSmallImgCard';

export default function ProductHero() {
  const [selectedImage, setSelectedImage] = useState(products[0].images[0]);
  const [selectedProductId, setSelectedProductId] = useState(products[0].id);
  const [selectedSmallImageId, setSelectedSmallImageId] = useState('a1');
  const [selectedGroup, setSelectedGroup] = useState(0);

  const [selectedProductDetails, setSelectedProductDetails] = useState<Product>(
    products[0],
  );
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
      <Stack
        sx={{
          backgroundColor: 'hsla(0,0%,100%,.4)',
          borderRadius: '100px',
          boxSizing: 'border-box',
          display: 'inline-flex',
          padding: '15px 20px',
          position: 'absolute',
          top: '50px',
          left: '20px',
        }}
        direction={'row'}
      >
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
                const selected = products.find((p) => p.id === product.id);
                setSelectedProductId(product.id);
                selected && setSelectedProductDetails(selected);
                setSelectedImage(product.images[0]);
                selected &&
                  setSelectedSmallImageId(selected.thumbnailImages[0].id);
              }}
            >
              {product.name}
            </Stack>
          );
        })}
      </Stack>
      <ProductSmallImgCard
        selectedProductDetails={selectedProductDetails}
        selectedGroup={selectedGroup}
        selectedSmallImageId={selectedSmallImageId}
        setSelectedSmallImageId={setSelectedSmallImageId}
        setSelectedImage={setSelectedImage}
        setSelectedGroup={setSelectedGroup}
      />
      <ProductCard
        selectedProductDetails={selectedProductDetails}
        selectedSmallImageId={selectedSmallImageId}
      />
    </Stack>
  );
}
