"use server";
import { connectToMongoDB } from "./db";
import { Game } from "@/models/tournament";
import Voting from "@/models/voting";
import { NextRequest, NextResponse } from "next/server";

export const createVoting = async ({ currentGame }: { currentGame: Game }) => {
  await connectToMongoDB();

  try {
    const newVoting = await Voting.create({
      currentGame,
    });

    newVoting.save();
  } catch (error) {
    console.log(error);
    return { message: "error creating Voting" };
  }
};

export const getVoting = async (request: NextRequest) => {
  await connectToMongoDB();

  try {
    const params = request.nextUrl.searchParams;
    const resetFlag = params.get("shouldReset");
    const voting = await Voting.find().exec();

    if (resetFlag) {
      await Voting.deleteMany();
    }

    return NextResponse.json(voting);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
};

export const updateVoting = async (request: NextRequest) => {
  await connectToMongoDB();

  try {
    const params = request.nextUrl.searchParams;
    const result = params.get("result");
    const gameId = params.get("gameId");

    const voting = await Voting.findOne({
      "currentGame.gameId": gameId,
    }).exec();
    const p1Count = voting?.currentGame?.playerOneCount || 0;
    const p2Count = voting?.currentGame?.playerTwoCount || 0;

    const modifiedGame = {
      ...voting?.currentGame,
      playerOneCount: result === "p1" ? p1Count + 1 : p1Count,
      playerTwoCount: result === "p2" ? p2Count + 1 : p2Count,
    };

    await Voting.findOneAndUpdate(
      { "currentGame.gameId": gameId },
      { currentGame: modifiedGame }
    ).exec();
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
};
