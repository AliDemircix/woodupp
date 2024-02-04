import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

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
                            Maandag t/m donderdag: 8.30 – 16.30 uur
                        </Typography>
                        <Typography variant="body1" mb={2}>
                            Vrijdag: 8.30 – 13.30 uur
                        </Typography>
                        <Typography variant="subtitle1" fontWeight="bold">
                            Contact
                        </Typography>
                        <Typography variant="body1" mt={0.5}>
                            EDC Wall Panel Nederland
                        </Typography>
                        <Typography variant="body1">ABCStraat 00, 1111 AA te Amsterdam</Typography>
                        <Typography variant="body1" mt={0.5}>
                            Telefoon: 088 888 8888
                        </Typography>
                        <Typography variant="body1">
                            E-mail:{' '}
                            <Link href={`mailto:edcwallpanel@panel.nl`} target="_blank" style={{ textDecoration: 'underline' }}>
                                edcwallpanel@panel.nl
                            </Link>
                        </Typography>
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
