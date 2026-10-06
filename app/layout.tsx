import type { Metadata } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Space_Mono } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Neelima Kesanakurthi — Portfolio",
  description:
    "Computer Science undergraduate focused on Python, SQL, data and Artificial Intelligence. Projects, internships and certifications.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${cormorant.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-serif text-foreground">{children}</body>
    </html>
  );
}
