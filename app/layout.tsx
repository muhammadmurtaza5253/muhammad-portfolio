import type { Metadata } from "next";
import { GlowingCursor } from "./components/GlowingCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Murtaza — Software Engineer",
  description:
    "Software Engineer based in the United States. Building reliable systems and clean interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body className="antialiased">
        {children}
        <GlowingCursor />
      </body>
    </html>
  );
}
