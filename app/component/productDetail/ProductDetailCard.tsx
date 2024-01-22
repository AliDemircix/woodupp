"use client";
import React from "react";
import { Product } from "../../lib/producthero/constants";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ProductDetailCardProps {
  product: Product;
}

const ProductDetailCard: React.FC<ProductDetailCardProps> = ({ product }) => {
  const pathname = usePathname();
  const isSelected = pathname.includes(product.code);

  return (
    <Link href={`/product/${product.code}`}>
      <Card
        sx={{
          display: "flex",
          border: 2,
          borderColor: isSelected ? "black" : "lightgrey",
          boxShadow: "none",
          my: 1,
          p: 1,
          maxWidth: 450,
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 73, height: 73 }}
          image={product.images[0]} // Need to grab it from product's main(showcase) image
          alt={product.name}
        />

        <Box
          sx={{
            p: 0,
            pl: 1,
          }}
        >
          <Typography variant="h6">{product.name}</Typography>
          {/*   We should get width/height and depth values from product data  */}
          <Typography variant="body2">
            Elk paneel heeft een afmeting van 300 x 60 x 2.2 cm (1.8 m2)
          </Typography>
          {/* Get this price from product data */}
          <Typography variant="body2">
            Vanaf:{" "}
            <Typography variant="body1" component="span">
              110 €
            </Typography>{" "}
          </Typography>
        </Box>
      </Card>
    </Link>
  );
};

export default ProductDetailCard;
