import { useEffect, useState } from "react";
import { getStorageData } from "../storage";
import { ITournament } from "@/models/tournament";

export const useCurrentTournament = ({ refetch }: { refetch?: boolean }) => {
  const currentTournament = getStorageData();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [tournament, setTournament] = useState<ITournament | null>(null);
  const tournamentId = currentTournament?.uuid;

  useEffect(() => {
    if (tournamentId && refetch) {
      const getTournament = async () => {
        try {
          setIsLoading(true);
          const request = await fetch(`/api/tournament?uuid=${tournamentId}`);
          const response = await request.json();
          setTournament(response);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
          setIsLoading(false);
        }
      };
      getTournament();
    }
  }, [refetch]);

  return { tournament, isLoading };
};
