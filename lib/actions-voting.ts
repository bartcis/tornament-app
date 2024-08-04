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
    const urlObj = new URL(request.url);
    const params = new URLSearchParams(urlObj.search);
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
