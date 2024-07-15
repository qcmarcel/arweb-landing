import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/common/Header";
import { HeroSection } from "@/components/sections/Hero";
import { PricingSection } from "@/components/sections/Pricing";

import { AdvertisingSection, EthicsSection, ServicesSection, TechnicalServiceSection } from "@/components";

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
        <Header />
        <main>
          <div>
            <HeroSection />
            <ServicesSection />
            <EthicsSection />
            <PricingSection />
            <AdvertisingSection />
            <TechnicalServiceSection />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
