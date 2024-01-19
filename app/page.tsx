import { Container, Stack } from '@mui/material';
import Navbar from './component/navbar';
import ProductHero from './component/producthero/productHero';
import Footer from './component/footer/footer';
import StaticHeader from './component/header/staticHeader';
import MiddleDescriptionText from './component/middleDescriptionText';
import ProductsSlider from './component/slider/productsSlider';
import { MiddleHero } from './component/producthero/middleHero';
export default function Home() {
  return (
    <main>
      <StaticHeader />
      <Navbar />
      <Container maxWidth="xl">
        <Stack maxWidth={'90%'} m="auto">
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
