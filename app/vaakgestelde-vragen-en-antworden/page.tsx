import { Container, Stack, Typography } from '@mui/material';
import { constants } from '../component/customer/constants';
import { FaqCollapse } from '../component/customer/faqCollapse';

function Faq() {
    return (
        <div>
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Stack alignItems={'center'} spacing={3}>
                    <Typography variant="h1" fontSize="24px" fontWeight="bold">
                        {constants[0].title}
                    </Typography>
                    {constants[0].questions && <FaqCollapse questions={constants[0].questions} />}
                </Stack>
            </Container>
        </div>
    );
}

export default Faq;
