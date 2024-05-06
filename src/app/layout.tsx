import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daily Tips",
  description: "Get daily football tips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body data-theme="fantasy" className={inter.className}>
        <Navbar />
        <div className="mx-auto overflow-y max-w-6xl text-2xl">
          {children}
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
``