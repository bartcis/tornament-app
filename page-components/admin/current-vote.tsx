import { useCurrentGame } from "@/utils/context/current-game";
import { useCounter } from "@/utils/hooks/useCounter";
import { useEffect } from "react";

export const CurrentVote = ({
  currentRound,
  tournamentId,
  setRefetch,
}: {
  currentRound: number | null;
  tournamentId?: string;
  setRefetch: () => void;
}) => {
  const { game, setIsVotingActive, setContextGame } = useCurrentGame();
  const { seconds, formatTime } = useCounter();

  useEffect(() => {
    const completeVoting = async () => {
      try {
        const votingRequest = await fetch(`/api/voting?shouldReset=true`);
        const votingResponse = await votingRequest.json();
        const gameId = votingResponse[0].currentGame.gameId;
        const playerOneResult =
          votingResponse[0].currentGame.playerOneCount || 0;
        const playerTwoResult =
          votingResponse[0].currentGame.playerTwoCount || 0;

        await fetch(
          `/api/tournament?uuid=${tournamentId}&round=${currentRound}&gameId=${gameId}&p1=${playerOneResult}&p2=${playerTwoResult}`,
          {
            method: "PUT",
          }
        );

        setIsVotingActive(false);
        setContextGame(null);
        setRefetch();
      } catch (error) {
        console.error(error);
      }
    };

    if (seconds === 0) {
      completeVoting();
    }
  }, [seconds]);

  return (
    <>
      {game && (
        <div className="flex gap-4 p-2 items-center">
          <p>Aktualne głosowanie: </p>
          <h2>
            {game?.playerOne} vs {game?.playerTwo}
          </h2>
          <p>Runda: </p>
          <h2>{currentRound}</h2>
          <p>Pozostało: </p>
          <h2>{formatTime(seconds)}</h2>
        </div>
      )}
    </>
  );
};
