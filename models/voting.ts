// Importing mongoose library along with Document and Model types from it
import mongoose, { Document, Model } from "mongoose";
import { Game, gameDefinition } from "./tournament";

export interface IVoting {
  currentGame: Game | null;
  playerOneVotes: 0;
  playerTwoVotes: 0;
}

export interface IVotingDocument extends IVoting, Document {
  createdAt: Date;
  updatedAt: Date;
}

const votingSchema = new mongoose.Schema<IVotingDocument>(
  {
    currentGame: gameDefinition,
    playerOneVotes: {
      type: Number,
      required: false,
    },
    playerTwoVotes: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// Creating a mongoose model for the document
const Voting: Model<IVoting> =
  mongoose.models?.Voting || mongoose.model("Voting", votingSchema);

export default Voting;
