import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "./components/FireFliesBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Eternal Vinny",
  description: "Portfolio website of Vinayak Arora - Full Stack Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(inter.className, "bg-background text-foreground z-10")}
      >
        {children}
        <FireFliesBackground />
      </body>
    </html>
  );
}
