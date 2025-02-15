"use client";
import React from 'react';
import { Building2, TrendingUp, PieChart, Shield, BarChart2, Settings } from 'lucide-react';
import Image from 'next/image';

const CareerPath2 = () => {
  const careerPaths = [
    {
      title: "Investment Banking Analyst",
      icon: <Building2 className="w-6 h-6" />, // Changed from Bank to Building2
      startingSalary: "₹10-15 LPA",
      growthSalary: "₹50-80 LPA",
      imageUrl: "/images/hero/2150461313.jpg",
      description: "Lead financial modeling, valuations, and deal execution for major corporate transactions."
    },
    {
      title: "Private Equity Associate",
      icon: <TrendingUp className="w-6 h-6" />,
      startingSalary: "₹12-18 LPA",
      growthSalary: "₹60-100 LPA",
      imageUrl: "/images/hero/2147923307.jpg",
      description: "Analyze investment opportunities and manage portfolio companies for maximum returns."
    },
    {
      title: "M&A Consultant",
      icon: <PieChart className="w-6 h-6" />,
      startingSalary: "₹15-20 LPA",
      growthSalary: "₹70-120 LPA",
      imageUrl: "/images/hero/2149927603.jpg",
      description: "Guide companies through mergers, acquisitions, and strategic restructuring."
    },
    {
      title: "Risk & Compliance Officer",
      icon: <Shield className="w-6 h-6" />,
      startingSalary: "₹8-12 LPA",
      growthSalary: "₹40-70 LPA",
      imageUrl: "/images/hero/2148763861.jpg",
      description: "Ensure regulatory compliance and manage risk exposure in financial operations."
    },
    {
      title: "Corporate Finance Strategist",
      icon: <BarChart2 className="w-6 h-6" />,
      startingSalary: "₹12-16 LPA",
      growthSalary: "₹50-90 LPA",
      imageUrl: "/images/hero/2150461332.jpg",
      description: "Develop financial strategies and lead corporate financial planning initiatives."
    },
    {
      title: "Investment Banking Operations Specialist",
      icon: <Settings className="w-6 h-6" />,
      startingSalary: "₹8-12 LPA",
      growthSalary: "₹40-80 LPA",
      imageUrl: "/images/hero/116608.jpg",
      description: "Manage day-to-day operations and optimize processes in investment banking."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-8 leading-tight text-center">
            Career Paths That Define Success
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Chart your course to financial excellence with competitive compensation and clear growth trajectories
          </p>
        </div>

        {/* Career Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careerPaths.map((career, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={career.imageUrl}
                  alt={career.title}
                  className="w-full h-full object-cover grayscale transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white flex items-center">
                  <div className="p-2 bg-primary rounded-lg mr-3">
                    {career.icon}
                  </div>
                  <h3 className="font-semibold text-xl">{career.title}</h3>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  {career.description}
                </p>
                
                {/* Salary Information */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Starting Package</span>
                    <span className="text-lg font-bold text-secondary">{career.startingSalary}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <span className="text-sm font-medium text-primary">Growth Potential</span>
                    <span className="text-lg font-bold text-primary">{career.growthSalary}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerPath2;