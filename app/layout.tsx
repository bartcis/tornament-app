import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Perła Wschodu - Turniej gorących pytań",
  description: "Zostań mistrzem wystąpień improwizowanych!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}</body>
    </html>
  );
}
