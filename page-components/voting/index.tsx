"use client";

import { Button } from "@/components/button";
import { Loader } from "@/components/loader";
import { Game } from "@/models/tournament";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

const votingGuard = "voting";
export const VotingComponent = () => {
  const [game, setGame] = useState<Game | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getVoting = async () => {
      try {
        setIsLoading(true);
        const currentStorage = localStorage.getItem(votingGuard);
        const votingRequest = await fetch(`/api/voting`);
        const votingResponse = await votingRequest.json();
        const game = votingResponse[0].currentGame;

        if (game) {
          if ((currentStorage && JSON.parse(currentStorage)) !== game.gameId) {
            setGame(game);
          }
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    getVoting();
  }, []);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(event.currentTarget);
      let vote = "";
      for (const [_, value] of formData) {
        vote = value as string;
      }

      if (game?.gameId) {
        await fetch(`/api/voting?gameId=${game.gameId}&result=${vote}`, {
          method: "PUT",
        });
        localStorage.setItem(votingGuard, JSON.stringify(game.gameId));
      }
      setIsLoading(false);
      setGame(null);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <header className="flex flex-col items-center justify-between gap-8 p-6">
        <Image
          src="/logo.svg"
          width={300}
          height={300}
          alt="Efekt Perła Wschodu"
        />
      </header>
      <main className="p-4	m-auto text-center">
        {isLoading && <Loader />}
        {!game && !isLoading && <h2>Brak aktywnego głosowania</h2>}
        {game && !isLoading && (
          <form onSubmit={onSubmit}>
            <h2 className="p-4">Kto wypadł lepiej?</h2>
            <div className="p-4">
              <input
                className="cursor-pointer"
                type="radio"
                id="p1"
                name="vote"
                value="p1"
              />
              <label htmlFor="p1" className="cursor-pointer p-4">
                {game.playerOne}
              </label>
            </div>
            <div className="p-4">
              <input
                className="cursor-pointer"
                type="radio"
                id="p2"
                name="vote"
                value="p2"
              />
              <label htmlFor="p2" className="cursor-pointer p-4">
                {game.playerTwo}
              </label>
            </div>
            <div className="p-4">
              <Button text="Głosuj" type="submit" disabled={isLoading} />
            </div>
          </form>
        )}
      </main>
    </>
  );
};
