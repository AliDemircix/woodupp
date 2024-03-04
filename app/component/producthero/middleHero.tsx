import { Grid } from '@mui/material';
import { middleHeroData } from '@/app/lib/producthero/constants';
import { MiddleHeroImage } from './middleHero/MiddleHeroImage';
import { MiddleHeroList } from './middleHero/MiddleHeroList';

export function MiddleHero() {
    return (
        <>
            <Grid container my={2} overflow="hidden" borderRadius={8}>
                <Grid item xs={12} md={6} position="relative" height={360}>
                    <MiddleHeroImage img={middleHeroData[0].img} />
                </Grid>
                <Grid item xs={12} md={6} p={2} sx={{ backgroundColor: '#F5F5F7' }} height={360}>
                    <MiddleHeroList items={middleHeroData[0].content} title={middleHeroData[0].title} />
                </Grid>
            </Grid>
            <Grid container my={2} overflow="hidden" borderRadius={8}>
                <Grid item xs={12} md={6} p={2} sx={{ backgroundColor: '#F5F5F7' }} height={360}>
                    <MiddleHeroList items={middleHeroData[1].content} title={middleHeroData[1].title} />
                </Grid>
                <Grid item xs={12} md={6} position="relative" height={360}>
                    <MiddleHeroImage img={middleHeroData[1].img} />
                </Grid>
            </Grid>
        </>
    );
}
