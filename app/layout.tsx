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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={`${inter.variable} ${monstserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
