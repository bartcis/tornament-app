"use client";

import { Card } from "@/components/card";
import { Header } from "@/components/header";
import { useCurrentTournament } from "@/utils/hooks/useCurrentTournament";
import { useCallback, useContext, useState } from "react";
import { NewVotingModal } from "./modals/new-voting-modal";
import { Game } from "@/models/tournament";
import { useCurrentGame } from "@/utils/context/current-game";
import { CurrentVote } from "./current-vote";
import { createVoting } from "@/lib/actions-voting";

export const Admin = () => {
  const [currentGame, setCurrentGame] = useState<Game | null>(null);
  const [refetch, setRefetch] = useState(true);
  const [currentRound, setCurrentRound] = useState<number | null>(null);
  const [isVotingModalOpened, setIsVotingModalOpened] = useState(false);
  const tournament = useCurrentTournament({ refetch });
  const { setContextGame, setIsVotingActive } = useCurrentGame();

  const handleNewVoting = useCallback(
    (game: Game, round: number) => {
      setCurrentGame(game);
      setCurrentRound(round);
      setIsVotingModalOpened(true);
    },
    [setCurrentGame]
  );

  const handleStartVoting = useCallback(async () => {
    setIsVotingModalOpened(false);
    setRefetch(false);

    if (currentGame) {
      await createVoting({ currentGame });

      setContextGame(currentGame);
      setIsVotingActive(true);
    }
  }, [currentGame, setContextGame]);

  return (
    <>
      <Header title="Zarządzaj turniejem" />
      <main className="flex flex-col gap-8 p-6 justify-center">
        <CurrentVote
          currentRound={currentRound}
          tournamentId={tournament?.uuid}
          setRefetch={() => setRefetch(true)}
        />
        <h2>Runda 1: </h2>
        <div className="grid gap-4 grid-cols-4 grid-rows-2">
          {tournament?.roundOne.map((game) => (
            <Card
              {...game}
              key={`${game.playerOne}-round1`}
              onCountClick={handleNewVoting}
              round={1}
            />
          ))}
        </div>
        <h2>Runda 2: </h2>
        <div className="grid gap-4 grid-cols-4 grid-rows-1">
          {tournament?.roundTwo.map((game) => (
            <Card
              {...game}
              key={`${game.playerOne}-round2`}
              onCountClick={handleNewVoting}
              round={2}
            />
          ))}
        </div>
        <h2>Półfinał: </h2>
        <div className="grid gap-4 grid-cols-4 grid-rows-1">
          {tournament?.roundThree.map((game) => (
            <Card
              {...game}
              key={`${game.playerOne}-round3`}
              onCountClick={handleNewVoting}
              round={3}
            />
          ))}
        </div>
        <h2>Finał: </h2>
        <div className="grid gap-4 grid-cols-4 grid-rows-1">
          {tournament?.roundFour.map((game) => (
            <Card
              {...game}
              key={`${game.playerOne}-round4`}
              onCountClick={handleNewVoting}
              round={4}
            />
          ))}
        </div>
      </main>
      {isVotingModalOpened && currentGame && (
        <NewVotingModal
          onConfirm={handleStartVoting}
          game={currentGame}
          onClose={() => setIsVotingModalOpened(false)}
        />
      )}
    </>
  );
};
