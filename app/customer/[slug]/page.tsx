import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Footer from '../../component/footer/footer';
import Navbar from '../../component/navbar';
import StaticHeader from '../../component/header/staticHeader';
import { constants } from '../constants';
import { FaqCollapse } from '@/app/component/customer/faqCollapse';

export const getData = async (slug: string) => {
  const res = await constants.find((menuItem) => menuItem.id === slug);

  if (!res) {
    throw new Error("Couldn't find page");
  }

  return res;
};

async function Faq({ params }: { params: { slug: string } }) {
  const faqData = await getData(params.slug);

  return (
    <div>
      <StaticHeader />
      <Navbar />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {faqData && params.slug === 'vaakgestelde-vragen-en-antworden' && (
          <Stack alignItems={'center'} spacing={3}>
            <Typography variant="h1" fontSize="24px" fontWeight="bold">
              {faqData.title}
            </Typography>
            {faqData.questions && <FaqCollapse questions={faqData.questions} />}
          </Stack>
        )}
        {params.slug === 'montage' && <>Add Later Montage Page</>}
        {params.slug === 'contact' && <>Add Later contact Page</>}
      </Container>
      <Footer />
    </div>
  );
}

export default Faq;