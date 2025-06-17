import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alter - AI-Powered Marketing Automation",
  description: "Automate. Engage. Convert. Powered by AI. Your journey to AI-powered marketing starts here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          minHeight: "100vh",
          background: "none",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "fixed",
            zIndex: -1,
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
  
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 1,
          }}
        />
        {children}
      </body>
    </html>
  );
}
