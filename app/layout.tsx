import type { Metadata } from "next";
import "./globals.css";
import { connectToMongoDB } from "@/lib/db";
import { GameContextProvider } from "@/utils/context/current-game";

export const metadata: Metadata = {
  title: "Perła Wschodu - Turniej gorących pytań",
  description: "Zostań mistrzem wystąpień improwizowanych!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  connectToMongoDB();

  return (
    <html lang="en">
      <body className="min-h-screen">
        <GameContextProvider>{children}</GameContextProvider>
      </body>
    </html>
  );
}
