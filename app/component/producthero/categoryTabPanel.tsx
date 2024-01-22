import { Product, products } from '@/app/lib/producthero/constants';
import { Stack, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

type Props = {
  selectedProductId: number;
  setSelectedProductId: (id: number) => void;
  setSelectedProductDetails: (product: Product) => void;
  setSelectedImage: (image: string) => void;
  setSelectedSmallImageId: (id: string) => void;
};

export default function CategoryTabPanel({
  selectedProductId,
  setSelectedProductId,
  setSelectedProductDetails,
  setSelectedImage,
  setSelectedSmallImageId,
}: Props) {
  const smallScreen = useMediaQuery('(max-width:600px)');
  return (
    <Stack
      sx={{
        backgroundColor: 'hsla(0,0%,100%,.4)',
        borderRadius: '100px',
        boxSizing: 'border-box',
        padding: smallScreen ? '5px' : '15px 20px',
        position: 'absolute',
        top: '50px',
        left: '20px',
        right: '20px',
        width: smallScreen ? '330px' : '420px',
      }}
      direction={'row'}
    >
      {products.map((product) => {
        return (
          <Stack
            key={product.id}
            borderRadius="100px"
            p={smallScreen ? 1 : 2}
            sx={{
              backgroundColor: selectedProductId === product.id ? 'white' : '',
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
            <Typography fontSize={smallScreen ? '13px' : '16px'}>
              {product.name}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
}
