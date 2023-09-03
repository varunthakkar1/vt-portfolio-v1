import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Inter } from "next/font/google";

const monstserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Varun Thakkar",
  description: "Designed by Varun Thakkar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${monstserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
