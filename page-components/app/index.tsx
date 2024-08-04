"use client";

import { Button } from "@/components/button";
import { Modal } from "@/components/modal";
import { ROUTES } from "@/utils/route-definition";
import { getStorageData } from "@/utils/storage";
import Image from "next/image";
import { useState } from "react";

export const App = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const currentTournament = getStorageData();
  const hasActiveTournament = !!currentTournament?.uuid;

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
        {hasActiveTournament && (
          <div className="flex items-center justify-between gap-8 p-6">
            <h2>Aktualny turniej: </h2>
            <h2>{currentTournament.name}</h2>
          </div>
        )}

        <div className="flex items-center gap-8 p-6 justify-center">
          {hasActiveTournament && (
            <>
              <Button text="Kontynuuj" href={ROUTES.TOURNAMENT} />
              <Button text="Admin" href={ROUTES.ADMIN} variant="secondary" />
            </>
          )}
          <Button
            text="Nowy turniej"
            variant={hasActiveTournament ? "secondary" : "primary"}
            onClick={
              hasActiveTournament ? () => setIsModalOpened(true) : undefined
            }
            href={!hasActiveTournament ? ROUTES.NEW : undefined}
          />
        </div>
      </main>
      {isModalOpened && (
        <Modal
          primaryText="Nowy turniej"
          secondaryText="Wróć"
          secondaryAction={() => setIsModalOpened(false)}
          primaryAction={ROUTES.NEW}
          title={"Rozpocznij Nowy Turniej"}
          description="Napewno chcesz rozpocząć nowy turniej? Poprzedni zostanie wtedy usunięty!"
        />
      )}
    </>
  );
};
