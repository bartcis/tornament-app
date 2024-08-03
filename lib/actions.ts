'use server';
import { connectToMongoDB } from "./db";
import Tournament, { Game } from "@/models/tournament";
import { NextRequest, NextResponse } from "next/server";

export const createTournament = async ({uuid, roundOne}: {uuid: string, roundOne: Game[]}) => {
    await connectToMongoDB();

    try {
        // Creating a new todo using Tournament model
        const newTournament = await Tournament.create({
            uuid,
            roundOne,
        });

        // Saving the new Tournament
        newTournament.save();
    } catch (error) {
        console.log(error);
        return {message: 'error creating Tournament'};
    }
};

export const getTournamentByUuid = async (request: NextRequest) => {
    await connectToMongoDB();

    try {
        const urlObj = new URL(request.url)
        const params = new URLSearchParams(urlObj.search)
        const uuid = params.get('uuid')
        const tournament = await Tournament.findOne({uuid}).exec()

        return NextResponse.json(tournament);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error" }, { status: 500 });    }
};