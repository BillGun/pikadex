import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Pikadex",
    default: "Pikadex",
  },
  description: "Your one stop Pokémon information!",
  generator: "Next.js",
  creator: "BillGun",
  authors: [{ name: "BillGun", url: "https://github.com/BillGun" }],
  applicationName: "Pikadex",
  keywords: [
    "Pokemon",
    "Pokémon",
    "Pokédex",
    "Pokedex",
    "Next.js",
    "Tailwind",
    "Typescript",
  ],
  metadataBase: new URL(process.env.METADATA_BASE || ""),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen w-full bg-themeLight ${montserrat.className}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
