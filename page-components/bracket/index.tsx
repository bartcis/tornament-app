"use client";

import { Header } from "@/components/header";
import { useCurrentTournament } from "@/utils/hooks/useCurrentTournament";
import { getStorageData } from "@/utils/storage";

export const Bracket = () => {
  const currentTournament = getStorageData();

  const bracket = useCurrentTournament({ refetch: true });

  return (
    <>
      <Header title="Drabinka turniejowa" />
      <h2 className="flex flex-col items-center justify-between gap-8 p-2">
        {currentTournament?.name}
      </h2>

      <section className="p-2">
        <ul className="round round-1">
          <li className="spacer">&nbsp;</li>

          <li className="game game-top winner">
            {bracket?.roundOne[0].playerOne}
            <span>{bracket?.roundOne[0].playerOneCount}</span>
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            {bracket?.roundOne[0].playerTwo}
            <span>{bracket?.roundOne[0].playerTwoCount}</span>
          </li>

          <li className="spacer">&nbsp;</li>

          <li className="game game-top winner">
            {bracket?.roundOne[1].playerOne}{" "}
            <span>{bracket?.roundOne[1].playerOneCount}</span>
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            {bracket?.roundOne[1].playerTwo}{" "}
            <span>{bracket?.roundOne[1].playerTwoCount}</span>
          </li>

          <li className="spacer">&nbsp;</li>

          <li className="game game-top ">
            {bracket?.roundOne[2].playerOne}{" "}
            <span>{bracket?.roundOne[2].playerOneCount}</span>
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom winner">
            {bracket?.roundOne[2].playerTwo}{" "}
            <span>{bracket?.roundOne[2].playerTwoCount}</span>
          </li>

          <li className="spacer">&nbsp;</li>

          <li className="game game-top winner">
            {bracket?.roundOne[3].playerOne}{" "}
            <span>{bracket?.roundOne[3].playerOneCount}</span>
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            {bracket?.roundOne[3].playerTwo}{" "}
            <span>{bracket?.roundOne[3].playerTwoCount}</span>
          </li>

          <li className="spacer">&nbsp;</li>

          <li className="game game-top winner">
            {bracket?.roundOne[4].playerOne}{" "}
            <span>{bracket?.roundOne[4].playerOneCount}</span>
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            {bracket?.roundOne[4].playerTwo}{" "}
            <span>{bracket?.roundOne[4].playerTwoCount}</span>
          </li>

          <li className="spacer">&nbsp;</li>

          <li className="game game-top winner">
            {bracket?.roundOne[5].playerOne}{" "}
            <span>{bracket?.roundOne[5].playerOneCount}</span>
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            {bracket?.roundOne[5].playerTwo}{" "}
            <span>{bracket?.roundOne[5].playerTwoCount}</span>
          </li>

          <li className="spacer">&nbsp;</li>

          <li className="game game-top winner">
            {bracket?.roundOne[6].playerOne}{" "}
            <span>{bracket?.roundOne[6].playerOneCount}</span>
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            {bracket?.roundOne[6].playerTwo}{" "}
            <span>{bracket?.roundOne[6].playerTwoCount}</span>
          </li>

          <li className="spacer">&nbsp;</li>

          <li className="game game-top winner">
            {bracket?.roundOne[7].playerOne}{" "}
            <span>{bracket?.roundOne[7].playerOneCount}</span>
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            {bracket?.roundOne[7].playerTwo}{" "}
            <span>{bracket?.roundOne[7].playerTwoCount}</span>
          </li>

          <li className="spacer">&nbsp;</li>
        </ul>
        <ul className="round round-2">
          <li className="spacer">&nbsp;</li>

          <li className="game game-top winner">
            {bracket?.roundTwo[0]?.playerOne}{" "}
            <span>{bracket?.roundTwo[0]?.playerOneCount}</span>
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            {bracket?.roundTwo[0]?.playerTwo}{" "}
            <span>{bracket?.roundTwo[0]?.playerTwoCount}</span>
          </li>

          <li className="spacer">&nbsp;</li>

          <li className="game game-top winner">
            {bracket?.roundTwo[0]?.playerOne}{" "}
            <span>{bracket?.roundTwo[1]?.playerOneCount}</span>
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            {bracket?.roundTwo[0]?.playerTwo}{" "}
            <span>{bracket?.roundTwo[1]?.playerTwoCount}</span>
          </li>

          <li className="spacer">&nbsp;</li>

          <li className="game game-top ">
            {bracket?.roundTwo[0]?.playerOne}{" "}
            <span>{bracket?.roundTwo[2]?.playerOneCount}</span>
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom winner">
            {bracket?.roundTwo[0]?.playerTwo}{" "}
            <span>{bracket?.roundTwo[2]?.playerTwoCount}</span>
          </li>

          <li className="spacer">&nbsp;</li>

          <li className="game game-top ">
            {bracket?.roundTwo[0]?.playerOne}{" "}
            <span>{bracket?.roundTwo[3]?.playerOneCount}</span>
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom winner">
            {bracket?.roundTwo[0]?.playerTwo}{" "}
            <span>{bracket?.roundTwo[3]?.playerTwoCount}</span>
          </li>

          <li className="spacer">&nbsp;</li>
        </ul>
        <ul className="round round-3">
          <li className="spacer">&nbsp;</li>

          <li className="game game-top winner">
            {bracket?.roundThree[0]?.playerOne}{" "}
            <span>{bracket?.roundThree[0]?.playerOneCount}</span>
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            {bracket?.roundThree[0]?.playerTwo}{" "}
            <span>{bracket?.roundThree[0]?.playerTwoCount}</span>
          </li>

          <li className="spacer">&nbsp;</li>

          <li className="game game-top ">
            {bracket?.roundThree[0]?.playerOne}{" "}
            <span>{bracket?.roundThree[1]?.playerOneCount}</span>
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom winner">
            {bracket?.roundThree[0]?.playerTwo}{" "}
            <span>{bracket?.roundThree[1]?.playerTwoCount}</span>
          </li>

          <li className="spacer">&nbsp;</li>
        </ul>
        <ul className="round round-4">
          <li className="spacer">&nbsp;</li>

          <li className="game game-top winner">
            {bracket?.roundFour[0]?.playerOne}{" "}
            <span>{bracket?.roundFour[0]?.playerOneCount}</span>
          </li>
          <li className="game game-spacer">&nbsp;</li>
          <li className="game game-bottom ">
            {bracket?.roundFour[0]?.playerTwo}{" "}
            <span>{bracket?.roundFour[0]?.playerTwoCount}</span>
          </li>

          <li className="spacer">&nbsp;</li>
        </ul>
        <ul className="round round-5">
          <li className="spacer">&nbsp;</li>
          <li className="game game-spacer-final">&nbsp;</li>

          <li className="game game-top winner">
            {bracket?.winner?.name} <span>{bracket?.winner?.count}</span>
          </li>
          <li className="game game-space-final">&nbsp;</li>

          <li className="spacer">&nbsp;</li>
        </ul>
      </section>
    </>
  );
};
