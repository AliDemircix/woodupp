'use client';
import React from 'react';
import { Grid, IconButton, Stack, Typography, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { products } from '../lib/producthero/constants';
import Image from 'next/image';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SendMailDialog from './SendMailDialog';

const Index = () => {
    const smallScreen = useMediaQuery('(max-width:600px)');
    const [selectedCategory, setSelectedCategory] = React.useState(products[0].id);
    const image = '/kluerstalen.jpg.webp';
    const initialState = products.reduce<{ [key: string]: boolean }>((acc, category) => {
        category.thumbnailImages.forEach((product) => {
            acc[product.id] = false;
        });
        return acc;
    }, {});
    const [selectedProducts, setSelectedProducts] = React.useState(initialState);
    const selectedProductCount = Object.values(selectedProducts).filter((p) => p).length;
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (value: string) => {
        setOpen(false);
    };
    const selectedProductNames = products.map((product) => {
        return product.thumbnailImages.filter((p) => selectedProducts[p.id]).map((p) => p.name);
    });

    return (
        <Grid container justifyContent={'center'} gap={5} mt={5}>
            <h1>Kleurstalen</h1>
            <h3>
                Met onze kleurstalen kun je de kleur en textuur van de panelen zelf ervaren voordat je een definitieve beslissing neemt. Bestel vandaag nog jouw
                kleurstalen en ontdek jouw ideale match!
            </h3>
            <Grid container justifyContent={'center'}>
                <Stack
                    sx={{
                        backgroundColor: '#f5f5f7',
                        borderRadius: '100px',
                        boxSizing: 'border-box',
                        padding: smallScreen ? '5px' : '8px 12px',
                        width: smallScreen ? '330px' : '420px',
                    }}
                    direction={'row'}
                >
                    {products.map((product) => {
                        return (
                            <Stack
                                key={product.id}
                                borderRadius="100px"
                                p={smallScreen ? 1 : 2}
                                sx={{
                                    backgroundColor: selectedCategory === product.id ? 'white' : '',
                                    cursor: 'pointer',
                                    transition: 'all .9s',
                                }}
                                onClick={() => {
                                    const selected = products.find((p) => p.id === product.id);
                                    setSelectedCategory(product.id);
                                }}
                            >
                                <Typography fontSize={smallScreen ? '13px' : '16px'}>{product.name}</Typography>
                            </Stack>
                        );
                    })}
                </Stack>
            </Grid>
            <Grid container justifyContent={'center'}>
                <Grid container xs={10} justifyContent="center" alignItems="center">
                    <Grid container direction={'column'} alignItems="center" gap={10} xs={12} md={6} pb={2} sx={{ backgroundColor: '#f7f7f7', height: 530 }}>
                        <Typography variant={'h5'} mt={6}>
                            Verzoek kleurstalen
                        </Typography>
                        <Grid container justifyContent={'center'} alignItems={'center'} direction={'column'} style={{ flexGrow: 1 }}>
                            {selectedProductCount > 0 ? (
                                products.map((product) => {
                                    return (
                                        <Grid container justifyContent={'center'} alignItems={'center'} direction={'row'} style={{ flexWrap: 'nowrap' }}>
                                            {product.thumbnailImages.map((p) => {
                                                if (selectedProducts[p.id]) {
                                                    return (
                                                        <Grid item>
                                                            <Image src={p.src} alt={`image`} width={100} height={100} objectFit="fill" />
                                                        </Grid>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </Grid>
                                    );
                                })
                            ) : (
                                <>
                                    <Image src={image} alt={`image`} width={100} height={100} objectFit="fill" />
                                    <h3>Klik op de stalen aan de rechterkant om te kiezen</h3>
                                </>
                            )}
                        </Grid>
                        {selectedProductCount > 0 && (
                            <>
                                <Button
                                    variant={'contained'}
                                    sx={{
                                        textTransform: 'none',
                                        padding: '12px 16px',
                                        borderRadius: 10,
                                        background: 'darkgray',
                                        '&:hover': {
                                            backgroundColor: '#524e4e',
                                        },
                                    }}
                                    onClick={handleClickOpen}
                                >
                                    <Typography variant="h5" fontWeight={'bold'} fontSize={14}>
                                        Verzoek kleurstalen
                                    </Typography>
                                </Button>
                                <SendMailDialog open={open} onClose={handleClose} selectedProductNames={selectedProductNames.flat()} />
                            </>
                        )}
                    </Grid>
                    <Grid item alignItems={'space-between'} xs={12} md={6} pl={3} sx={{ backgroundColor: '#white' }}>
                        <Grid container justifyContent={'space-between'} mb={2}>
                            <Typography variant="h5">Kleurstalen</Typography>
                            <Typography variant="h5">{selectedProductCount} geselecteerde kleuren</Typography>
                        </Grid>

                        <Grid container direction="column" gap={1} justifyContent={'end'}>
                            {products[selectedCategory - 1]?.thumbnailImages.map((product) => (
                                <Stack
                                    sx={{
                                        backdropFilter: 'blur(30px)',
                                        borderRadius: '15px',
                                        padding: '2px',
                                        backgroundColor: '#f5f5f7',
                                        '&:hover': {
                                            cursor: 'pointer',
                                        },
                                    }}
                                    direction={'row'}
                                    alignItems={'center'}
                                    onClick={() => setSelectedProducts({ ...selectedProducts, [product.id]: !selectedProducts[product.id] })}
                                >
                                    <Grid container alignItems={'center'} justifyContent={'space-between'} style={{ display: 'flex' }}>
                                        <Grid item container direction={'row'} alignItems={'center'} style={{ display: 'flex', flex: 1 }}>
                                            <Image
                                                key={product?.id}
                                                src={product?.src}
                                                alt={product?.id}
                                                width={70}
                                                height={70}
                                                style={{
                                                    borderRadius: '18px',
                                                    cursor: 'pointer',
                                                }}
                                            />
                                            <Typography ml={2}>{product.name}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <IconButton>
                                                {selectedProducts[product.id] ? (
                                                    <CheckCircleOutlineIcon
                                                        fontSize={'large'}
                                                        sx={{ background: '#0d304f', color: 'white', fontWeight: 400, borderRadius: '50%' }}
                                                    />
                                                ) : (
                                                    <AddCircleOutlineIcon fontSize={'large'} />
                                                )}
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Stack>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Index;
