import { useState } from "react";

import Link from "next/link";
import {MoveRight} from 'lucide-react'
import EnquiryForm from "../EnquiryForm";
import InquireButton from "../InquireButton";
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      
      <section
        id="home"
        
      className="relative z-10 overflow-hidden bg-[position:50%_5%] bg-[url(/images/hero/ffoi-mb-banner.jpg)] lg:bg-[url('/images/hero/FFOI-WEB-BANNER.jpg')]  bg-cover bg-center bg-no-repeat pb-16 pt-[140px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-7/12 mt-16 lg:mt-0">
              <div  data-aos="fade-right" className="max-w-[900px] p-3 lg:p-0 bg-white/80 lg:bg-transparent mx-auto lg:mx-0 text-center lg:text-left ">
                <p className=" text-3xl font-bold text-primary lg:text-secondary sm:text-4xl sm:leading-tight md:text-[4rem] md:leading-tight mb-4">
                  Build Your Future in Global Finance!
                </p>
                <h1 className=" mb-3 text-lg lg:text-3xl font-bold leading-tight text-secondary  sm:text-4xl sm:leading-tight md:text-[1.5rem] md:leading-tight">
                  MBA in Investment Banking
                </h1>

                <h1 className=" mb-3 text-lg lg:text-3xl font-bold leading-tight text-secondary  sm:text-4xl sm:leading-tight md:text-[1.5rem] md:leading-tight">AICTE-Approved | 2-Year Full-Time Program</h1>
                {/* <p className="text-4xl font-semibold text-gray-700 sm:text-4xl sm:leading-tight md:text-[1.3rem] md:leading-tight mb-3">
                Transform Your Career in Investment Banking
                </p> */}
                
                <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          {/* <Link
            href="https://nextjstemplates.com/templates/saas-starter-startup"
            className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            🔥 Get Pro
          </Link> */}
          {/* <Link 
           href="#contact"
            className="flex inline-block rounded-sm bg-primary px-5 lg:px-16 py-2 lg:py-4 text-base lg:text-xl font-semibold text-white duration-300 ease-in-out hover:bg-black/90"
          >
            Enquire Now <span><MoveRight className="text-lg text-white ml-3" /></span>
          </Link > */}
           <InquireButton />
        </div>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
            {/* Existing SVG content */}
          </div>
          <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
            {/* Existing SVG content */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
