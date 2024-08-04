import {
  getTournamentByUuid,
  updateTournamentWithGameResult,
} from "@/lib/actions-tournament";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return await getTournamentByUuid(request);
}

export async function PUT(request: NextRequest) {
  return await updateTournamentWithGameResult(request);
}
