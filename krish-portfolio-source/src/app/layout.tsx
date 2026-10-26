import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const archivo = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "KRISH PANCHAL — Creative Developer & Engineer",
  description:
    "Portfolio of Krish Panchal — Computer Engineering student, hackathon team leader and front-end developer building products like EcoVision, UrbanFix and the Manas Charitable Trust website.",
  keywords: [
    "Krish Panchal",
    "Portfolio",
    "Creative Developer",
    "Front-end Developer",
    "Computer Engineering",
    "Hackathon",
    "React",
    "EcoVision",
    "UrbanFix",
    "Manas Charitable Trust",
  ],
  authors: [{ name: "Krish Panchal" }],
  icons: {
    icon: "/characters/panther.jpg",
  },
  openGraph: {
    title: "KRISH PANCHAL — Creative Developer & Engineer",
    description:
      "Computer engineering student. Hackathon team leader. Builder of EcoVision, UrbanFix & the Manas Charitable Trust site.",
    siteName: "Krish Panchal Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${archivo.variable} ${grotesk.variable} ${jetbrains.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
