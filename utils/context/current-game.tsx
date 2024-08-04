"use client";

import { Game } from "@/models/tournament";
import { createContext, ReactNode, useContext, useState } from "react";

type GameContextDefinition = {
  game: Game | null;
  setContextGame: (game: Game | null) => void;
  isVotingActive: boolean;
  setIsVotingActive: (value: boolean) => void;
};

const CurrentGameContext = createContext<GameContextDefinition>({
  game: null,
  setContextGame: () => {},
  setIsVotingActive: () => {},
  isVotingActive: false,
});

export const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [game, setGame] = useState<Game | null>(null);
  const [isVotingActive, setVoting] = useState(false);

  return (
    <CurrentGameContext.Provider
      value={{
        game,
        setContextGame: (game) => setGame(game),
        setIsVotingActive: (value) => setVoting(value),
        isVotingActive,
      }}
    >
      {children}
    </CurrentGameContext.Provider>
  );
};

export const useCurrentGame = () => {
  return useContext(CurrentGameContext);
};
