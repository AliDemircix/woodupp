import { Box } from '@mui/material';
import React from 'react';

export function VideoBackground() {
  return (
    <Box mt={2}>
      <video
        src={require('../../public/heroVideo.mp4')} // Update with your video file name
        autoPlay
        loop
        muted
        width="100%"
        height="100%"
        style={{ borderRadius: '24px' }}
      />
    </Box>
  );
}
