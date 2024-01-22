import { Box, Container, Grid, Typography } from "@mui/material";
import StaticHeader from "../../component/header/staticHeader";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer/footer";
import { products } from "../../lib/producthero/constants";
import ProductDetailImageCarousel from "../../component/productDetail/ProductDetailImageCarousel";
import ProductDetailCard from "../../component/productDetail/ProductDetailCard";

export const getData = async (slug: string) => {
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
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <ProductDetailImageCarousel images={product.images} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" mt={2}>
              WoodUpp{" "}
              <Typography
                variant="h4"
                component="span"
                sx={{ fontWeight: "bold" }}
              >
                {product.name}
              </Typography>
            </Typography>
            {/* We should retrieve this price from product data */}
            <Typography variant="h4" mt={1}>
              155 €
            </Typography>{" "}
            <Box my={2}>
              <Typography variant="subtitle2">Maat:</Typography>
              <Box>
                {products.map((product) => (
                  <ProductDetailCard key={product.id} product={product} />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
