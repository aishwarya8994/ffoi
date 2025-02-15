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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-0 lg:py-16 px-4">
      <div className='container mx-auto px-4 py-8'>
      <SectionTitle
          title="Built for Excellence "
          paragraph="Curriculum Designed for Global Impact"
          center
        />
      
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-5">
       <div>
       {semesterData.map((year, index) => (
          <div key={index} className="relative group">
            <div className="h-full  lg:py-8 ">
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
       <div className='img-section hidden lg:block'>
       <div className="mt-10 ">
           <img  src="/images/hero/5252.jpg" className="mb-2 lg:h-[600px] object-cover rounded-lg grayscale" alt='' 
          />
           </div>
       </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className='img-section hidden lg:block'>
       <div className="mt-5">
           <img  src="/images/hero/13765.jpg" className="mb-2 lg:h-[600px] object-cover rounded-lg grayscale" alt=''  
          />
           </div>
       </div>
       <div>
       {semesterData2.map((year, index) => (
          <div key={index} className="relative group">
            <div className="h-full py-8 ">
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

      <div className='bg-secondary p-4 rounded-md'>
        <div className='block lg:flex justify-between '>
        <div className='flex justify-content-start'>
        <GraduationCap size={70}  className='text-primary font-bold mr-4' /> 
        <div>
        <p className='text-lg lg:text-3xl text-white font-semibold mt-2'>Capstone Project</p>
        <p className='text-gray-100 text-sm lg:text-lg mt-2'>Work on real-time investment deals and financial analysis with top firms. </p>

        </div>
        </div>
        <div>
        <Link
            href="/"
            className="flex inline-block rounded-sm bg-primary w-[180px]  lg:w-[290px] text-center mt-6 px-4 lg:px-16 py-2 lg:py-4 text-base lg:text-xl font-semibold text-white duration-300 ease-in-out hover:bg-black/90"
          >
            Enquire Now <span><MoveRight className="text-lg text-white ml-3" /></span>
          </Link>
        </div>
        </div>
       
        
      </div>
    </div>
    </div>
  );
};

export default CurriculumSection;