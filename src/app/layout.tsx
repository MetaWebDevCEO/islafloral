import type { Metadata } from "next";
import { Geist, Geist_Mono, Pinyon_Script, Playfair_Display } from "next/font/google";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Footer from "../components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pinyonScript = Pinyon_Script({
  weight: "400",
  variable: "--font-pinyon",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Isla Floral",
  description: "Empresa trasnacionale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pinyonScript.variable} ${playfairDisplay.variable} antialiased`}
      >
        <Banner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
