'use client';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { Product } from '../../lib/producthero/constants';
import useMediaQuery from '@mui/material/useMediaQuery';

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
  const smallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Stack
      sx={{
        backdropFilter: 'blur(30px)',
        backgroundColor: 'rgba(0,0,0,.2)',
        borderRadius: '24px',
        padding: '10px',
        position: 'absolute',
        display: 'flex',
        right: '50px',
        marginLeft: smallScreen ? '25px' : 'auto',
        bottom: ' 10px',
      }}
      direction={'row'}
      alignItems={'center'}
    >
      {selectedProductDetails && selectedProductImage && (
        <>
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

          <Stack ml={5}>
            <Typography color={'white'}>{selectedProductImage.name}</Typography>
          </Stack>
        </>
      )}
    </Stack>
  );
}
