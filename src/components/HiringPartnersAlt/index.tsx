"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Globe2, Building2, ArrowRight, Briefcase } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css/navigation';

const HiringPartnersAlt = () => {
  const [activeTab, setActiveTab] = useState("global");

  // const banks = {
  //   global: [
  //     {
  //       name: "J.P. Morgan",
  //       logo: "https://cdn.prod.website-files.com/63f6e52346a353ca1752970e/644fb7a5f64fb5cb87a5beaa_20230501T1259-9f1793fc-a440-492c-a2b5-c01eba32c7f4.jpeg",
  //     },
  //     {
  //       name: "Goldman Sachs",
  //       logo: "https://worldgbc.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/08/08135440/GSsignature_Blue.png",
  //     },
  //     {
  //       name: "Morgan Stanley",
  //       logo: "https://pbs.twimg.com/profile_images/1631347869687898142/ATwo7QZZ_400x400.jpg",
  //     },
  //     {
  //       name: "Bank of America",
  //       logo: "https://logos-world.net/wp-content/uploads/2020/11/Bank-of-America-Emblem.png",
  //     },
  //     {
  //       name: "Barclays",
  //       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaAMBzVwmCWxPtgjiI7i7X4vrHX7GcH9i0zQ&s",
  //     },
  //   ],
  //   india: [
  //     {
  //       name: "Kotak Mahindra",
  //       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0x-5XTuch9fn5z1DFeFeNUI7iaWTAsN9Bpg&s",
  //     },
  //     {
  //       name: "HDFC Bank",
  //       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsiMz-D2pGIen44gUk-84rgzGpeOzLuh3vgQ&s",
  //     },
  //     {
  //       name: "BNP Paribas",
  //       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiLoiOe8E7v5GQnEVMFBQes0_igRqgSTiM4Q&s",
  //     },
  //     {
  //       name: "ICICI Securities",
  //       logo: "https://companieslogo.com/img/orig/ISEC.NS_BIG-46531085.png?t=1720452992",
  //     },
  //     {
  //       name: "JM Financial",
  //       logo: "https://signup.jmfonline.in/assets/images/JM%20Logo-%20Blue%20Logo.png",
  //     },
  //   ],
  // };

  const bank2 = [
    {
      name: "J.P. Morgan",
      logo: "/images/global/Barclays-Logo.jpg",
    },
    {
      name: "Goldman Sachs",
      logo: "/images/global/BMO_Capital_Markets_logo.svg.png",
    },
    {
      name: "Morgan Stanley",
      logo: "/images/global/bofa_securities_lo2_rgb.jpg",
    },
    {
      name: "Bank of America",
      logo: "/images/global/Citigroup logo.jpg",
    },
    {
      name: "Barclays",
      logo: "/images/global/Deutsche-Bank-Emblem.png",
    },
    {
      name: "Kotak Mahindra",
      logo: "/images/global/evercore_wealth_management_llclogo.jpg",
    },
    {
      name: "HDFC Bank",
      logo: "/images/global/Goldman-Sachs-Logo.png",
    },
    {
      name: "BNP Paribas",
      logo: "/images/global/HSBC-Logo.png",
    },
    {
      name: "ICICI Securities",
      logo: "/images/global/images.png",
    },
    {
      name: "JM Financial",
      logo: "/images/global/Jefferies_logo.svg.png",
    },
    {
      name: "Lazard",
      logo: "/images/global/Lazard-Ltd-Logo.png",
    },
    {
      name: "Mitsubishi",
      logo: "/images/global/Mitsubishi_UFJ_Financial_Group.svg.png",
    },
    {
      name: "Mizuho",
      logo: "/images/global/Mizuho_logo.svg.png",
    },
    {
      name: "Morgan",
      logo: "/images/global/Morgan_Stanley_Logo_1.svg.png",
    },
    {
      name: "RBC-Capital-Markets",
      logo: "/images/global/RBC-Capital-Markets-official-logo.png",
    },
    {
      name: "UBS",
      logo: "/images/global/UBS-Logo.png",
    },
    {
      name: "Nomura",
      logo: "/images/global/Nomura_Holdings_logo.svg.png",
    },
    
   
    {
      name: "canara",
      logo: "/images/indian/canara.png",
    },
    {
      name: "motilal-oswal",
      logo: "/images/indian/motilal-oswal.webp",
    },
    {
      name: "Axisbank",
      logo: "/images/indian/Axisbank.png",
    },
    {
      name: "Axiscapital",
      logo: "/images/indian/Axiscapital.png",
    },
    {
      name: "bajajcapital",
      logo: "/images/indian/bajajcapital.png",
    },
    {
      name: "bnp",
      logo: "/images/indian/bnp.png",
    },
    {
      name: "centram",
      logo: "/images/indian/centram.jpg",
    },
    {
      name: "iifl",
      logo: "/images/indian/iifl.png",
    },
    {
      name: "edelweiss",
      logo: "/images/indian/edelweiss.png",
    },
    {
      name: "jmlogo",
      logo: "/images/indian/jmlogo.png",
    },
    {
      name: "kotak",
      logo: "/images/indian/kotak_investment_banking_cover.jpg",
    },
    {
      name: "piramal",
      logo: "/images/indian/piramal-finance-aiming-for-predictable-profitability-md.webp",
    },
  ];

  // Style Variations for different layouts
  const layouts = {
    // carousel: (
    //   <div className="overflow-x-auto pb-6">
    //     <div className="flex space-x-6 min-w-max px-4">
    //       {banks[activeTab].map((bank, index) => (
    //         <div
    //           key={index}
    //           className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 w-64"
    //         >
    //           <div className="h-20 flex items-center justify-center mb-4">
    //             <img
    //               src={bank.logo}
    //               alt={`${bank.name} logo`}
    //               className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
    //             />
    //           </div>
    //           <p className="text-center font-medium text-gray-800">{bank.name}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // ),
    // masonry: (
    //   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
    //     {banks[activeTab].map((bank, index) => (
    //       <div
    //         key={index}
    //         className={`group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300
    //           ${index % 2 === 0 ? 'transform translate-y-4' : ''}`}
    //       >
    //         <div className="h-16 flex items-center justify-center mb-4">
    //           <img
    //             src={bank.logo}
    //             alt={`${bank.name} logo`}
    //             className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
    //           />
    //         </div>
    //         <p className="text-center font-medium text-gray-800">{bank.name}</p>
    //       </div>
    //     ))}
    //   </div>
    // ),
    // cards: (
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {banks[activeTab].map((bank, index) => (
    //       <div
    //         key={index}
    //         className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 grayscale hover:grayscale-0 transition duration-300 ease-in-out"
    //       >
    //         {/* <div className="absolute top-4 right-4">
    //           <ArrowRight className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
    //         </div> */}
    //         <div className="h-24 flex items-center justify-center mb-6">
    //           <img
    //             src={bank.logo}
    //             alt={`${bank.name} logo`}
    //             className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 "
    //           />
    //         </div>
    //         <div className="text-center">
    //           <p className="font-semibold text-lg text-gray-900 mb-2">{bank.name}</p>
    //           <p className="text-sm text-gray-600">Leading Investment Bank</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // ),
    // list: (
    //   <div className="space-y-4">
    //     {banks[activeTab].map((bank, index) => (
    //       <div
    //         key={index}
    //         className="group flex items-center justify-between bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
    //       >
    //         <div className="flex items-center space-x-6">
    //           <div className="w-20 h-12">
    //             <img
    //               src={bank.logo}
    //               alt={`${bank.name} logo`}
    //               className="w-full h-full object-contain"
    //             />
    //           </div>
    //           <div>
    //             <p className="font-semibold text-gray-900">{bank.name}</p>
    //             <p className="text-sm text-gray-600">Investment Banking</p>
    //           </div>
    //         </div>
    //         <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all duration-300" />
    //       </div>
    //     ))}
    //   </div>
    // )
  };

  return (
    <section className="bg-white px-4 py-16 lg:bg-gray-50">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 text-center lg:mb-12">
          <div className="mb-4 flex items-center justify-center">
            {/* <Briefcase className="w-10 h-10 text-blue-600 mr-3" /> */}
            <h2 className="text-2xl font-bold text-[#333333] md:text-4xl lg:text-5xl">
              Launch Your Career with Global & Domestic Investment Banks
            </h2>
          </div>
          <p className="mt-2 text-sm text-gray-600  lg:text-xl">
            Top Hiring Firms
          </p>
        </div>

        {/* Tabs */}
        {/* <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full shadow-md p-1">
            <button
              onClick={() => setActiveTab('global')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300  ${
                activeTab === 'global'
                  ? 'bg-[#0B1D2E] text-white font-semibold'
                  : 'text-gray-600 font-semibold hover:text-[#0B1D2E]'
              }`}
            >
              Global Banks
            </button>
            <button
              onClick={() => setActiveTab('india')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'india'
                  ? 'bg-[#0B1D2E] text-white font-semibold'
                  : 'text-gray-600 font-semibold hover:text-[#0B1D2E]'
              }`}
            >
              Indian Banks
            </button>
          </div>
        </div> */}

        {/* Content */}
        {/* <div className="space-y-12">
          {layouts.carousel}
          {layouts.masonry}
          {layouts.cards}
          {layouts.list}
        </div> */}
        {/* Mobile View (Slider for sm & md screens) */}
        <div className="block lg:hidden">
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Autoplay,Pagination]}
            className="mySwiper"
            autoplay={{
              delay: 3000, // Time between slides in ms (3s)
              disableOnInteraction: false, // Keep autoplay running after interaction
            }}
            loop={true} // Loop slides continuously
          >
            {Array.from({ length: Math.ceil(bank2.length / 4) }).map((_, i) => (
              <SwiperSlide key={i}>
                <div className="grid grid-cols-2 gap-4 p-4">
                  {bank2.slice(i * 4, i * 4 + 4).map((bank, index) => (
                    <div
                      key={index}
                      className="group relative  p-2  grayscale transition-all duration-300  hover:grayscale-0"
                    >
                      <div className="flex h-20 items-center justify-center">
                        <img
                          src={bank.logo}
                          alt={`${bank.name} logo`}
                          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      {/* <div className="text-center">
                      <p className="mb-2 text-lg font-semibold text-gray-900">
                        {bank.name}
                      </p>
                    </div> */}
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* only cards section */}
        {/* Large Screen View (Keeps the existing layout) */}
        {/* <div className="hidden lg:grid grid-cols-4 gap-6">
          {bank2.map((bank, index) => (
            <div
              key={index}
              className="group relative rounded-xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg grayscale transition-all duration-300 hover:shadow-xl hover:grayscale-0"
            >
              <div className="mb-6 flex h-24 items-center justify-center">
                <img
                  src={bank.logo}
                  alt={`${bank.name} logo`}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <p className="mb-2 text-lg font-semibold text-gray-900">
                  {bank.name}
                </p>
               
              </div>
            </div>
          ))}
        </div> */}
        <div className="hidden lg:block">
          {/* <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Pagination, Navigation]}
            className="my-6"
          >
            {bank2.map((bank, index) => (
              <SwiperSlide key={index}>
                <div className="group relative rounded-xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg grayscale transition-all duration-300 hover:shadow-xl hover:grayscale-0">
                  <div className="mb-6 flex h-24 items-center justify-center">
                    <img
                      src={bank.logo}
                      alt={`${bank.name} logo`}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center">
                    <p className="mb-2 text-lg font-semibold text-gray-900">
                      {bank.name}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
          <Swiper
      slidesPerView={1}
      spaceBetween={20}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
        1536: { slidesPerView: 6 },
      }}
      // pagination={{ clickable: true }}
      navigation={true}
      autoplay={{ delay: 1000, disableOnInteraction: true }}
      modules={[Autoplay,Pagination, Navigation]}
      className="my-6"
    >
      {bank2.map((bank, index) => (
        <SwiperSlide key={index}>
          <div className="group relative rounded-xl bg-gradient-to-br from-white to-gray-50 p-5  grayscale transition-all duration-300  hover:grayscale-0">
            <div className="mb-6 flex h-24 items-center justify-center">
              <img
                src={bank.logo}
                alt={`${bank.name} logo`}
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            {/* <div className="text-center">
              <p className="mb-2 text-lg font-semibold text-gray-900">{bank.name}</p>
            </div> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HiringPartnersAlt;
