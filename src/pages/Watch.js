import { Box } from "@mui/material";
import React from "react";
import Navbar from "../common/components/Navbar";
import Game from "../common/components/Game";
import { useDb } from "../common/context/DbContext";

function Watch() {
  const { gameData } = useDb();
  return (
    <Box>
      <Navbar />
      {gameData && <Game gameData={gameData.watches} from="watch" />}
    </Box>
  );
}

export default Watch;
