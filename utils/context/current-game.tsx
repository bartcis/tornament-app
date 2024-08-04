"use client";

import { Game } from "@/models/tournament";
import { createContext, ReactNode, useContext, useState } from "react";

type GameContextDefinition = {
  game: Game | null;
  setContextGame: (game: Game) => void;
};

const CurrentGameContext = createContext<GameContextDefinition>({
  game: null,
  setContextGame: () => {},
});

export const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [game, setGame] = useState<Game | null>(null);

  return (
    <CurrentGameContext.Provider
      value={{
        game,
        setContextGame: (game: Game) => setGame(game),
      }}
    >
      {children}
    </CurrentGameContext.Provider>
  );
};

export const useCurrentGame = () => {
  return useContext(CurrentGameContext);
};
