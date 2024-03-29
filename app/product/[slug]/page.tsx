import { Box, Container, Grid, Typography } from '@mui/material';
import { Product, products } from '../../lib/producthero/constants';
import ProductDetailImageCarousel from '../../component/productDetail/ProductDetailImageCarousel';
import ProductDetailCard from '../../component/productDetail/ProductDetailCard';
import ProductDetailColorCard from '../../component/productDetail/ProductDetailColorCard';
import ProductInfoSection from '../../component/productDetail/ProductInfoSection';

async function getData(slug: string): Promise<Product> {
    const res = await products.find((product) => product.code === slug);

    if (!res) {
        throw new Error("Couldn't find product");
    }

    return res;
}

async function ProductDetailPage({ params }: { params: { slug: string } }) {
    const product: Product = await getData(params.slug);

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <ProductDetailImageCarousel productColors={product.colors} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4" mt={2}>
                        WoodUpp{' '}
                        <Typography variant="h4" component="span" sx={{ fontWeight: 'bold' }}>
                            {product.name}
                        </Typography>
                    </Typography>
                    <Box my={2}>
                        <Typography variant="subtitle2">Maat:</Typography>
                        <Box>
                            {products.map((product) => (
                                <ProductDetailCard key={product.id} product={product} />
                            ))}
                        </Box>
                    </Box>
                    <Box my={2}>
                        <Typography variant="subtitle2">Kleuren:</Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, my: 1 }}>
                            {product.colors.map((colorItem) => (
                                <ProductDetailColorCard productColor={colorItem} key={colorItem.name} />
                            ))}
                        </Box>
                    </Box>
                    <ProductInfoSection description={product.description} />
                </Grid>
            </Grid>
        </Container>
    );
}

export default ProductDetailPage;
