"use client";
import { Stack, useMediaQuery } from "@mui/material";
import ProductHero from "./component/producthero/productHero";
import MiddleDescriptionText from "./component/middleDescriptionText";
import ProductsSlider from "./component/slider/productsSlider";
import { MiddleHero } from "./component/producthero/middleHero";
import { VideoBackground } from "./component/videoBackground";
export default function Home() {
  const smallScreen = useMediaQuery("(max-width:600px)");
  return (
    <main>
      <Stack maxWidth={smallScreen ? "100%" : "90%"} m="auto">
        <VideoBackground />
        <ProductHero />
        <MiddleDescriptionText />
        <ProductsSlider />
        <MiddleHero />
      </Stack>
    </main>
  );
}
