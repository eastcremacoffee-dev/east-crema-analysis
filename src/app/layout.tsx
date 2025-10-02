import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "East Crema - Análisis de Competidores",
  description: "Plataforma de análisis inteligente de competidores del sector cafetero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
