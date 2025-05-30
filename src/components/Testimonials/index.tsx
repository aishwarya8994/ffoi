"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import VideoTestimonials from "../VideoTestimonials";

// const testimonialData: Testimonial[] = [
//   {
//     id: 1,
//     name: "Adwait Sunil",
//     designation: "Founder @TailGrids",
//     content:
//       "The FFOI PGDM program exceeded my expectations. The industry-driven curriculum and hands-on projects taught me practical skills for success.",
//     image: "/images/testimonials/Adwait Sunil.jpg",
//     star: 5,
//   },

//   {
//     id: 2,
//     name: "Akhtar Shah",
//     designation: "Founder @Lineicons",
//     content:
//       "The MBA in Investment Banking has built a solid foundation in finance and advanced strategies, opening doors to diverse global opportunities in the field!",
//     image: "/images/testimonials/Akhtar Shah.webp",
//     star: 5,
//   },
//   {
//     id: 3,
//     name: "Falak Nawab",
//     designation: "Founder @UIdeck",
//     content:
//       "The mentorship at FFOI and real-world case studies gave me a strong finance foundation. I now feel confident tackling professional challenges.",
//     image: "/images/testimonials/falak nawab 2.jpg",
//     star: 5,
//   },

//   {
//     id: 4,
//     name: "Melvin Rodrigues",
//     designation: "Founder @Lineicons",
//     content:
//       "The practical learning approach and industry connections have made all the difference in my career!",
//     image: "/images/testimonials/Melvin Rodrigues.jpg",
//     star: 5,
//   },
//   {
//     id: 5,
//     name: "Mitali Goyal",
//     designation: "Founder @Lineicons",
//     content:
//       "FFOI’s faculty combines deep industry knowledge with practical insights, making learning impactful and relevant.",
//     image: "/images/testimonials/Mitali Goyal.webp",
//     star: 5,
//   },
//   {
//     id: 6,
//     name: "Ishwari Kalsekar",
//     designation: "Founder @Lineicons",
//     content:
//       "The live market simulations have been invaluable for real-world finance applications.",
//     image: "/images/testimonials/Ishwari Kalsekar.png",
//     star: 5,
//   },
// ];

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Adwait Sunil",
    designation: "Founder @TailGrids",
    content:
      "The FFOI PGDM program exceeded my expectations. The industry-focused curriculum and hands-on projects equipped me with real-world skills for success.",
    image: "/images/testimonials/Adwait Sunil.jpg",
    star: 5,
  },
  {
    id: 2,
    name: "Akhtar Shah",
    designation: "Founder @Lineicons",
    content:
      "The MBA in Investment Banking gave me a strong foundation in finance and advanced strategies. It has opened doors to exciting global opportunities in the field.",
    image: "/images/testimonials/Akhtar Shah.webp",
    star: 5,
  },
  {
    id: 3,
    name: "Falak Nawab",
    designation: "Founder @UIdeck",
    content:
      "The mentorship at FFOI and in-depth case studies provided me with strong financial expertise. I feel confident tackling complex professional challenges.",
    image: "/images/testimonials/falak nawab 2.jpg",
    star: 5,
  },
  {
    id: 4,
    name: "Melvin Rodrigues",
    designation: "Founder @Lineicons",
    content:
      "The practical learning approach and industry connections have transformed my career. The knowledge gained here has been truly invaluable.",
    image: "/images/testimonials/Melvin Rodrigues.jpg",
    star: 5,
  },
  {
    id: 5,
    name: "Mitali Goyal",
    designation: "Founder @Lineicons",
    content:
      "FFOI’s faculty blends deep industry knowledge with real-world insights. The learning experience has been practical, engaging, and highly relevant.",
    image: "/images/testimonials/Mitali Goyal.webp",
    star: 5,
  },
  {
    id: 6,
    name: "Ishwari Kalsekar",
    designation: "Founder @Lineicons",
    content:
      "The live market simulations and hands-on finance training at FFOI have given me a strong competitive edge in real-world applications.",
    image: "/images/testimonials/Ishwari Kalsekar.png",
    star: 5,
  },
];

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(false);
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section
        id="testimonials"
        className=" relative z-10 bg-secondary py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-center text-2xl font-bold text-[#fff] md:text-4xl lg:text-5xl">
              What Our Students Say
            </h2>
            <p className="text-center text-sm text-gray-200 lg:text-xl">
              Hear from our students about their experiences, successes, and how
              we&apos;ve helped them achieve their goals
            </p>
          </div>

          {isMobile ? (
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              // navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000, // Time between slides in ms (3s)
                disableOnInteraction: false, // Keep autoplay running after interaction
              }}
              loop={true} // Loop slides continuously
            >
              {testimonialData.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <SingleTestimonial testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            // <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            //   {testimonialData.map((testimonial) => (
            //     <SingleTestimonial
            //       key={testimonial.id}
            //       testimonial={testimonial}
            //     />
            //   ))}
            // </div>
            <div className="flex">
              <div className="testimonial-slider-container relative md:w-1/2">
                <Swiper
                  ref={swiperRef}
                modules={[Navigation, Autoplay]}
                  spaceBetween={24}
                  slidesPerView={1}
                  // pagination={{ clickable: true }}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
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
                  className="mb-12"
                >
                  {testimonialData.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <SingleTestimonial testimonial={testimonial} />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Navigation Arrows */}
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
              <div className="md:w-1/2">
                <VideoTestimonials />
              </div>
            </div>
          )}
          <div className="block md:hidden">
            <VideoTestimonials />
          </div>
        </div>
        <div className="absolute right-0 top-5 z-[-1]">
          <svg
            width="238"
            height="531"
            viewBox="0 0 238 531"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="422.819"
              y="-70.8145"
              width="196"
              height="541.607"
              rx="2"
              transform="rotate(51.2997 422.819 -70.8145)"
              fill="url(#paint0_linear_83:2)"
            />
            <rect
              opacity="0.3"
              x="426.568"
              y="144.886"
              width="59.7544"
              height="541.607"
              rx="2"
              transform="rotate(51.2997 426.568 144.886)"
              fill="url(#paint1_linear_83:2)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_83:2"
                x1="517.152"
                y1="-251.373"
                x2="517.152"
                y2="459.865"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_83:2"
                x1="455.327"
                y1="-35.673"
                x2="455.327"
                y2="675.565"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-5 left-0 z-[-1]">
          <svg
            width="279"
            height="106"
            viewBox="0 0 279 106"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
                stroke="url(#paint0_linear_72:302)"
              />
              <path
                d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
                stroke="url(#paint1_linear_72:302)"
              />
              <path
                d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
                stroke="url(#paint2_linear_72:302)"
              />
              <path
                d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
                stroke="url(#paint3_linear_72:302)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_72:302"
                x1="256.267"
                y1="53.6717"
                x2="-40.8688"
                y2="8.15715"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_72:302"
                x1="256.267"
                y1="42.6717"
                x2="-40.8688"
                y2="-2.84285"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_72:302"
                x1="256.267"
                y1="64.6717"
                x2="-40.8688"
                y2="19.1572"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_72:302"
                x1="256.267"
                y1="76.6717"
                x2="-40.8688"
                y2="31.1572"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
