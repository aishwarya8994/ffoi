"use client";
import React, {useEffect, useState} from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Roboto, Raleway } from "next/font/google"; // Import both fonts
import "../styles/index.css";
// import 'primeflex/primeflex.css';
import InquireModal from "@/components/InquireModal";
import { ModalProvider } from "@/components/ModalContext";

import WOW from "wowjs";
import "animate.css";
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] }); // Configure Roboto
const raleway = Raleway({ subsets: ["latin"], weight: ["400", "600", "800"] }); // Configure Raleway

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FFF] ${roboto.className}`}>
        <ModalProvider>
          <Header />
          <main className={raleway.className}>{children}</main> {/* Apply Raleway to titles/headers */}
          {/* <StickyFooter /> */}
          <InquireModal />
          <ScrollToTop />
        </ModalProvider>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import StickyFooter from "@/components/StickyFooter";

