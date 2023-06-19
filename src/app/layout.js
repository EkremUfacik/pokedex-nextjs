import Navbar from "@/components/Navbar";
import "./globals.css";
import { Comfortaa } from "next/font/google";
import Providers from "./providers";

const inter = Comfortaa({
  subsets: ["latin"],
});

export const metadata = {
  title: "Pokedex",
  description: "Pokemons from all generations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="bg-white dark:bg-violet-950 min-h-screen transition-all duration-300">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
