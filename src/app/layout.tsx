"use client";
import React, {useEffect} from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Roboto, Raleway } from "next/font/google"; // Import both fonts
import "../styles/index.css";
// import 'primeflex/primeflex.css';

import WOW from "wowjs";
import "animate.css";
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] }); // Configure Roboto
const raleway = Raleway({ subsets: ["latin"], weight: ["400", "600", "800"] }); // Configure Raleway

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FFF] dark:bg-black ${roboto.className}`}>
        <Providers>
          <Header />
          <main className={raleway.className}>{children}</main> {/* Apply Raleway to titles/headers */}
          <StickyFooter />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import StickyFooter from "@/components/StickyFooter";

