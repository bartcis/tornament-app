import { Game, ITournament, ITournamentDocument } from "@/models/tournament";

export const getRoundParam = (round: string | null) => {
  if (round === "1") {
    return "roundOne";
  }
  if (round === "2") {
    return "roundTwo";
  }
  if (round === "3") {
    return "roundThree";
  }
  return "roundFour";
};

export const getNextRoundParam = (roundParam: string) => {
  if (roundParam === "roundOne") {
    return "roundTwo";
  }
  if (roundParam === "roundTwo") {
    return "roundThree";
  }
  if (roundParam === "roundThree") {
    return "roundFour";
  }

  return "winner";
};

const getWinner = ({
  playerOneCount,
  playerTwoCount,
  playerOne,
  playerTwo,
}: Game) => (playerOneCount > playerTwoCount ? playerOne : playerTwo);

const updateRoundTwo = ({
  currentGameIndex,
  winner,
  roundTwo,
}: {
  currentGameIndex: number;
  winner: string;
  roundTwo: Game[];
}) => {
  const modifiedRound = [...roundTwo];

  if (currentGameIndex === 0) {
    modifiedRound[0].playerOne = winner;
  }
  if (currentGameIndex === 1) {
    modifiedRound[0].playerTwo = winner;
  }
  if (currentGameIndex === 2) {
    modifiedRound[1].playerOne = winner;
  }
  if (currentGameIndex === 3) {
    modifiedRound[1].playerTwo = winner;
  }
  if (currentGameIndex === 4) {
    modifiedRound[2].playerOne = winner;
  }
  if (currentGameIndex === 5) {
    modifiedRound[2].playerTwo = winner;
  }
  if (currentGameIndex === 6) {
    modifiedRound[3].playerOne = winner;
  }
  if (currentGameIndex === 7) {
    modifiedRound[3].playerTwo = winner;
  }

  return modifiedRound;
};

const updateRoundThree = ({
  currentGameIndex,
  winner,
  roundThree,
}: {
  currentGameIndex: number;
  winner: string;
  roundThree: Game[];
}) => {
  const modifiedRound = [...roundThree];

  if (currentGameIndex === 0) {
    modifiedRound[0].playerOne = winner;
  }
  if (currentGameIndex === 1) {
    modifiedRound[0].playerTwo = winner;
  }
  if (currentGameIndex === 2) {
    modifiedRound[1].playerOne = winner;
  }
  if (currentGameIndex === 3) {
    modifiedRound[1].playerTwo = winner;
  }
  return modifiedRound;
};

const updateRoundFour = ({
  currentGameIndex,
  winner,
  roundFour,
}: {
  currentGameIndex: number;
  winner: string;
  roundFour: Game[];
}) => {
  const modifiedRound = [...roundFour];

  if (currentGameIndex === 0) {
    modifiedRound[0].playerOne = winner;
  }
  if (currentGameIndex === 1) {
    modifiedRound[0].playerTwo = winner;
  }
  return modifiedRound;
};

export const advanceWiningPlayer = ({
  tournament,
  modifiedRound,
  nextRoundParam,
  gameId,
}: {
  tournament: ITournament | null;
  modifiedRound: Game[];
  nextRoundParam: string;
  gameId: string | null;
}) => {
  const currentGameIndex = modifiedRound.findIndex(
    (game) => game.gameId === gameId
  );
  const currentGame = modifiedRound[currentGameIndex];
  const winner = getWinner(currentGame);
  let nextRound = undefined;

  if (nextRoundParam === "roundTwo" && tournament && winner) {
    nextRound = updateRoundTwo({
      currentGameIndex,
      winner,
      roundTwo: tournament[nextRoundParam],
    });
  }

  if (nextRoundParam === "roundThree" && tournament && winner) {
    nextRound = updateRoundThree({
      currentGameIndex,
      winner,
      roundThree: tournament[nextRoundParam],
    });
  }

  if (tournament && winner && nextRoundParam === "roundFour") {
    nextRound = updateRoundFour({
      currentGameIndex,
      winner,
      roundFour: tournament[nextRoundParam],
    });
  }

  return nextRound;
};

export const getChampion = ({ final }: { final: Game }) => {
  const name = getWinner(final) || "Player";
  const count =
    final.playerOneCount > final.playerTwoCount
      ? final.playerOneCount
      : final.playerTwoCount;

  return { name, count };
};
