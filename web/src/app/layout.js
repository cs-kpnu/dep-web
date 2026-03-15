import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

const geistInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistInter.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
