"use client";
import { Outfit, Ovo } from "next/font/google";
import ThemeProvider from "./components/theme-provider";
import { useEffect, useState } from "react";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

// export const metadata = {
//   title: "Portfolio - Zakaria Moussammi",
//   description: "",
// };

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className="flex items-center justify-center h-screen bg-gray-100">
          <div className="text-center">
            <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-500 border-solid mx-auto"></div>
            <p className="mt-4 text-lg text-gray-700">Loading...</p>
          </div>
        </body>
      </html>
    );

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8
      overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
