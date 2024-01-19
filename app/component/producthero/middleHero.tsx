'use client';
import { middleHeroData } from '@/app/lib/producthero/constants';
import { Stack } from '@mui/material';
import { MiddleHeroItem, MiddleHeroItemType } from './middleHeroItem';

export function MiddleHero() {
  return (
    <Stack>
      {middleHeroData.map((md: MiddleHeroItemType) => {
        return <MiddleHeroItem {...md} />;
      })}
    </Stack>
  );
}
