"use client";
import React from 'react';
import { BookOpen, LineChart, Monitor, Target, Gem } from 'lucide-react';
import Image from 'next/image';

const Overview = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Industry-aligned curriculum with global case studies",
      imageUrl: "/images/hero/industry-aligned.jpg"
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Hands-on financial modeling & valuation training",
      imageUrl: "/images/hero/financial-modeling.jpg"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Live market simulations & terminal access",
      imageUrl: "/images/hero/live-market-simulation.jpg"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "100% Placement Assistance with top IB firms",
      imageUrl: "/images/hero/4968.jpg"
    },
    {
      icon: <Gem className="w-6 h-6" />,
      title: "Practical projects in M&A, IPOs, and Portfolio Management",
      imageUrl: "/images/hero/practical-projects.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="relative mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-8 leading-tight text-center">
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
        <div className="flex flex-wrap justify-center gap-6">
  {features.map((feature, index) => (
    <div
      key={index}
      className="group relative w-full md:w-[calc(50%-16px)] lg:w-[calc(33.33%-16px)"
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
        <p className="text-gray-900 font-bold text-[1.6rem] leading-snug text-center">
          {feature.title}
        </p>
      </div>
    </div>
  ))}
</div>


        {/* Bottom Accent */}
        {/* <div className="mt-16 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-indigo-200" />
            <div className="w-2 h-2 rounded-full bg-indigo-400" />
            <div className="w-2 h-2 rounded-full bg-indigo-600" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Overview;