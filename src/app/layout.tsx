import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ícaro Harry | Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 10+ years crafting exceptional web experiences. Co-founder of Codante.io. React, TypeScript, Next.js specialist.",
  openGraph: {
    title: "Ícaro Harry | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 10+ years crafting exceptional web experiences. Co-founder of Codante.io.",
    url: "https://icaro.io",
    siteName: "Ícaro Harry",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ícaro Harry | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 10+ years crafting exceptional web experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
