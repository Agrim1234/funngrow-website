import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Smart Companies find Smart Talent – Funngro Teenlancer",
  description: "Web app for Teenlancing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-dark-black m-0 p-0 w-screen'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
