import { useEffect, useState } from "react";
import { getStorageData } from "../storage";
import { ITournament } from "@/models/tournament";

export const useCurrentTournament = ({ refetch }: { refetch?: boolean }) => {
  const currentTournament = getStorageData();
  const [tournament, setTournament] = useState<ITournament | null>(null);
  const tournamentId = currentTournament?.uuid;

  useEffect(() => {
    if (tournamentId) {
      const getTournament = async () => {
        try {
          const request = await fetch(`/api/tournament?uuid=${tournamentId}`);
          const response = await request.json();
          setTournament(response);
        } catch (error) {
          console.error(error);
        }
      };
      getTournament();
    }
  }, [refetch]);

  return tournament;
};
