"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import { Clock, Award, Building2 } from 'lucide-react';
import {MoveRight} from 'lucide-react'
import Link from "next/link";
import InquireButton from "../InquireButton";


const Video = () => {
  const [isOpen, setOpen] = useState(false);

  const details = [
    {
      icon: <Clock className="w-6 h-6 text-green-600" />,
      label: "Duration",
      value: "2 Years Full-Time"
    },
    {
      icon: <Award className="w-6 h-6 text-green-600" />,
      label: "Accreditation",
      value: "AICTE-Approved"
    },
    {
      icon: <Building2 className="w-6 h-6 text-green-600" />,
      label: "Mode",
      value: "On-Campus Learning"
    }
  ];


  return (
    <section id="first-section" className="relative z-10 py-16 md:py-20 lg:py-28 bg-[url(/images/video/program-overview.png)] bg-cover bg-center bg-no-repeat" 
    
    >
      {/* <div className="container">
        <SectionTitle
          title="Program Overview"
          paragraph="MBA in Investment Banking – A Deep Dive into the Financial World"
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <img  src="/images/video/video.jpg" alt="video image" fill />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  <button
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div> */}
      <div  className="container">
        {/* Header */}
        <h2 className="text-center lg:text-left mb-4 text-3xl md:text-4xl lg:text-5xl font-bold !leading-tight text-white dark:text-white sm:text-4xl md:text-[45px]">
          Program Overview
        </h2>

        {/* Title */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1 w-full">
          <h3 className="text-center lg:text-left text-lg font-semibold !leading-relaxed text-white md:text-lg lg:text-2xl lg:mb-6">
          MBA in Investment Banking – A Deep Dive into the Financial World
        </h3>
          </div>
        {/* Details Grid */}
        <div data-aos="fade-right"  className="mb-6 mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          
          {/* New Ui design */}

         

      <div className="w-full max-w-3xl mx-auto p-4 space-y-4">
      <div className="bg-gray-200 p-2 lg:p-3 flex items-center gap-4">
        <div className="bg-white p-2 border-primary border-2">
          <Clock className="w-5 lg:w-8 h-5 lg:h-8 text-[#8bc34a]" />
        </div>
        <div>
          <h3 className="text-gray-600 text-base lg:text-xl font-semibold">
            Duration: 2 Years Full-Time
          </h3>
        </div>
      </div>

      <div className="bg-gray-200 p-3 flex items-center gap-4">
        <div className="bg-white p-2 border-primary border-2">
          <Award className="w-5 lg:w-8 h-5 lg:h-8 text-[#8bc34a]" />
        </div>
        <div>
          <h3 className="text-gray-600 text-base lg:text-xl font-semibold">
            Accreditation: AICTE-Approved
          </h3>
        </div>
      </div>

      <div className="bg-gray-200 p-3 flex items-center gap-4">
        <div className="bg-white p-2 border-primary border-2">
          <Building2 className="w-5 lg:w-8 h-5 lg:h-8 text-[#8bc34a]" />
        </div>
        <div>
          <h3 className="text-gray-600 text-base lg:text-xl font-semibold">
            Mode: On-Campus Learning
          </h3>
        </div>
      </div>
    </div>
          
        </div>
        {/* Campuses */}
        <div data-aos="fade-right" className="mb-6">
          <h4 className="text-center lg:text-left mb-2 text-base lg:text-2xl font-medium text-white ">Campuses</h4>
          <div className="flex justify-start lg:justify-start flex-wrap gap-2 lg:gap-3">
            {["Mumbai", "Navi Mumbai", "Goa", "Bangalore"].map((campus) => (
              <span
                key={campus}
                className=" bg-[#0B1D2E] px-3 lg:px-8 py-3 text-base lg:text-xl font-semibold text-white shadow-md"
              >
                {campus}
              </span>
            ))}
          </div>
        </div>
        {/* Partner Institutions */}
        <div data-aos="fade-right" className="mb-3">
          <h4 className="mb-2  text-base lg:text-2xl font-medium text-white text-center lg:text-left">
            Partner Institutions
          </h4>
          {/* <div className="flex flex-wrap gap-3">
            {["OSB", "Terna"].map((partner) => (
              <span
                key={partner}
                className="bg-primary px-8 py-3 text-xl font-semibold text-[#fff]"

              >
                {partner}
              </span>
            ))}
          </div> */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
           <div className="bg-white/70 p-5 rounded-md align-center">
           <Image   src="/images/hero/TGBS-Logo-01.png" alt="Terna" className="grayscale"  
           width={250} height={150}
          />
           </div>
           <div className="bg-white/70 p-5 rounded-md">
           <Image  src="/images/hero/osb.png" alt="Terna"  className="grayscale" 
           width={250} height={150}
          />
           </div>
           </div>
         
        </div>
        <Link
        data-aos="fade-right"
            href="#contact"
            className="flex items-center justify-center lg:justify-start mx-auto lg:mx-0 rounded-sm bg-primary w-[180px] lg:w-[290px] text-center mt-6 px-4 lg:px-16 py-2 lg:py-4 text-base lg:text-xl font-semibold text-white duration-300 ease-in-out hover:bg-black/90"
          >
            Enquire Now <span><MoveRight className="text-lg text-white ml-3" /></span>
          </Link>
           {/* <InquireButton /> */}
      </div>

      {/* <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      /> */}

      {/* <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/program-overview.png)] bg-cover  bg-center bg-no-repeat"></div> */}
      {/* <div className="absolute bottom-0 left-0 right-0 z-[-1] min-h-screen w-full bg-[url(/images/video/program-overview.png)] bg-cover bg-center bg-no-repeat"></div> */}

      {/* <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full">
  <img
    src="/images/video/program-overview.png"
    alt="Program Overview"
    className="h-full w-full object-cover"
  />
</div> */}
    </section>
  );
};

export default Video;
