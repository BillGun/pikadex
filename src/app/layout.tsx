import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pikadex",
  description: "Your one stop Pokémon information!",
  metadataBase: new URL(process.env.METADATA_BASE || ""),
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
