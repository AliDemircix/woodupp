'use client';
import { Stack, Theme, Typography } from '@mui/material';
import Image from 'next/image';
import { Product } from '../../lib/producthero/constants';
type Props = {
  selectedProductDetails?: Product;
  selectedSmallImageId: string;
};
export default function ProductCard({
  selectedProductDetails,
  selectedSmallImageId,
}: Props) {
  const selectedProductImage = selectedProductDetails?.thumbnailImages.find(
    (i) => i.id === selectedSmallImageId,
  );
  return (
    <Stack
      sx={{
        backdropFilter: 'blur(30px)',
        backgroundColor: 'rgba(0,0,0,.2)',
        borderRadius: '24px',
        padding: '10px',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        right: '10px',
        bottom: ' 10px',
      }}
    >
      {selectedProductDetails && selectedProductImage && (
        <Image
          key={selectedProductImage?.id}
          src={selectedProductImage?.src}
          alt={selectedProductImage?.id}
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
  );
}
