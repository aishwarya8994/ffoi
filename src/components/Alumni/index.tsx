"use client"
import React from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";

const Alumni = () => {
  const careers = [
    {
      name: "Nidhi Mehta",
      image: "/images/testimonials/2147943405.jpg",
      title: "Investment Banking Analyst: The Financial Architect",
      responsibilities: [
        "Builds financial models & valuation reports",
        "Supports M&A, fundraising, and strategic deals",
        "Expertly cracks complex financial puzzles"
      ],
      whoYouAre: "A data-driven problem solver with sharp analytical skills",
      futureYou: "Leading billion-dollar transactions in global markets",
      salary: {
        start: "₹10-15 LPA",
        top: "₹50-80 LPA"
      }
    },
    {
      name: "Kunal Sharma",
      image: "/images/testimonials/2148018608.jpg",
      title: "Private Equity Associate: The Deal Maker",
      responsibilities: [
        "Evaluates high-growth investment opportunities",
        "Works with portfolio companies to maximize returns",
        "Structures and negotiates high-value deals"
      ],
      whoYouAre: "A strategic thinker with a passion for wealth creation",
      futureYou: "Managing multi-million-dollar investment funds",
      salary: {
        start: "₹12-18 LPA",
        top: "₹60-100 LPA"
      }
    },
    {
      name: "Priya Iyer",
      image: "/images/testimonials/2148142785.jpg",
      title: "Risk & Compliance Officer: The Guardian of Finance",
      responsibilities: [
        "Ensures compliance with financial regulations",
        "Identifies risks in investments & corporate policies",
        "Strategically develops robust fraud prevention frameworks"
      ],
      whoYouAre: "A detail-oriented watchdog who thrives on precision",
      futureYou: "Advising Fortune 500 companies on regulatory frameworks",
      salary: {
        start: "₹8-12 LPA",
        top: "₹40-70 LPA"
      }
    },
    {
      name: "Rajiv Malhotra",
      image: "/images/testimonials/2148102497.jpg",
      title: "M&A Consultant: The Power Negotiator",
      responsibilities: [
        "Advises on mergers, acquisitions & corporate buyouts",
        "Conducts market research to identify opportunities",
        "Structures deals for maximum profitability"
      ],
      whoYouAre: "A persuasive strategist with strong negotiation skills",
      futureYou: "Orchestrating billion-dollar corporate takeovers",
      salary: {
        start: "₹15-20 LPA",
        top: "₹70-120 LPA"
      }
    },
    {
      name: "Aditi Joshi",
      image: "/images/testimonials/2149300652.jpg",
      title: "Corporate Finance Strategist: The Mastermind Behind Growth",
      responsibilities: [
        "Develops financial plans for corporate expansion",
        "Analyzes business performance to drive profitability",
        "Manages capital allocation & investment portfolios"
      ],
      whoYouAre: "A visionary blending finance with business acumen",
      futureYou: "Steering major corporations toward financial success",
      salary: {
        start: "₹12-16 LPA",
        top: "₹50-90 LPA"
      }
    },
    {
      name: "Aniket Mehta",
      image: "/images/testimonials/2150408675.jpg",
      title: "Investment Banking Operations: The Backbone of Transactions",
      responsibilities: [
        "Manages trade settlements, reconciliations & risk assessments",
        "Ensures smooth processing of investment transactions",
        "Works with compliance & regulatory teams to minimize financial risk"
      ],
      whoYouAre: "A meticulous executor with a deep understanding of financial operations",
      futureYou: "Leading banking operations & financial efficiency",
      salary: {
        start: "₹8-12 LPA",
        top: "₹40-80 LPA"
      }
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-2xl font-bold text-[#333333] md:text-4xl lg:text-5xl">
            Unlock Your Future in Finance: Career Paths That Define Success
          </h2>
          <p className="text-sm lg:text-xl text-gray-600">
            Step into the high-stakes world of finance and carve your path to success!
          </p>
        </div>
        {/* Mobile View (Slider for sm & md screens) */}
      <div className="block lg:hidden">
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {careers.map((career, index) => (
            <SwiperSlide key={index}>
              <div className="hover:shadow-xl transition-shadow duration-300 overflow-hidden border">
                <div className="relative h-[250px]">
                  <img
                    src={career.image}
                    alt={career.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="font-bold text-xl text-white">{career.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-primary font-semibold mb-4 text-lg lg:text-xl">
                    {career.title}
                  </h4>

                  <ul className="space-y-2 mb-6">
                    {career.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-gray-600" />
                        <span className="text-gray-600 text-sm lg:text-base">{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-4 border-t">
                    <div className="bg-primary/10 p-2 rounded ">
                      <p className="font-semibold text-primary text-sm lg:text-xl">Who You Are:</p>
                      <p className="text-gray-600 text-sm lg:text-base">{career.whoYouAre}</p>
                    </div>
                    <div className="bg-secondary/10 p-2 rounded">
                      <p className="font-semibold text-[#333] text-sm lg:text-xl">Future You:</p>
                      <p className="text-gray-600 text-sm lg:text-base">{career.futureYou}</p>
                    </div>
                    <div className="bg-blue-100 p-2 rounded">
                      <p className="font-semibold text-[#333] text-sm lg:text-xl">Salary:</p>
                      <p className="text-gray-600 text-sm lg:text-base">
                        {career.salary.start} (Start) → {career.salary.top} (Top)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


        <div className="hidden lg:grid grid-cols-3 gap-8">
          {careers.map((career, index) => (
            <div key={index} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden border ">
              <div className="relative h-64">
                <img  
                  src={career.image} 
                  alt={career.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0"
                 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="font-bold text-xl text-white">{career.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-primary font-semibold mb-4 text-lg lg:text-xl">{career.title}</h4>

                <ul className="space-y-2 mb-6">
                  {career.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-gray-600" />
                      <span className='text-gray-600 text-sm lg:text-base'>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-4 border-t py-4">
                  <div className='bg-primary/10 p-2 rounded'>
                    <p className="font-semibold text-primary text-sm lg:text-xl">Who You Are:</p>
                    <p className="text-gray-600 text-sm lg:text-base">{career.whoYouAre}</p>
                  </div>
                  <div className='bg-secondary/10 p-2 rounded'>
                    <p className="font-semibold text-[#333] text-sm lg:text-xl">Future You:</p>
                    <p className="text-gray-600 text-sm lg:text-base">{career.futureYou}</p>
                  </div>
                  <div className='bg-blue-100 p-2 rounded'>
                    <p className="font-semibold text-[#333] text-sm lg:text-xl">Salary:</p>
                    <p className="text-gray-600 text-sm lg:text-base">
                      {career.salary.start} (Start) → {career.salary.top} (Top)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;