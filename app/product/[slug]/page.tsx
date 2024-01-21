import { Container } from "@mui/material";
import StaticHeader from "../../component/header/staticHeader";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer/footer";
import { products } from "../../lib/producthero/constants";

const getData = async (slug: string) => {
  const res = await products.find((product) => product.code === slug);

  if (!res) {
    throw new Error("Couldn't find product");
  }

  return res;
};

async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = await getData(params.slug);
  return (
    <div>
      <StaticHeader />
      <Navbar />
      <Container maxWidth="xl">{product.name}</Container>
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
