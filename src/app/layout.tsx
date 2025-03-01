"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Roboto, Raleway } from "next/font/google"; // Import both fonts
import "../styles/index.css";
import InquireModal from "@/components/InquireModal";
import { ModalProvider } from "@/components/ModalContext";
import { Providers } from "./providers";
import StickyFooter from "@/components/StickyFooter";
import WOW from "wowjs";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] }); // Configure Roboto
// const raleway = Raleway({ subsets: ["latin"], weight: ["400", "600", "800"] }); 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: true, // Only animate once
      offset: 100, // Offset before animation starts
      easing: "ease-in-out", // Easing function
    });
  }, []);

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FFF] ${roboto.className}`}>
        <ModalProvider>
          
          <Header />
          <main className={roboto.className}>{children}</main>{" "}
          {/* Apply Raleway to titles/headers */}
          <InquireModal />
          <ScrollToTop />
          
        </ModalProvider>
      </body>
    </html>
  );
}
