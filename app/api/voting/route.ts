import { getVoting, updateVoting } from "@/lib/actions-voting";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return await getVoting(request);
}

export async function PUT(request: NextRequest) {
  return await updateVoting(request);
}
