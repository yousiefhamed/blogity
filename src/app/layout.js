import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GradientDecor from "./components/GradientDecor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-100 overflow-x-hidden`}>
        <GradientDecor />
        <Navbar />
        <main className="w-full max-w-screen-lg mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
