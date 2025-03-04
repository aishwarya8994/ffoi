"use client"
import React, {useEffect,useState} from "react";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import CareerPaths from "@/components/CareerPaths";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import CurriculumSection from "@/components/CurriculumSection";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HiringPartnersAlt from "@/components/HiringPartnersAlt";
import Pricing from "@/components/Pricing";
import ProgramFeatures from "@/components/ProgramFeatures";
import SplitSection from "@/components/SplitSection";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import StickyFooter from "@/components/StickyFooter";
import Footer from "@/components/Footer";
import MasterInvestment from "@/components/MasterInvestment";
import CareerPath2 from "@/components/CareerPath2";
import Overview from "@/components/Overview";
import Leaders from "@/components/Leaders";
import Alumni from "@/components/Alumni";
import EnquiryForm from "@/components/EnquiryForm";
import { ModalProvider } from "@/components/ModalContext";

// export const metadata: Metadata = {
//   title: "Finance Forum of India",
//   description: "Build Your Future in Global Finance!",
 
// };

export default function Home() {

  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const secondSection = document.getElementById("second-section");
      const triggerPoint = secondSection?.offsetTop || 600;

      if (window.scrollY >= triggerPoint) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
     
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Overview />
      <CurriculumSection />
      <MasterInvestment />
      <Testimonials />
      <HiringPartnersAlt />
      {/* <Leaders/> */}
      {/* <CareerPath2 /> */}
      <Alumni/>
      <Contact/>
      <Footer />
      <EnquiryForm/>
      {/* <StickyFooter/> */}
     
    </>
  );
}
