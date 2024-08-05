"use server";
import { connectToMongoDB } from "./db";
import Tournament, { Game } from "@/models/tournament";
import { NextRequest, NextResponse } from "next/server";

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
    const urlObj = new URL(request.url);
    const params = new URLSearchParams(urlObj.search);
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
    const urlObj = new URL(request.url);
    const params = new URLSearchParams(urlObj.search);
    const uuid = params.get("uuid");
    const gameId = params.get("gameId");
    const round = params.get("round");
    const playerOneVotes = params.get("p1");
    const playerTwoVotes = params.get("p2");

    const tournament = await Tournament.findOne({ uuid }).exec();

    console.log("playerOneVotes", playerOneVotes);
    console.log("playerTwoVotes", playerTwoVotes);

    const getRoundParam = () => {
      if (round === "1") {
        return "roundOne";
      }
      if (round === "2") {
        return "roundTwo";
      }
      if (round === "3") {
        return "roundThree";
      }
      return "roundFour";
    };

    const currentRound = tournament ? tournament[getRoundParam()] : [];
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

    await Tournament.findOneAndUpdate(
      { uuid },
      { [getRoundParam()]: modifiedRound }
    ).exec();
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
};
