'use client';
import { Container, Stack, useMediaQuery } from '@mui/material';
import Navbar from './component/navbar';
import ProductHero from './component/producthero/productHero';
import Footer from './component/footer/footer';
import StaticHeader from './component/header/staticHeader';
import MiddleDescriptionText from './component/middleDescriptionText';
import ProductsSlider from './component/slider/productsSlider';
import { MiddleHero } from './component/producthero/middleHero';
import { VideoBackground } from './component/videoBackground';
export default function Home() {
  const smallScreen = useMediaQuery('(max-width:600px)');
  return (
    <main>
      <StaticHeader />
      <Navbar />
      <Container maxWidth="xl">
        <Stack maxWidth={smallScreen ? '100%' : '90%'} m="auto">
          <VideoBackground />
          <ProductHero />
          <MiddleDescriptionText />
          <ProductsSlider />
          <MiddleHero />
        </Stack>
      </Container>
      <Footer />
    </main>
  );
}
