'use client';

import { Header } from "@/components/header"
import { getTournamentByUuid } from "@/lib/actions";
import { getStorageData } from "@/utils/storage";
import { useEffect } from "react";

export const Bracket = () => {
  const currentTournament = getStorageData()

  const tournamentId = currentTournament?.uuid
  useEffect(() => {


    if(tournamentId) {
      const getTournament = async () => {
        try {
          const request = await fetch(`/api/tournament?uuid=${tournamentId}`);
          const response = await request.json();
    
          console.log('response', response)
        } catch (error) {
          console.error(error);
        }
      }

      getTournament()
    }
  }, [])

  return (
    <>
      <Header title='Drabinka turniejowa'/>
      <main className="p-24 w-1/2	m-auto">
        
      </main>
    </>
  )
}