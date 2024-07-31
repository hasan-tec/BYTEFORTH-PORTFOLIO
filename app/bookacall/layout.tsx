import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import { Toaster } from "@/components/ui/toaster"; // Import the Toaster component

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Book A Call",
  description: "Scale your brand with video",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans cursor-none`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Toaster /> {/* Add the Toaster component here */}
      </body>
    </html>
  );
}
