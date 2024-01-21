'use client';
import { Stack, Typography } from '@mui/material';
import Carousel from 'nuka-carousel';
const imgs = Array.from({ length: 15 }, (_, index) => `/${index + 1}.png`);
function ProductsSlider() {
  return (
    <Stack direction={'column'} alignItems={'center'} mt={2}>
      <Typography variant="h2" fontWeight={600}>
        PRODUCTEN
      </Typography>
      <Carousel
        autoplay
        style={{ marginTop: '2rem' }}
        zoomScale={0.5}
        wrapAround
      >
        {imgs.map((i) => {
          return (
            <img
              key={i}
              style={{
                objectFit: 'fill',
                width: '100%',
                borderRadius: '24px',
              }}
              src={i}
              alt="1"
            />
          );
        })}
      </Carousel>
    </Stack>
  );
}
export default ProductsSlider;
