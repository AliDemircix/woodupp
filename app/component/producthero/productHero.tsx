'use client';

import { Stack } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import ProductCard from './productCard';
import { Product, products } from '../../lib/producthero/constants';
import ProductSmallImgCard from './productSmallImgCard';
import CategoryTabPanel from './categoryTabPanel';

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
      <CategoryTabPanel
        selectedProductId={selectedProductId}
        setSelectedProductId={setSelectedProductId}
        setSelectedProductDetails={setSelectedProductDetails}
        setSelectedImage={setSelectedImage}
        setSelectedSmallImageId={setSelectedSmallImageId}
      />
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
