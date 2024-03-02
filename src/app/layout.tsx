import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import Drawer from "./drawer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aktiv administrador",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Drawer/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
