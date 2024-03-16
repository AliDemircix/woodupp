import { Container, Grid } from '@mui/material';
import Image from 'next/image';

async function getPhotoName(slug: string): Promise<string> {
    const res = await slug;

    if (!res) {
        throw new Error("Couldn't find product");
    }

    return res;
}

async function PhotoPage({ params }: { params: { slug: string } }) {
    const photoName = await getPhotoName(params.slug);

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Grid container spacing={4} justifyContent={'center'} mt={2}>
                <Image src={`/${photoName}.jpg`} alt={photoName} width={600} height={500} />
            </Grid>
        </Container>
    );
}

export default PhotoPage;
