import { Box } from "@mui/material";
import React from "react";
import Navbar from "../common/components/Navbar";
import { useDb } from "../common/context/DbContext";
import Game from "../common/components/Game";

function Clothes() {
  const { gameData } = useDb();
  return (
    <Box>
      <Navbar />
      {gameData && <Game gameData={gameData.clothes} from="clothes" />}
    </Box>
  );
}

export default Clothes;
