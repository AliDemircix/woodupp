'use client';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';

interface ProductDetailColorCardProps {
    productColor: { name: string; mainColorImage: string };
}

function ProductDetailColorCard({ productColor }: ProductDetailColorCardProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const colorFromQuery = searchParams.get('color');

    const isSelected = colorFromQuery === productColor.name;
    return (
        <Link href={`${pathname}?color=${productColor.name}`}>
            <Grid container justifyContent={'center'}>
                <Typography fontWeight={700}>{productColor.name}</Typography>
            </Grid>
            <Box
                sx={{
                    border: 2,
                    borderColor: isSelected ? 'black' : 'lightgrey',
                    borderRadius: 1,
                    boxShadow: 'none',
                    width: 75,
                    height: 75,
                    position: 'relative',
                }}
            >
                <Image src={productColor.mainColorImage} alt={`Product Color ${productColor.name}`} fill objectFit="fill" />
            </Box>
        </Link>
    );
}

export default ProductDetailColorCard;
