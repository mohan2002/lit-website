import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  IconButton,
} from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useDb } from "../context/DbContext";

function Game({ gameData, from }) {
  const [selections, setSelections] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledData, setShuffledData] = useState([]);
  const [gameEnded, setGameEnded] = useState(false);
  const { userId, userEmail } = useAuth();
  const [selectedImages, setSelectedImages] = useState([]);
  const [reset, setReset] = useState(false);

  const { storeGameData } = useDb();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("sending");
    const shuffleArray = (array) => {
      const shuffled = array.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    setShuffledData(shuffleArray(gameData));
  }, [reset]);

  const logGameData = () => {
    console.log(selectedImages);
    const correctOnepicked = selectedImages.filter(
      (item) => item.choice === "high"
    );
    const wrongOnepicked = selectedImages.filter(
      (item) => item.choice === "low"
    );

    const score = correctOnepicked.length;
    const timestamp = new Date().toISOString();

    const gameResult = {
      userId,
      userEmail,
      score,
      correctOnepicked,
      wrongOnepicked,
      gamedomain: from,
      timestamp,
    };

    console.log(gameResult);
    storeGameData(gameResult);
  };

  const handleImageClick = (choice) => {
    if (!gameEnded) {
      const currentData = shuffledData[currentIndex];
      const selectedImage = {
        choice,
        imageLink: choice === "low" ? currentData.low : currentData.high,
      };

      console.log(selectedImage);

      setSelections([...selections, choice]);
      const imageData = selectedImages;
      imageData.push(selectedImage);
      setSelectedImages(imageData);
      console.log(selectedImages);
      setCurrentIndex(currentIndex + 1);
    }

    if (currentIndex === shuffledData.length - 1) {
      // Call logGameData when the game is completed
      logGameData();
    }
  };

  const handleReset = () => {
    setSelections([]);
    setSelectedImages([]);
    setCurrentIndex(0);
    setGameEnded(false);
    setReset(!reset);
  };

  const renderResult = () => {
    const highCount = selections.filter((choice) => choice === "high").length;

    let score;

    if (highCount > shuffledData.length / 2) {
      score = `${highCount} / ${shuffledData.length}`;
    } else {
      score = `${highCount} / ${shuffledData.length}`;
    }

    if (highCount > shuffledData.length / 2) {
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="h4" color="greenyellow" fontWeight={600}>
            Congratulations, You Won!
          </Typography>
          <Typography fontWeight={500} fontSize={20}>
            Your Score: {score}
          </Typography>
        </Box>
      );
    } else {
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="h4" color="red" fontWeight={600}>
            You Lost
          </Typography>
          <Typography fontWeight={500} fontSize={20}>
            Your Score: {score}
          </Typography>
        </Box>
      );
    }
  };

  const renderImages = () => {
    if (currentIndex < shuffledData.length) {
      const currentData = shuffledData[currentIndex];
      return (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h4"
            fontWeight={700}
            mb={6}
            sx={{ textDecoration: "underline" }}
          >
            Choose which one is costlier?
          </Typography>
          <Box display="flex" flexDirection="row" alignItems="center" gap={4}>
            <Card
              sx={{ width: 300, height: 400 }}
              onClick={() => handleImageClick("low")}
            >
              <CardMedia
                component="img"
                height="100%"
                image={currentData.low}
                alt="Low"
                sx={{ objectFit: "contain" }}
              />
            </Card>
            <Box
              height={400}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <CompareArrowsIcon sx={{ fontSize: "52px" }} />
            </Box>
            <Card
              sx={{ width: 300, height: 400, cursor: "pointer" }}
              onClick={() => handleImageClick("high")}
            >
              <CardMedia
                component="img"
                height="100%"
                image={currentData.high}
                alt="High"
                sx={{ objectFit: "contain" }}
              />
            </Card>
          </Box>
          <Button
            variant="outlined"
            color="info"
            sx={{ mt: 4, width: "240px" }}
            size="medium"
            onClick={() => handleImageClick("skip")}
          >
            Skip
          </Button>
        </Box>
      );
    } else {
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {renderResult()}
          <Button
            variant="outlined"
            color="info"
            onClick={handleReset}
            size="large"
            fullWidth
          >
            Play Again
          </Button>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1,
              alignItems: "center",
              justifyContent: "center",
              mt: 12,
            }}
          >
            <IconButton
              onClick={() => {
                navigate("/");
              }}
            >
              <HomeIcon sx={{ fontSize: "48px", color: "white" }} />
            </IconButton>
          </Box>
        </Box>
      );
    }
  };

  return (
    <Box
      height="93vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {renderImages()}
    </Box>
  );
}

export default Game;
