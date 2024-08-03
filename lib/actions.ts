'use server';
import { connectToMongoDB } from "./db";
import Tournament, { Game } from "@/models/tournament";

export const createTournamnet = async ({uuid, roundOne}: {uuid: string, roundOne: Game[]}) => {
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