import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/outfit";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Irene's Portfolio",
  description: "Made with Love and Tears",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Font Awesome CDN for social icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-p/w1JQyUOgoZbd3Uy3a1nPqOTa1z2cEyZW7Yz1tW3//pA5fsEOBsjEK7a67RK4EghCEog6gk3o3Fw9TLnhzZhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>

      <body className="font-outfit transition-all antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Navbar */}
          <nav
            className="sticky top-0 z-50 w-full px-6 py-3 backdrop-blur-md shadow-md border-b border-gray-200 dark:border-white/10
            bg-gradient-to-r from-[#CBDCEB] via-[#608BC1] to-[#133E87]
            dark:from-[#1c2e4a] dark:via-[#2c4369] dark:to-[#102445]
            rounded-b-2xl transition-all duration-300"
          >
            <div className="flex justify-between items-center max-w-7xl mx-auto">
            <h1 className="text-xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 text-transparent bg-clip-text animate-text font-bold">
              Veronica Irene
            </h1>
              <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white dark:text-white">
                <a href="#about" className="hover:text-pink-400 transition">
                  About Me
                </a>
                <a href="#projects" className="hover:text-purple-400 transition">
                  Project
                </a>
                <a href="#skills" className="hover:text-blue-400 transition">
                  Skills
                </a>
                <a href="#certification" className="hover:text-rose-400 transition">
                  Certification
                </a>
                <a href="#awards" className="hover:text-teal-400 transition">
                  Awards
                </a>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="bg-lightBG text-black dark:bg-darkBG dark:text-white transition-colors duration-300 min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
