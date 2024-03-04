'use client';
import { Stack, Typography, useMediaQuery } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { staticHeaderData } from './constant';

function StaticHeader() {
    const smallScreen = useMediaQuery('(max-width:600px)');
    return (
        <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={smallScreen ? 1 : 4} sx={{ backgroundColor: '#F5F5F7' }} p={1.5}>
            {staticHeaderData.map((text) => {
                return (
                    <Stack key={text} direction={'row'} alignItems={'center'} spacing={0.5} color="#6b6b6b">
                        <CheckIcon />{' '}
                        <Typography fontSize={'14px'} fontWeight={700}>
                            {text}
                        </Typography>
                    </Stack>
                );
            })}
        </Stack>
    );
}
export default StaticHeader;
