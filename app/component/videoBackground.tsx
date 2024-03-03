import { Box, Typography } from '@mui/material';
import React from 'react';

export function VideoBackground() {
    return (
        <Box
            my={3}
            position="relative"
            sx={{
                height: 'calc(100vh - 144px)',
            }}
        >
            <video
                src={require('../../public/heroVideo.mp4')} // Update with your video file name
                autoPlay
                loop
                muted
                style={{ width: '100%', maxWidth: '100vw', height: '100%', borderRadius: '24px', objectFit: 'fill' }}
            />
            <Box position="absolute" sx={{ top: '75%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', width: '100%' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Elegantie voor een goedkope prijs
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                    Modern ontwerp en een esthetisch tintje
                </Typography>
            </Box>
        </Box>
    );
}
