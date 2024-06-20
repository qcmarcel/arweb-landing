import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/common/Header";
import { HeroSection } from "@/components/sections/Hero";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ar Web Studio - Somos todo en la web",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <main>
          <Header />
          <HeroSection />
          {children}
        </main>
      </body>
    </html>
  );
}
