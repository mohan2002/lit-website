import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Card,
  CardMedia,
} from "@mui/material";
import Navbar from "../common/components/Navbar";
import { useNavigate } from "react-router-dom";
import BagImage from "../common/assets/bag.jpg";
import ChainImage from "../common/assets/chain.avif";
import ShoeImage from "../common/assets/shoe.jpg";
import WatchImage from "../common/assets/watch.jpg";
import ClothesImage from "../common/assets/clothes.jpg";
import GlassImage from "../common/assets/glass.avif";
import RingImage from "../common/assets/ring.jpg";

const Marketplace = () => {
  const navigate = useNavigate();

  const categories = [
    { id: 1, title: "Bags", image: BagImage, link: "/bags" },
    { id: 2, title: "Chain", image: ChainImage, link: "/chain" },
    { id: 3, title: "Shoes", image: ShoeImage, link: "/shoes" },
    { id: 4, title: "Watches", image: WatchImage, link: "/watches" },
    { id: 5, title: "Clothes", image: ClothesImage, link: "/clothes" },
    { id: 6, title: "Glass", image: GlassImage, link: "/glass" },
    { id: 7, title: "Ring", image: RingImage, link: "/ring" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      <Box
        sx={{
          my: 10,
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            mb={5}
            variant="h5"
            fontWeight={700}
            sx={{ textDecoration: "underline" }}
          >
            Explore Our Marketplace
          </Typography>
          <Grid container spacing={4}>
            {categories.map((category) => (
              <Grid
                item
                key={category.id}
                xs={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Card
                  elevation={3}
                  sx={{
                    height: 250,
                    width: 250,
                    backgroundColor: "#f5f5f536",
                    borderRadius: 2,
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                  onClick={() => navigate(category.link)}
                >
                  <CardMedia
                    image={category.image}
                    component="img"
                    alt={`${category.title} Image`}
                    height="100%"
                    sx={{ objectFit: "cover", borderRadius: 2 }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Marketplace;
