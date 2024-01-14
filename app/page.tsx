import { Container } from "@mui/material";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar";
import ProductHero from "./component/producthero/productHero";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Container>
        <ProductHero />
        <Footer />
      </Container>
    </main>
  );
}
