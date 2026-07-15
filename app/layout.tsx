import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/outfit";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import BubbleBackground from "./Components/BubbleBackground/BubbleBackground";
import Navbar from "./Components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Irene's Portfolio",
  description: "Made with Love and Tears",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-outfit antialiased min-h-screen bg-cream dark:bg-dark-bg transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <BubbleBackground count={18} />
          <Navbar />

          {/* Main Content */}
          <main className="relative z-10 min-h-screen text-black dark:text-white transition-colors duration-300">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
