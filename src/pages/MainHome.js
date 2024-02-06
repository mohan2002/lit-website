import React from "react";
import Navbar from "../common/components/Navbar";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ParticleComponent from "../common/components/ParticleComponent";
import Play from "../common/assets/play.png";
import Socials from "../common/assets/socialspace.png";
import Ir from "../common/assets/ir.png";
import Avatar from "../common/assets/avatar.png";
import Lit from "../common/assets/litstore.png";
import { useNavigate } from "react-router-dom";
import { useDb } from "../common/context/DbContext";
import { ScaleLoader } from "react-spinners";

function MainHome() {
  const navigate = useNavigate();
  const { loading } = useDb();

  const imageLinks = [
    {
      id: 2,
      image: Socials,
      link: "/",
      title: "Social Space",
      quote: "Fashion is a trend. Style lives within a person.",
    },
    {
      id: 3,
      image: Ir,
      link: "/",
      title: "IR ICON",
      quote: "Dress like you’re already famous.",
    },
    {
      id: 5,
      image: Avatar,
      link: "/",
      title: "Avatar store",
      quote: "Give a girl the right shoes, and she can conquer the world.",
    },
    {
      id: 6,
      image: Lit,
      link: "/marketplace",
      title: "Lit Store",
      quote: "Discover unique treasures in the marketplace.",
    },
  ];

  if (loading) {
    return (
      <Box
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <ScaleLoader color="white" width={6} height={42} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <ParticleComponent />

      <Box
        sx={{
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
          <Box
            onClick={() => {
              navigate("/home");
            }}
            sx={{ marginTop: "-50px" }}
            mb={6}
          >
            <img src={Play} style={{ height: "200px", cursor: "pointer" }} />
          </Box>

          <Grid container spacing={4}>
            {imageLinks.map((item) => (
              <Grid
                item
                key={item.id}
                xs={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card
                    elevation={3}
                    sx={{
                      height: 250,
                      width: 250,
                      backgroundColor: "transparent",
                      borderRadius: 2,
                      transition: "transform 0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <CardMedia
                      image={item.image}
                      component="img"
                      alt={`Image ${item.id}`}
                      height="100%"
                      sx={{ objectFit: "cover", borderRadius: 2 }}
                    />
                  </Card>
                  <Typography
                    textAlign="center"
                    fontWeight="600"
                    mt={1}
                    sx={{ textTransform: "uppercase" }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default MainHome;
