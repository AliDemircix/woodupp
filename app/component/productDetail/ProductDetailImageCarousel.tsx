"use client";

import React, { useState } from "react";
import { Box, Button, IconButton, Slide, Typography } from "@mui/material";
import Image from "next/image";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { theme } from "../../theme/theme";

interface ProductDetailImageCarouselProps {
  images: string[];
}

const ProductDetailImageCarousel: React.FC<ProductDetailImageCarouselProps> = ({
  images,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("right");

  const handleBack = () => {
    setDirection("left");
    setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };

  const handleForward = () => {
    setDirection("right");
    setCurrentSlide((prevSlide) => Math.min(prevSlide + 1, images.length - 1));
  };

  return (
    <Box position="relative" overflow="hidden" height={400} borderRadius={4}>
      {images.map((image, index) => (
        <Slide
          key={index}
          in={currentSlide === index}
          direction={direction}
          appear={false}
          timeout={900}
        >
          <Image src={image} alt={`Slide ${index + 1}`} fill objectFit="fill" />
        </Slide>
      ))}

      <Box
        mt={2}
        textAlign="center"
        position="absolute"
        bottom="10px"
        width="100%"
      >
        <Typography
          variant="body2"
          sx={{
            display: "inline-block",
            padding: theme.spacing(0.5, 1),
            borderRadius: 16,
            backgroundColor: "white",
          }}
        >
          {currentSlide + 1} / {images.length}
        </Typography>
      </Box>
      {currentSlide !== 0 && (
        <IconButton
          onClick={handleBack}
          aria-label="back"
          sx={{
            position: "absolute",
            top: "50%",
            left: 10,
            backgroundColor: "white",
            opacity: 0.9,

            "&:hover": {
              backgroundColor: "white",
              opacity: 0.9,
            },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
      )}

      {currentSlide !== images.length - 1 && (
        <IconButton
          onClick={handleForward}
          aria-label="back"
          sx={{
            position: "absolute",
            top: "50%",
            right: 10,
            backgroundColor: "white",
            opacity: 0.9,

            "&:hover": {
              backgroundColor: "white",
              opacity: 0.9,
            },
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default ProductDetailImageCarousel;
