"use client"
import React from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  BrainCircuit, 
  LineChart, 
  Building2, 
  Briefcase,
  ChartPie,
  Shield,
  TrendingUp,
  Globe2,
  Binary,
  Waves,
  Network,
  FileSpreadsheet
} from 'lucide-react';
import Link from "next/link";
import {MoveRight} from 'lucide-react'
import SectionTitle from "../Common/SectionTitle";
import { Check } from 'lucide-react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination } from "swiper/modules";
import InquireButton from '../InquireButton';

const CurriculumSection = () => {
 

  const semesterData = [
    {
      title: "Year 1: Core Investment Banking Foundation",
      semesters: [
        {
          number: 1,
          details: [
            "Financial Accounting & Reporting",
            "Managerial Economics",
            "Corporate Finance Fundamentals",
            "Quantitative Methods for Decision Making"
          ]
        },
        {
          number: 2,
          details: [
            "Equity Research & Portfolio Management",
            "Debt Markets & Structured Finance",
            "Investment Banking Regulations",
            "Financial Risk Management"
          ]
        }
      ],
      bgImage: "/images/hero/20912.jpg"
    },
   
  ];

  const semesterData2 = [
   
    {
      title: "Year 2: Advanced Investment Banking & Specialization",
      semesters: [
        {
          number: 3,
          details: [
            "Mergers & Acquisitions (M&A) Strategy",
            "Venture Capital & Private Equity",
            "IPOs & Fundraising",
            "Global Financial Markets"
          ]
        },
        {
          number: 4,
          details: [
            "Derivatives & Hedging Strategies",
            "Digital Finance & Fintech Disruptions",
            "Financial Data Analytics & AI in Banking",
            "Capstone Project & Industry Internship"
          ]
        }
      ],
      bgImage: "/images/hero/20912.jpg"
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-0 lg:py-16  lg:px-4">
      <div className='container mx-auto lg:px-4 py-8'>
        <SectionTitle
          title="Built for Excellence "
          paragraph="Curriculum Designed for Global Impact"
          center
        />

       {/* Mobile View (Slider) */}
      {/* <div className="block lg:hidden mb-4">
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
          {[...semesterData, ...semesterData2].map((year, index) => (
            <SwiperSlide key={index}>
              <div data-aos="fade-left" className="relative group p-4 border rounded-lg shadow-md">
                <div className="relative p-3 text-secondary">
                  <h3 className="text-lg font-semibold mb-4 text-white bg-primary p-2 rounded-lg">
                    {year.title}
                  </h3>
                  <div className="space-y-6">
                    {year.semesters.map((semester) => (
                      <div key={semester.number} className="border-primary pl-4">
                        <h4 className="text-base font-semibold mb-3 text-gray-400">
                          Semester {semester.number}
                        </h4>
                        <ul className="space-y-2">
                          {semester.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 p-2">
                              <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                              <span className="text-gray-900 font-semibold text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
<div className="block lg:hidden mb-4">
  <Swiper
    slidesPerView={1}
    pagination={{ clickable: true }}
    modules={[Autoplay, Pagination]}
    className="mySwiper"
    autoplay={{
      delay: 3000, // Time between slides in ms (3s)
      disableOnInteraction: false, // Keep autoplay running after interaction
    }}
    loop={true} // Loop slides continuously
  >
    {[...semesterData, ...semesterData2].map((year, index) => (
      <SwiperSlide key={index}>
        <div
          data-aos="fade-left"
          className="relative group p-4 border rounded-lg shadow-md bg-cover bg-center before:absolute before:inset-0 before:bg-white before:opacity-70"
          style={{
            backgroundImage: `url(${index < semesterData.length ? '/images/hero/sem-1.jpg' : '/images/hero/sem-2.jpg'})`,
          }}
        >
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-white/50 rounded-lg"></div>

          <div className="relative lg:p-3 text-secondary">
            <h3 className="text-base lg:text-lg font-semibold mb-4 text-white bg-primary p-2 rounded-lg">
              {year.title}
            </h3>
            <div className="space-y-6">
              {year.semesters.map((semester) => (
                <div key={semester.number} className="border-primary pl-4">
                  <h4 className="text-base font-semibold mb-3 text-gray-600">
                    Semester {semester.number}
                  </h4>
                  <ul className="space-y-2">
                    {semester.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 p-2">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                        <span className="text-gray-900 font-semibold text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>


      
     <div className="hidden lg:grid grid-cols-2 gap-8 mb-5">
       <div>
       {semesterData.map((year, index) => (
          <div key={index} className="relative group">
            <div className="h-full py-0 lg:py-8 ">
              <div 
                className="absolute inset-0 bg-cover bg-center rounded-lg grayscale hover:grayscale-0"
                // style={{ backgroundImage: `url(${year.bgImage})` }}
              />
              <div className="absolute inset-0" />
              <div data-aos="fade-right" className="relative p-6 text-secondary">
                <h3 className="text-lg lg:text-[28px] font-semibold mb-4 text-white bg-primary p-2 rounded-lg pl-4">{year.title}</h3>
                <div className="space-y-6">
                  {year.semesters.map((semester) => (
                    <div key={semester.number} className=" border-primary pl-4">
                      <h4 className="text-base lg:text-2xl font-semibold mb-3 text-gray-400">
                        Semester {semester.number}
                      </h4>
                      <ul className="space-y-2 ">
                        {semester.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2  p-2">
                            <Check className="lg:w-8 lg:h-8 mt-0.5 flex-shrink-0 text-primary font-bold" />
                            <span className="text-gray-900 font-semibold text-sm lg:text-xl">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
       </div>
       <div data-aos="fade-left" className='img-section hidden lg:block'>
       <div className="mt-10 ">
           <Image fill  src="/images/hero/sem-1.jpg" className="mb-2 lg:h-[600px] object-cover rounded-lg grayscale" alt='' 
          />
           </div>
       </div>
      </div>
      <div  className="hidden lg:grid grid-cols-2 gap-8">
      <div data-aos="fade-right" className='img-section hidden lg:block'>
       <div className="mt-5">
           <Image fill  src="/images/hero/sem-2.jpg" className="mb-2 lg:h-[600px] object-cover rounded-lg grayscale" alt=''  
          />
           </div>
       </div>
       <div>
       {semesterData2.map((year, index) => (
          <div key={index} className="relative group">
            <div data-aos="fade-left" className="h-full py-8 ">
              <div 
                className="absolute inset-0 bg-cover bg-center rounded-lg grayscale hover:grayscale-0"
                // style={{ backgroundImage: `url(${year.bgImage})` }}
              />
              <div className="absolute inset-0" />
              <div className="relative p-6 text-secondary">
                <h3 className="text-lg lg:text-[28px] font-semibold mb-4 text-white bg-primary p-2 rounded-lg pl-4">{year.title}</h3>
                <div className="space-y-6">
                  {year.semesters.map((semester) => (
                    <div key={semester.number} className=" border-primary pl-4">
                      <h4 className="text-base lg:text-2xl font-semibold mb-3 text-gray-400">
                        Semester {semester.number}
                      </h4>
                      <ul className="space-y-2 ">
                        {semester.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2  p-2">
                            <Check className="lg:w-8 lg:h-8 mt-0.5 flex-shrink-0 text-primary font-bold" />
                            <span className="text-gray-900 font-semibold text-sm lg:text-xl">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
       </div>
       
      </div>

      <div data-aos="fade-left" className="bg-secondary p-4 rounded-md mt-8">
  <div className="flex flex-col lg:flex-row lg:justify-between items-center text-center lg:text-left">
    <div className="flex flex-col sm:flex-row items-center lg:items-start">
      <GraduationCap size={70} className="text-primary font-bold sm:mr-4 mb-3 sm:mb-0" />
      <div>
        <p className="text-lg lg:text-3xl text-white font-semibold">Capstone Project</p>
        <p className="text-gray-100 text-sm lg:text-lg mt-2">
          Work on real-time investment deals and financial analysis with top firms.
        </p>
      </div>
    </div>

    <div className="mt-6 lg:mt-0">
      <Link
        href="#contact"
        className="flex items-center justify-center lg:justify-start mx-auto lg:mx-0 rounded-sm bg-primary w-[180px] lg:w-[290px] text-center px-4 lg:px-16 py-2 lg:py-4 text-base lg:text-xl font-semibold text-white duration-300 ease-in-out hover:bg-black/90"
      >
        Enquire Now <MoveRight className="text-lg text-white ml-3" />
      </Link>
    </div>
  </div>
</div>

    </div>
    </div>
  );
};

export default CurriculumSection;