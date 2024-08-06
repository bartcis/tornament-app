"use server";
import { connectToMongoDB } from "./db";
import Tournament, { Game } from "@/models/tournament";
import { getPusherInstance } from "@/utils/pusher";
import {
  advanceWiningPlayer,
  getChampion,
  getNextRoundParam,
  getRoundParam,
} from "@/utils/tournament";
import { NextRequest, NextResponse } from "next/server";

const pusherServer = getPusherInstance();

export const createTournament = async ({
  uuid,
  roundOne,
  roundTwo,
  roundThree,
  roundFour,
}: {
  uuid: string;
  roundOne: Game[];
  roundTwo: Game[];
  roundThree: Game[];
  roundFour: Game[];
}) => {
  await connectToMongoDB();

  try {
    // Creating a new todo using Tournament model
    const newTournament = await Tournament.create({
      uuid,
      roundOne,
      roundTwo,
      roundThree,
      roundFour,
    });

    // Saving the new Tournament
    newTournament.save();
  } catch (error) {
    console.log(error);
    return { message: "error creating Tournament" };
  }
};

export const getTournamentByUuid = async (request: NextRequest) => {
  await connectToMongoDB();

  try {
    const params = request.nextUrl.searchParams;
    const uuid = params.get("uuid");
    const tournament = await Tournament.findOne({ uuid }).exec();

    return NextResponse.json(tournament);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
};

export const updateTournamentWithGameResult = async (request: NextRequest) => {
  await connectToMongoDB();

  try {
    const params = request.nextUrl.searchParams;
    const uuid = params.get("uuid");
    const gameId = params.get("gameId");
    const round = params.get("round");
    const playerOneVotes = params.get("p1");
    const playerTwoVotes = params.get("p2");

    const tournament = await Tournament.findOne({ uuid }).exec();
    const currentRoundParam = getRoundParam(round);
    const nextRoundParam = getNextRoundParam(currentRoundParam);
    const currentRound = tournament ? tournament[currentRoundParam] : [];

    const modifiedRound = currentRound.map((game) => {
      if (game.gameId === gameId) {
        return {
          playerOneCount: Number(playerOneVotes),
          playerTwoCount: Number(playerTwoVotes),
          isFinished: true,
          playerOne: game.playerOne,
          playerTwo: game.playerTwo,
          gameId: game.gameId,
        };
      }

      return game;
    });

    const modifiedTournament = {
      [currentRoundParam]: modifiedRound,
      winner: {
        name: "",
        count: 0,
      },
    };

    if (nextRoundParam && nextRoundParam !== "winner") {
      const newRound = advanceWiningPlayer({
        tournament,
        modifiedRound,
        nextRoundParam,
        gameId,
      });

      if (newRound) {
        modifiedTournament[nextRoundParam] = newRound;
      }
    }

    if (nextRoundParam && nextRoundParam === "winner") {
      const winner = getChampion({ final: modifiedRound[0] });
      modifiedTournament.winner = winner;
    }

    await Tournament.findOneAndUpdate(
      { uuid },
      { ...modifiedTournament }
    ).exec();
    await pusherServer.trigger("tournament-updated", "evt::test", {
      message: "Reload the bracket",
      user: "Admin",
      date: new Date(),
    });
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
};
