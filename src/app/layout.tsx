import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robin - Frontend Developer",
  description: "Portfolio personal y blog de desarrollo frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      {/* <body className={inter.className}>{children}</body> */}
      <body className="bg-white">{children}</body>
    </html>
  );
}
