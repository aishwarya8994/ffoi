// components/TestimonialCarousel.js
"use client";
import React, { useState, useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function TestimonialCarousel() {

 const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  // Text testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Vikram Iyer",
      location: "INDIA",
      text: "The entrepreneurship workshops gave me the push I needed to start my own business. ASBS provided the right guidance and resources to turn my ideas into reality.",
      rating: 5,
      avatar: "/testimonials/avatar1.jpg",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      location: "USA",
      text: "The international exposure and global business perspective at ASBS helped me land my dream job. The faculty mentorship was outstanding throughout my journey.",
      rating: 5,
      avatar: "/testimonials/avatar2.jpg",
    },
    {
      id: 3,
      name: "Ahmed Hassan",
      location: "UAE",
      text: "The specialized finance track at ASBS prepared me for leadership roles in the banking sector. The curriculum is perfectly balanced between theory and practical applications.",
      rating: 4,
      avatar: "/testimonials/avatar3.jpg",
    },
  ];

  // Video testimonials data
  const videoTestimonials = [
    {
      id: 1,
      title: "ASBS MBA Success Story - Vikram",
      thumbnail: "/videos/thumbnail1.jpg",
      videoUrl: "https://www.youtube.com/embed/sRkaxj0ZE3g", // Corrected URL
    },
    {
      id: 2,
      title: "My Journey at ASBS - Sarah",
      thumbnail: "/videos/thumbnail2.jpg",
      videoUrl: "https://www.youtube.com/embed/-ovCMAioPNc", // Corrected URL
    },
  ];
  

  return (
    <section className="w-full">
      <div data-aos="fade-down" className="mt-4 lg:mt-0 mx-0 lg:mx-5">
        <div className="">
          {/* Text Testimonials Carousel */}
          

          {/* Video Testimonials Carousel */}
          <div className="w-full">
            
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 7000 }}
              className="w-full"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
              }}
            >
              {videoTestimonials.map((video) => (
                <SwiperSlide key={video.id}>
                  <div className="relative w-full h-56 md:h-64 lg:h-[400px] overflow-hidden shadow-lg">
                    <iframe
                      className="w-full h-full"
                      src={video.videoUrl}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="mt-8 flex items-center justify-center gap-4">
                <button
                  ref={prevRef}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200  text-primary transition-colors duration-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Previous testimonials"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  ref={nextRef}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200  text-primary transition-colors duration-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Next testimonials"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
