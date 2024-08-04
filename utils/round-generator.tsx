import { Game } from "@/models/tournament";
import { FormPlayer } from "./storage";

export const firstRoundGenerator = (players: FormPlayer[]): Game[] => {
  const shuffledArray = players.sort(() => 0.5 - Math.random());
  let chunkSize = 2;
  let chunks = [];

  for (let i = 0; i < shuffledArray.length; i += chunkSize) {
    chunks.push(shuffledArray.slice(i, i + chunkSize));
  }

  return chunks.map((item, index) => ({
    playerOne: item[0].value,
    playerTwo: item[1].value,
    playerOneCount: 0,
    playerTwoCount: 0,
    gameId: index,
    isFinished: false,
  }));
};
