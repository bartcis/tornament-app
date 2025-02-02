"use client";

import { Header } from "@/components/header";
import { Loader } from "@/components/loader";
import { useCurrentTournament } from "@/utils/hooks/useCurrentTournament";
import { getStorageData } from "@/utils/storage";
import { VotingQRCode } from "./voting-qr-code";
import { useEffect, useState } from "react";
import { pusherClient } from "@/utils/pusher";

export const Bracket = () => {
  const currentTournament = getStorageData();
  const [refetch, setRefetch] = useState(true);

  const { tournament, isLoading } = useCurrentTournament({ refetch });

  useEffect(() => {
    if (refetch) {
      setRefetch(false);
    }
  }, [refetch]);

  useEffect(() => {
    const channel = pusherClient
      .subscribe("tournament-updated")
      .bind("evt::test", (data: any) => {
        if (data.message === "Reload the bracket") {
          setRefetch(true);
        }
      });

    return () => {
      channel.unbind();
    };
  }, []);

  return (
    <>
      <Header title={currentTournament?.name} />
      {isLoading && <Loader />}
      {!isLoading && (
        <section className="p-2 relative">
          <VotingQRCode />
          <ul className="round round-1">
            <li className="spacer">&nbsp;</li>

            <li className="game game-top winner">
              {tournament?.roundOne[0].playerOne}
              <span>{tournament?.roundOne[0].playerOneCount}</span>
            </li>
            <li className="game game-spacer">&nbsp;</li>
            <li className="game game-bottom ">
              {tournament?.roundOne[0].playerTwo}
              <span>{tournament?.roundOne[0].playerTwoCount}</span>
            </li>

            <li className="spacer">&nbsp;</li>

            <li className="game game-top winner">
              {tournament?.roundOne[1].playerOne}{" "}
              <span>{tournament?.roundOne[1].playerOneCount}</span>
            </li>
            <li className="game game-spacer">&nbsp;</li>
            <li className="game game-bottom ">
              {tournament?.roundOne[1].playerTwo}{" "}
              <span>{tournament?.roundOne[1].playerTwoCount}</span>
            </li>

            <li className="spacer">&nbsp;</li>

            <li className="game game-top ">
              {tournament?.roundOne[2].playerOne}{" "}
              <span>{tournament?.roundOne[2].playerOneCount}</span>
            </li>
            <li className="game game-spacer">&nbsp;</li>
            <li className="game game-bottom winner">
              {tournament?.roundOne[2].playerTwo}{" "}
              <span>{tournament?.roundOne[2].playerTwoCount}</span>
            </li>

            <li className="spacer">&nbsp;</li>

            <li className="game game-top winner">
              {tournament?.roundOne[3].playerOne}{" "}
              <span>{tournament?.roundOne[3].playerOneCount}</span>
            </li>
            <li className="game game-spacer">&nbsp;</li>
            <li className="game game-bottom ">
              {tournament?.roundOne[3].playerTwo}{" "}
              <span>{tournament?.roundOne[3].playerTwoCount}</span>
            </li>

            <li className="spacer">&nbsp;</li>

            <li className="game game-top winner">
              {tournament?.roundOne[4].playerOne}{" "}
              <span>{tournament?.roundOne[4].playerOneCount}</span>
            </li>
            <li className="game game-spacer">&nbsp;</li>
            <li className="game game-bottom ">
              {tournament?.roundOne[4].playerTwo}{" "}
              <span>{tournament?.roundOne[4].playerTwoCount}</span>
            </li>

            <li className="spacer">&nbsp;</li>

            <li className="game game-top winner">
              {tournament?.roundOne[5].playerOne}{" "}
              <span>{tournament?.roundOne[5].playerOneCount}</span>
            </li>
            <li className="game game-spacer">&nbsp;</li>
            <li className="game game-bottom ">
              {tournament?.roundOne[5].playerTwo}{" "}
              <span>{tournament?.roundOne[5].playerTwoCount}</span>
            </li>

            <li className="spacer">&nbsp;</li>

            <li className="game game-top winner">
              {tournament?.roundOne[6].playerOne}{" "}
              <span>{tournament?.roundOne[6].playerOneCount}</span>
            </li>
            <li className="game game-spacer">&nbsp;</li>
            <li className="game game-bottom ">
              {tournament?.roundOne[6].playerTwo}{" "}
              <span>{tournament?.roundOne[6].playerTwoCount}</span>
            </li>

            <li className="spacer">&nbsp;</li>

            <li className="game game-top winner">
              {tournament?.roundOne[7].playerOne}{" "}
              <span>{tournament?.roundOne[7].playerOneCount}</span>
            </li>
            <li className="game game-spacer">&nbsp;</li>
            <li className="game game-bottom ">
              {tournament?.roundOne[7].playerTwo}{" "}
              <span>{tournament?.roundOne[7].playerTwoCount}</span>
            </li>

            <li className="spacer">&nbsp;</li>
          </ul>
          <ul className="round round-2">
            <li className="spacer">&nbsp;</li>

            <li className="game game-top winner">
              <h3>
                {tournament?.roundTwo[0]?.playerOne}{" "}
                <span>{tournament?.roundTwo[0]?.playerOneCount}</span>
              </h3>
            </li>
            <li className="game game-spacer">&nbsp;</li>
            <li className="game game-bottom ">
              <h3>
                {tournament?.roundTwo[0]?.playerTwo}{" "}
                <span>{tournament?.roundTwo[0]?.playerTwoCount}</span>
              </h3>
            </li>

            <li className="spacer">&nbsp;</li>

            <li className="game game-top winner">
              <h3>
                {tournament?.roundTwo[1]?.playerOne}{" "}
                <span>{tournament?.roundTwo[1]?.playerOneCount}</span>
              </h3>
            </li>
            <li className="game game-spacer">&nbsp;</li>
            <li className="game game-bottom ">
              <h3>
                {tournament?.roundTwo[1]?.playerTwo}{" "}
                <span>{tournament?.roundTwo[1]?.playerTwoCount}</span>
              </h3>
            </li>

            <li className="spacer">&nbsp;</li>

            <li className="game game-top ">
              <h3>
                {tournament?.roundTwo[2]?.playerOne}{" "}
                <span>{tournament?.roundTwo[2]?.playerOneCount}</span>
              </h3>
            </li>
            <li className="game game-spacer">&nbsp;</li>
            <li className="game game-bottom winner">
              <h3>
                {tournament?.roundTwo[2]?.playerTwo}{" "}
                <span>{tournament?.roundTwo[2]?.playerTwoCount}</span>
              </h3>
            </li>

            <li className="spacer">&nbsp;</li>

            <li className="game game-top ">
              <h3>
                {tournament?.roundTwo[3]?.playerOne}{" "}
                <span>{tournament?.roundTwo[3]?.playerOneCount}</span>
              </h3>
            </li>
            <li className="game game-spacer">&nbsp;</li>
            <li className="game game-bottom winner">
              <h3>
                {tournament?.roundTwo[3]?.playerTwo}{" "}
                <span>{tournament?.roundTwo[3]?.playerTwoCount}</span>
              </h3>
            </li>

            <li className="spacer">&nbsp;</li>
          </ul>
          <ul className="round round-3">
            <li className="spacer">&nbsp;</li>

            <li className="game game-top winner">
              <h3>
                {tournament?.roundThree[0]?.playerOne}{" "}
                <span>{tournament?.roundThree[0]?.playerOneCount}</span>
              </h3>
            </li>
            <li className="game game-spacer">&nbsp;</li>
            <li className="game game-bottom ">
              <h3>
                {tournament?.roundThree[0]?.playerTwo}{" "}
                <span>{tournament?.roundThree[0]?.playerTwoCount}</span>
              </h3>
            </li>

            <li className="spacer">&nbsp;</li>

            <li className="game game-top ">
              <h3>
                {tournament?.roundThree[1]?.playerOne}{" "}
                <span>{tournament?.roundThree[1]?.playerOneCount}</span>
              </h3>
            </li>
            <li className="game game-spacer">&nbsp;</li>
            <li className="game game-bottom winner">
              <h3>
                {tournament?.roundThree[1]?.playerTwo}{" "}
                <span>{tournament?.roundThree[1]?.playerTwoCount}</span>
              </h3>
            </li>

            <li className="spacer">&nbsp;</li>
          </ul>
          <ul className="round round-4">
            <li className="spacer">&nbsp;</li>

            <li className="game game-top winner">
              <h2>
                {tournament?.roundFour[0]?.playerOne}{" "}
                <span>{tournament?.roundFour[0]?.playerOneCount}</span>
              </h2>
            </li>
            <li className="game game-spacer">&nbsp;</li>
            <li className="game game-bottom ">
              <h2>
                {tournament?.roundFour[0]?.playerTwo}{" "}
                <span>{tournament?.roundFour[0]?.playerTwoCount}</span>
              </h2>
            </li>

            <li className="spacer">&nbsp;</li>
          </ul>
          <ul className="round round-5">
            <li className="spacer">&nbsp;</li>
            <li className="game game-spacer-final">&nbsp;</li>

            <li className="game game-top winner">
              <h1>
                {" "}
                {tournament?.winner?.name}{" "}
                <span>{tournament?.winner?.count}</span>
              </h1>
            </li>
            <li className="game game-space-final">&nbsp;</li>

            <li className="spacer">&nbsp;</li>
          </ul>
        </section>
      )}
    </>
  );
};
