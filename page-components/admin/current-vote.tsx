import { useCurrentGame } from "@/utils/context/current-game";
import { useCounter } from "@/utils/hooks/useCounter";

export const CurrentVote = () => {
  const { game } = useCurrentGame();
  const { seconds, formatTime } = useCounter();
  console.log("seconds", seconds);

  return (
    <>
      {game && (
        <div className="flex gap-4 p-2 items-center">
          <p>Aktualne głosowanie: </p>
          <h2>
            {game?.playerOne} vs {game?.playerTwo}
          </h2>
          <p>Pozostało: </p>
          <h2>{formatTime(seconds)}</h2>
        </div>
      )}
    </>
  );
};
