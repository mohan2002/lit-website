import React from "react";
import Navbar from "../common/components/Navbar";
import { Box, Typography, Container, List, ListItem } from "@mui/material";

function About() {
  return (
    <Box sx={{ height: { lg: "100vh", sm: "100%" } }}>
      <Navbar />
      <Container>
        <Typography variant="h4" fontWeight="bold" mt={4} textAlign="center">
          About LIT
        </Typography>
        <Typography fontSize={14} mt={1} textAlign="center">
          LIT is a unique fashion gaming platform where users test, refine their
          taste, discover brands and much more!
        </Typography>
        <Typography
          variant="h6"
          fontWeight="bold"
          mt={6}
          mb={4}
          sx={{ textDecoration: "underline" }}
        >
          Welcome to LIT - Fashion Gaming Platform
        </Typography>
        <Typography variant="body1" mb={2} sx={{ textIndent: 56 }}>
          LIT is a unique fashion-gaming platform that challenges users to spot
          the more expensive option between two similar-looking products without
          revealing brand names. Correct answers earn points redeemable as
          coupons for various brands and e-commerce platforms. Beyond gaming,
          LIT offers a marketplace for discounted luxury and sustainable goods,
          image recognition for direct product links, and a social platform for
          fashion enthusiasts to connect, share thoughts, sell their new
          collection or art and follow relatable pages. Join LIT for a fun,
          rewarding, and community-driven fashion experience.
        </Typography>

        <Typography variant="body1" mb={2} sx={{ textIndent: 56 }}>
          Beyond gaming, LIT incorporates a marketplace for discounted purchases
          on luxury and sustainable goods, Image recognition icon for direct
          product links for any product you upload, a social platform for
          dedicated fashion enthusiasts, where they can sell their art, post
          their thoughts, connect with like minded people and follow pages they
          relate to.
        </Typography>

        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
          mt={6}
          sx={{ textDecoration: "underline" }}
        >
          How it Works:
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body1">
              Choose a Category: Select from various categories like fashion,
              gadgets, and more.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              Spot the Difference: Examine two products closely without labels
              to judge their quality.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              Make Your Choice: Pick the item you believe is more expensive.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              Discover Brands: Unveil the brands and discover the latest trends
              in the world of fashion.
            </Typography>
          </ListItem>
        </List>
      </Container>
    </Box>
  );
}

export default About;
