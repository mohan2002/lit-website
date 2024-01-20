import { Box } from "@mui/material";
import React from "react";
import Navbar from "../common/components/Navbar";
import { useDb } from "../common/context/DbContext";
import Game from "../common/components/Game";

function Ring() {
  const { gameData } = useDb();
  return (
    <Box>
      <Navbar />
      {gameData && <Game gameData={gameData.ring} from="ring" />}
    </Box>
  );
}

export default Ring;
