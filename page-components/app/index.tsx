'use client';

import { Button } from "@/components/button";
import { Modal } from "@/components/modal";
import { ROUTES } from "@/utils/route-definition";
import Image from "next/image";
import { useState } from "react";

export const App = () => {
  const [isModalOpened, setIsModalOpened] = useState(false)

  return (
    <>
      <header className="flex flex-col items-center justify-between gap-8 p-6">
        <Image
          src="/logo.svg"
          width={300}
          height={300}
          alt="Efekt Perła Wschodu"
        />
        <h1>Wielki turniej gorących pytań</h1>
      </header>
      <main className="p-24 w-1/2	m-auto">
        <div className="flex items-center justify-between gap-8 p-6">
          <h2>Aktualny turniej: </h2>
          <h2>Efekt niedziela</h2>
        </div>
        <div className="flex items-center gap-8 p-6 justify-center">
          <Button text='Kontynuuj' href={ROUTES.TOURNAMENT} />
          <Button text='Nowy turniej' variant='secondary' onClick={() => setIsModalOpened(true)} />
        </div>
      </main>
      {isModalOpened && <Modal primaryText='Nowy turniej' secondaryText="Wróć" secondaryAction={() => setIsModalOpened(false)} primaryAction={ROUTES.NEW} title={'Rozpocznij Nowy Turniej'} description='Napewno chcesz rozpocząć nowy turniej? Poprzedni zostanie wtedy usunięty!' />}
    </>
  )
}