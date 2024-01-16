import { Container } from '@mui/material';
import Navbar from './component/navbar';
import ProductHero from './component/producthero/productHero';
import Footer from './component/footer/footer';
import StaticHeader from './component/header/staticHeader';
import MiddleDescriptionText from './component/middleDescriptionText';
export default function Home() {
  return (
    <main>
      <StaticHeader />
      <Navbar />
      <Container>
        <ProductHero />
        <MiddleDescriptionText />
      </Container>
      <Footer />
    </main>
  );
}
