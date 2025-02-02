import { Game } from "@/models/tournament";
import { FormPlayer } from "./storage";
import { generateString } from "./generateString";

export const firstRoundGenerator = (players: FormPlayer[]): Game[] => {
  const shuffledArray = players.sort(() => 0.5 - Math.random());
  let chunkSize = 2;
  let chunks = [];

  for (let i = 0; i < shuffledArray.length; i += chunkSize) {
    chunks.push(shuffledArray.slice(i, i + chunkSize));
  }

  return chunks.map((item) => ({
    playerOne: item[0].value,
    playerTwo: item[1].value,
    playerOneCount: 0,
    playerTwoCount: 0,
    gameId: generateString(8),
    isFinished: false,
  }));
};

export const nextRoundGenerator = (gamesCount: number): Game[] => {
  const gamesArray = [];

  for (let i = 0; i < gamesCount; i++) {
    gamesArray.push({
      playerOne: undefined,
      playerTwo: undefined,
      playerOneCount: 0,
      playerTwoCount: 0,
      gameId: generateString(8),
      isFinished: false,
    });
  }

  return gamesArray;
};
