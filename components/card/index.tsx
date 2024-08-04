import { Game } from "@/models/tournament";
import { Button } from "../button";
import { useCallback } from "react";
import { useCurrentGame } from "@/utils/context/current-game";

type Props = Game & {
  onCountClick: (game: Game, round: number) => void;
  round: number;
};

export const Card = ({
  playerOne,
  playerTwo,
  playerOneCount,
  playerTwoCount,
  gameId,
  isFinished,
  onCountClick,
  round,
}: Props) => {
  const { isVotingActive } = useCurrentGame();

  const handleConfirm = useCallback(
    () =>
      onCountClick(
        {
          playerOne,
          playerTwo,
          playerOneCount,
          playerTwoCount,
          gameId,
          isFinished,
        },
        round
      ),
    [round]
  );

  return (
    <div className="flex p-2 content-center flex-nowrap gap-2 border border-purple-600 rounded-lg">
      <div className="flex w-80 flex-col content-center justify-center divide-y divide-purple-600">
        <div className="flex w-40 gap-8 p-2 justify-between">
          <p>{playerOne}</p>
          <p>{playerOneCount}</p>
        </div>
        <div className="flex w-40 gap-8 p-2 justify-between">
          <p>{playerTwo}</p>
          <p>{playerTwoCount}</p>
        </div>
      </div>
      <div className="flex flex-col ">
        <Button
          text="Głosowanie"
          variant="secondary"
          disabled={isFinished || isVotingActive}
          onClick={handleConfirm}
        />
      </div>
    </div>
  );
};
