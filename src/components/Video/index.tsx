"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import { Clock, Award, Building2 } from "lucide-react";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import InquireButton from "../InquireButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const logos = [
  "/clg-1.png",
  "/clg-2.png",
  "/clg-3.png",
  "/clg-4.png",
  "/clg-5.png",
  "/images/hero/TGBS-Logo-01.png",
  "/images/hero/osb.png",
];

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  const details = [
    {
      icon: <Clock className="h-6 w-6 text-green-600" />,
      label: "Duration",
      value: "2 Years Full-Time",
    },
    {
      icon: <Award className="h-6 w-6 text-green-600" />,
      label: "Accreditation",
      value: "AICTE-Approved",
    },
    {
      icon: <Building2 className="h-6 w-6 text-green-600" />,
      label: "Mode",
      value: "On-Campus Learning",
    },
  ];

  return (
    <section
      id="first-section"
      className="relative z-50  py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        {/* Header */}
        <h2 className="mb-4 text-center text-3xl font-bold !leading-tight text-white dark:text-white sm:text-4xl md:text-4xl md:text-[45px] lg:text-left lg:text-5xl">
          Program Overview
        </h2>

        {/* Title */}
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1">
          <h3 className="text-center text-lg font-semibold !leading-relaxed text-white md:text-lg lg:mb-6 lg:text-left lg:text-2xl">
            MBA in Investment Banking – A Deep Dive into the Financial World
          </h3>
        </div>
        {/* Details Grid */}
        <div
          data-aos="fade-right"
          className="mb-6 mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* New Ui design */}

          <div className="mx-auto w-full max-w-3xl space-y-4 p-4">
            <div className="flex items-center gap-4 bg-gray-200 p-2 lg:p-3">
              <div className="border-2 border-primary bg-white p-2">
                <Clock className="h-5 w-5 text-[#8bc34a] lg:h-8 lg:w-8" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-600 lg:text-xl">
                  Duration: 2 Years Full-Time
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-200 p-3">
              <div className="border-2 border-primary bg-white p-2">
                <Award className="h-5 w-5 text-[#8bc34a] lg:h-8 lg:w-8" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-600 lg:text-xl">
                  Accreditation: AICTE-Approved
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-200 p-3">
              <div className="border-2 border-primary bg-white p-2">
                <Building2 className="h-5 w-5 text-[#8bc34a] lg:h-8 lg:w-8" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-600 lg:text-xl">
                  Mode: On-Campus Learning
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* Campuses */}
        <div data-aos="fade-right" className="mb-6">
          <h4 className="mb-2 text-center text-base font-medium text-white lg:text-left lg:text-2xl ">
            Campuses
          </h4>
          <div className="flex flex-wrap justify-center gap-2 lg:justify-start lg:gap-3">
            {["Mumbai", "Navi Mumbai", "Goa", "Bangalore"].map((campus) => (
              <span
                key={campus}
                className=" bg-[#0B1D2E] px-2 py-2 text-sm font-medium text-white shadow-md lg:px-8 lg:py-3 lg:text-xl lg:font-semibold"
              >
                {campus}
              </span>
            ))}
          </div>
        </div>
        {/* Partner Institutions */}
        <div data-aos="fade-right" className="mb-3">
          <h4 className="mb-2  text-center text-base font-medium text-white lg:text-left lg:text-2xl">
            Partner Institutions
          </h4>
          
         
          <div className="w-full ">
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              loop={true}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 4 },
              }}
              modules={[Autoplay]}
              className="w-full"
            >
              {logos.map((logo, index) => (
                <SwiperSlide
                  key={index}
                  className="align-center flex justify-center rounded-md bg-white/70"
                >
                  <div className="flex h-[120px] w-48 items-center justify-center">
                    <Image
                      src={logo}
                      alt={`Logo ${index + 1}`}
                      className="object-contain p-2 grayscale hover:grayscale-0"
                      fill
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <Link
          data-aos="fade-right"
          href="#contact"
          className="mx-auto mt-6 flex w-[180px] items-center justify-center rounded-sm bg-primary px-4 py-2 text-center text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 lg:mx-0 lg:w-[290px] lg:justify-start lg:px-16 lg:py-4 lg:text-xl"
        >
          Enquire Now{" "}
          <span>
            <MoveRight className="ml-3 text-lg text-white" />
          </span>
        </Link>
        {/* <InquireButton /> */}
      </div>

      

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/program-overview.png)] bg-cover bg-center bg-no-repeat"></div>
      {/* <div className="absolute bottom-0 left-0 right-0 z-[-1] min-h-screen w-full bg-[url(/images/video/program-overview.png)] bg-cover bg-center bg-no-repeat"></div> */}

     
    </section>
  );
};

export default Video;
