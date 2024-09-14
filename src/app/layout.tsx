import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Josefin_Sans } from '@next/font/google'
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const josefinSans = Josefin_Sans({ 
  weight: '400', // Regular 400 weight
  subsets: ['latin'], // Define the subset, e.g., 'latin'
  display: 'swap', // Optional for better font rendering performance
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <Head>
        <title>Pradeep Kumavat - Portfolio</title>
        <meta name="description" content="Portfolio website" />
      </Head>
      <body
        className={`josefinSans.className`}
      >
        <div>
          <Navbar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
 