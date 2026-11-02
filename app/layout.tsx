import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soko House — Made of here. Worn everywhere.",
  description: "A contemporary expression of African identity, culture and everyday style.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}