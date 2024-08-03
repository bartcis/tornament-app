'use client';

import { Button } from "@/components/button"
import { Header } from "@/components/header"
import { Input } from "@/components/input"
import { FormEvent, useEffect, useState } from "react"
import { generateString } from "@/utils/generateString";
import { clearStorageData, setStorageData, StorageDataDefinition } from "@/utils/storage";
import { useRouter } from 'next/navigation'
import { ROUTES } from "@/utils/route-definition";
import { firstRoundGenerator } from "@/utils/round-generator";
import { createTournamnet } from "@/lib/actions";


export const NewTournament = () => {
  const usersArray = Array.from({ length: 16 }, (_, i) => i + 1)
  const {push} = useRouter()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    clearStorageData()
  },[])
 
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true) // Set loading to true when the request starts
    console.log(event.currentTarget)

    try {
      const formData = new FormData(event.currentTarget)
      const uuid = generateString(8)

      const data: StorageDataDefinition = {name: '', players: [], uuid}
      for (const [key, value] of formData) {
        if (key === 'tournament') {
          data.name = value as string
        } else {
          data.players.push({id: key, value: value as string})
        }
      }

      setStorageData(data)
      const roundOne = firstRoundGenerator(data.players)
      await createTournamnet({uuid, roundOne})

      push(ROUTES.ROOT)
    } catch (error) {
      // Handle error if necessary
      console.error(error)
    } finally {
      setIsLoading(false) // Set loading to false when the request completes
    }
  }

  return (
    <>
      <Header title='Nowy turniej'/>
      <main >
      <form onSubmit={onSubmit} className="flex flex-col justify-between gap-8 p-6">

        <h2>Wpisz nazwę turnieju i nazwiska zawodników</h2>
        <Input label="Nazwa turnieju" name='tournament'/>
        <h3>Zawodnicy</h3>
        <div className="grid grid-flow-col grid-cols-3 grid-rows-6 gap-4">
          {usersArray.map(user =>  <Input name={`player-${user}`} label={`Zawodnik ${user}`} key={`player-${user}`}/>)}
        </div>
        <Button text="Stwórz nowy turniej" type="submit"/>
        </form>
     </main>
    </>
  )
}