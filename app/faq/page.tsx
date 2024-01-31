import { Container, Stack, Typography } from '@mui/material';

import { constants } from './constants';
import { FaqCollapse } from '@/app/component/customer/faqCollapse';

async function Faq() {
    return (
        <div>
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Stack alignItems={'center'} spacing={3}>
                    <Typography variant="h1" fontSize="24px" fontWeight="bold">
                        {constants.title}
                    </Typography>
                    {constants.questions && <FaqCollapse questions={constants.questions} />}
                </Stack>
            </Container>
        </div>
    );
}

export default Faq;
