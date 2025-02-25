import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const cards = [
    {
      id: 1,
      title: "Join a $100B+ Global Industry",
      description: "Poised for exponential growth",
      imageUrl: "/images/hero/2150900719.jpg",
    },
    {
      id: 2,
      title: "Command Lucrative Salaries",
      description: "Earn up to ₹1Cr+ per year",
      imageUrl: "/images/hero/2151575336.jpg",
    },
    {
      id: 3,
      title: "Step into High-Demand Roles",
      description: " In M&A, IPOs, and Private Equity",
      imageUrl: "/images/hero/178.jpg",
    },
    {
      id: 4,
      title: "Be part of India’s Booming Investment Banking Sector,",
      description: "Projected to hit $3.3B by 2025",
      imageUrl: "/images/hero/2150970201.jpg",
    },
  ];

// Check if we're on mobile
useEffect(() => {
  const checkIfMobile = () => {
    setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint
  };
  
  checkIfMobile();
  window.addEventListener('resize', checkIfMobile);
  
  return () => window.removeEventListener('resize', checkIfMobile);
}, []);

const nextSlide = () => {
  setCurrentIndex((prevIndex) => 
    prevIndex === cards.length - 1 ? 0 : prevIndex + 1
  );
};

const prevSlide = () => {
  setCurrentIndex((prevIndex) => 
    prevIndex === 0 ? cards.length - 1 : prevIndex - 1
  );
};

// Mobile slider view
if (isMobile) {
  return (
    <div className="relative pt-6 m-4">
      <h2
            className="mb-4 wow fadeInUp text-center text-2xl font-bold !leading-tight text-[#333333] sm:text-4xl md:text-4xl  md:text-[45px] lg:text-5xl"
            data-wow-delay=".15s"
          >
            Why Choose FFOI MBA in Investment Banking?
          </h2>
      {/* Card */}
      <div className="relative h-[400px] overflow-hidden rounded-lg">
        {/* Image with zoom effect */}
        <div className="absolute inset-0 h-full w-full">
          <img
            src={cards[currentIndex].imageUrl}
            alt={cards[currentIndex].title}
            className="h-full w-full object-cover object-center grayscale transition-transform duration-700 ease-in-out hover:grayscale-0 group-hover:scale-110"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/50" />
        </div>

        {/* Text content */}
        <div className="absolute bottom-6 left-6 right-6 z-10 rounded bg-[#fff]/90 px-5 py-3 text-center">
          <h3 className="mb-2 text-xl font-semibold text-secondary">
            {cards[currentIndex].title}
          </h3>
          <p className="mb-2 line-clamp-2 text-lg font-semibold text-primary">
            {cards[currentIndex].description}
          </p>
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-primary" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-primary" />
      </button>

      {/* Dots indicator */}
      <div className="mt-4 flex justify-center gap-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}


  return (
    <>
      <section id="features" className="bg-white py-16 md:py-20 lg:py-28">
        <div className="mb-8 bg-gray-200 pb-2 pt-2 text-center">
          <h2
            className="wow fadeInUp  text-2xl font-bold !leading-tight text-[#333333] sm:text-4xl md:text-4xl  md:text-[45px] lg:text-5xl"
            data-wow-delay=".15s"
          >
            Why Choose FFOI MBA in Investment Banking?
          </h2>
        </div>
        <div className="container">
          {/* New Modified section */}
          <div className="grid grid-cols-1 gap-6 pt-11 md:grid-cols-2">
            {cards.map((card) => (
              <div
                key={card.id}
                className="group relative h-[400px] overflow-hidden rounded-lg"
              >
                {/* Image with zoom effect */}
                <div className="absolute inset-0 h-full w-full">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="h-full w-full object-cover object-center grayscale transition-transform duration-700 ease-in-out hover:grayscale-0 group-hover:scale-110"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/50" />
                </div>

                {/* Text content */}
                <div className="absolute bottom-6 left-6 right-6 z-10 rounded bg-[#fff]/90 px-5 py-3 text-center">
                  <h3 className="mb-2 text-xl font-semibold text-secondary lg:text-4xl">
                    {card.title}
                  </h3>
                  <p className="mb-2 line-clamp-2 text-lg font-semibold text-primary lg:text-3xl">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
