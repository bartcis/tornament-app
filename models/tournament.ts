// Importing mongoose library along with Document and Model types from it
import mongoose, { Document, Model } from "mongoose";

// Defining the structure of a todo item using TypeScript interfaces
export interface Game {
    playerOne: string;
    playerTwo: string;
    gameId: number;
  }

export interface ITournament {
  uuid: string;
  roundOne: Game[];
  roundTwo: Game[];
  roundThree: Game[];
  roundFour: Game[];
final: string
}

// Merging ITodo interface with mongoose's Document interface to create 
// a new interface that represents a todo document in MongoDB
export interface ITournamentDocument extends ITournament, Document {
  createdAt: Date;
  updatedAt: Date;
}

// Defining a mongoose schema for the Tournament document, specifying the types 
// and constraints
const playerDefinition = {
    playerOne: {
        type: String,
        required: false,
      },
    playerTwo: {
        type: String,
        required: false,
      },
    gameId: {
        type: Number,
        required: true,
      }
}
const tournamentSchema = new mongoose.Schema<ITournamentDocument>(
  {
    uuid: {
      type: String,
      required: true,
    },
    roundOne: [playerDefinition],
    roundTwo: [playerDefinition],
    roundThree: [playerDefinition],
    roundFour: [playerDefinition],
    final: {
        type: String,
        required: false,
      },
  },
  {
    // Automatically add 'createdAt' and 'updatedAt' fields to the document
    timestamps: true,
  }
);

// Creating a mongoose model for the document
const Tournament: Model<ITournament> =
  mongoose.models?.Tournament || mongoose.model("Tournament", tournamentSchema);

export default Tournament;