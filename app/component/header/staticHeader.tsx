'use client';
import { Stack, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { staticHeaderData } from './constant';
import { useEffect, useState } from 'react';

function StaticHeader() {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={'center'}
      spacing={4}
      sx={{ backgroundColor: '#F5F5F7' }}
      p={1}
    >
      {staticHeaderData.map((text) => {
        return (
          <Stack
            key={text}
            direction={'row'}
            alignItems={'center'}
            spacing={0.5}
            color="#6b6b6b"
          >
            <CheckIcon /> <Typography fontSize={'13px'}>{text}</Typography>
          </Stack>
        );
      })}
    </Stack>
  );
}
export default StaticHeader;
