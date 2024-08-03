import { getTournamentByUuid } from "@/lib/actions";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return await getTournamentByUuid(request);
}