import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/common/Header";

const rubik = Rubik({ subsets: ["latin"] });

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
      <body className={rubik.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
