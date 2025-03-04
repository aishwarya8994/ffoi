"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BookOpen, LineChart, Monitor, Target, Gem } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Overview = () => {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Industry-aligned curriculum with global case studies",
      imageUrl: "/images/hero/industry-aligned.jpg",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Hands-on financial modeling & valuation training",
      imageUrl: "/images/hero/financial-modeling.jpg",
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Live market simulations & terminal access",
      imageUrl: "/images/hero/live-market-simulation.jpg",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "100% Placement Assistance with top IB firms",
      imageUrl: "/images/hero/placement-img.jpg",
    },
    {
      icon: <Gem className="h-6 w-6" />,
      title: "Practical projects in M&A, IPOs, and Portfolio Management",
      imageUrl: "/images/hero/practical-projects.jpg",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <section className="bg-gray-50 py-6 lg:py-16">
     <div className='container'>
     <div className="mx-auto max-w-7xl lg:px-4">
        {/* Header */}
        <div className="relative mb-6 lg:mb-16">
          <h2 className="mb-4 lg:mb-8 text-center text-2xl font-bold leading-tight text-[#333333] md:text-4xl lg:text-5xl">
            What Sets Us Apart?
          </h2>
          {/* <div className="absolute h-px w-full bg-gray-300 top-1/2 left-0 -z-0" /> */}
        </div>

        {/* Features Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative ${
                index === features.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <img
                  src={feature.imageUrl}
                  alt={feature.title}
                  className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                {React.cloneElement(feature.icon, { className: "text-white" })}
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg -mt-16 ml-8 mr-8 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                <p className="text-gray-900 font-bold text-lg leading-snug">
                  {feature.title}
                </p>
              </div>
            </div>
          ))}
        </div> */}
        {/* <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="lg:w-[calc(33.33%-16px) group relative w-full md:w-[calc(50%-16px)]"
            >
              <div className="mb-4 aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={feature.imageUrl}
                  alt={feature.title}
                  className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute left-4 top-4 rounded-full bg-primary/90 p-2 shadow-lg backdrop-blur-sm lg:p-3">
                {React.cloneElement(feature.icon, { className: "text-white" })}
              </div>
              <div className="relative z-10 -mt-16 ml-8 mr-8 rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                <p className="text-center text-base font-bold leading-snug text-gray-900 lg:text-[1.6rem]">
                  {feature.title}
                </p>
              </div>
            </div>
          ))}
        </div> */}
        {isMobile ? (
        <Swiper
          modules={[Autoplay,Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, // Time between slides in ms (3s)
            disableOnInteraction: false, // Keep autoplay running after interaction
          }}
          loop={true} // Loop slides continuously
          
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div data-aos="fade-down" className="group relative w-full">
              <div className="mb-4 aspect-[4/3] overflow-hidden rounded-lg relative group">
  <Image
    src={feature.imageUrl}
    alt={feature.title}
    fill
    className="object-cover grayscale transition-transform duration-500 hover:grayscale-0 group-hover:scale-105"
  />
</div>
                <div className="absolute left-4 top-4 rounded-full bg-primary/90 p-2 shadow-lg backdrop-blur-sm lg:p-3">
                  {React.cloneElement(feature.icon, { className: "text-white" })}
                </div>
                <div className="relative z-10 -mt-16 mx-8 rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                  <p className="text-center text-base font-bold leading-snug text-gray-900 lg:text-[1.6rem]">
                    {feature.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div  className="flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <div
            data-aos="fade-down"
              key={index}
              className="lg:w-[calc(33.33%-16px) group relative w-full md:w-[calc(50%-16px)]"
            >
              <div className="mb-4 aspect-[4/3] overflow-hidden rounded-lg group">
  <Image
    src={feature.imageUrl}
    alt={feature.title}
    width={500} // Adjust as needed
    height={400} // Adjust as needed
    className="w-full h-full object-cover grayscale transition-transform duration-500 hover:grayscale-0 group-hover:scale-105"
  />
</div>

              <div className="absolute left-4 top-4 rounded-full bg-primary/90 p-2 shadow-lg backdrop-blur-sm lg:p-3">
                {React.cloneElement(feature.icon, { className: "text-white" })}
              </div>
              <div className="relative z-10 -mt-16 mx-8 rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                <p className="text-center text-base font-bold leading-snug text-gray-900 lg:text-[1.6rem]">
                  {feature.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

        {/* Bottom Accent */}
        {/* <div className="mt-16 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-indigo-200" />
            <div className="w-2 h-2 rounded-full bg-indigo-400" />
            <div className="w-2 h-2 rounded-full bg-indigo-600" />
          </div>
        </div> */}
      </div>
     </div>
    </section>
  );
};

export default Overview;
