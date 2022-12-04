import {
  Abril_Fatface,
  Anybody,
  Frank_Ruhl_Libre,
  Inter,
  Permanent_Marker,
} from "@next/font/google";
import localFont from "@next/font/local";
import { Footer } from "@open-system/shared-ui-feat-layout";
import clsx from "clsx";
import React from "react";
import "../style/globals.css";
import Header from "./Header";

const melody = localFont({
  variable: "--font-melody",
  src: "../../../../assets/fonts/BLMelody-Bold.woff2",
});

const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  weight: "400",
});

const abrilFatface = Abril_Fatface({
  variable: "--font-abril-fatface",
  weight: "400",
});

const anybody = Anybody({
  variable: "--font-anybody",
});

const inter = Inter({
  variable: "--font-inter",
});

const frankRuhlLibre = Frank_Ruhl_Libre({
  variable: "--font-frank-ruhl-libre",
  weight: "700",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        melody.variable,
        inter.variable,
        anybody.variable,
        frankRuhlLibre.variable,
        abrilFatface.variable,
        permanentMarker.variable,
        "bg-bg-1"
      )}>
      <head />
      <Header />
      <body className="relative h-fit min-h-screen antialiased">
        <div className="h-fit w-full">{children}</div>
      </body>
      <Footer />
    </html>
  );
}
