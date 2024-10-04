
import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josefin-sans",
});

export const metadata = {
  title: "Pradeep Kumavat - Portfolio",
  description: "Portfolio website",
  icons: {
    icon: "/resume.png", // Path to the favicon in the public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefinSans.variable} font-sans overflow-x-hidden`}>
      <body className={`${josefinSans.className} overflow-x-hidden`}>
        <div className="relative min-h-screen flex flex-col">
          <div className="flex-grow flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
