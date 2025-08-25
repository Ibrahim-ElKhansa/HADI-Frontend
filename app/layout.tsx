import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "../styles/globals.scss";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HADI | Health and Disease Identification",
  description: "AI-powered Health and Disease Identification System",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${roboto.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}