import { Box, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';
import React from 'react';
import { address, email, weekendHours, weeklyHours, whatsapp } from '../lib/contact-info/constants';

function ContactPage() {
    return (
        <div>
            <Box textAlign="center" pt={5} pb="3">
                <Typography variant="h3" fontWeight="bold">
                    Hulp Nodig?
                </Typography>
                <Typography variant="body1" my={1}>
                    Neem contact met ons op
                </Typography>
            </Box>
            <Box py={4}>
                <Card
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat( auto-fit, minmax(300px, 1fr) )',
                        boxShadow: 'none',
                        backgroundColor: '#F5F5F7',
                        borderRadius: 6,
                    }}
                >
                    <CardContent sx={{ py: 6, px: 4 }}>
                        <Typography variant="h4" fontWeight="bold">
                            Hoe kunnen we helpen?
                        </Typography>
                        <Typography variant="body1" mt={0.5} mb={2}>
                            We zijn er om te helpen! Of je nu vragen, zorgen of feedback hebt, we zijn slechts een bericht of telefoontje verwijderd.
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" fontWeight="bold">
                            Openingstijden
                        </Typography>
                        <Typography variant="body1" mt={0.5}>
                            {weeklyHours}
                        </Typography>
                        <Typography variant="body1" mt={0.5}>
                            {weekendHours}
                        </Typography>
                        <Typography variant="subtitle1" fontWeight="bold" mt={2}>
                            Contact
                        </Typography>
                        <Typography variant="body1" mt={0.5}>
                            EDC Wall Panel Nederland
                        </Typography>
                        <Typography variant="body1">{address}</Typography>
                        <Typography variant="body1" mt={0.5}>
                            Telefoon: {whatsapp}
                        </Typography>
                        <Typography variant="body1">
                            E-mail:{' '}
                            <Link href={`mailto:edcwallpanel@panel.nl`} target="_blank" style={{ textDecoration: 'underline' }}>
                                {email}
                            </Link>
                        </Typography>
                        <Stack direction="row" alignItems="center" mt={3}>
                            <Link href={'https://wa.me/' + whatsapp} target="_blank">
                                <img src="/wp.png" alt="whatsapp contact" width="300px" />
                            </Link>
                        </Stack>
                    </CardContent>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image="/9.jpg"
                        sx={{
                            borderRadius: 6,
                            width: '100%',
                            height: '100%',
                            objectFit: 'fill',
                        }}
                    />
                </Card>
            </Box>
        </div>
    );
}

export default ContactPage;
