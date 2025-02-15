import React from "react";
import {
  Briefcase,
  GraduationCap,
  LineChart,
  Building2,
  BarChart3,
} from "lucide-react";
import Image from "next/image";

const ProgramFeatures = () => {
  const features = [
    {
      image: "/images/hero/industry-aligned.jpg",
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Industry-aligned curriculum",
      description:
        "Comprehensive coursework featuring global case studies and real-world applications",
    },
    {
      image: "/images/hero/financial-modeling.jpg",

      icon: <LineChart className="h-8 w-8" />,
      title: "Financial modeling & valuation",
      description:
        "Hands-on training in building complex financial models and conducting valuations",
    },
    {
      image: "/images/hero/live-market-simulation.jpg",

      icon: <BarChart3 className="h-8 w-8" />,
      title: "Live market simulations",
      description:
        "Access to terminal and real-time market simulation environments",
    },
    {
      image: "/images/hero/4968.jpg",

      icon: <Briefcase className="h-8 w-8" />,
      title: "100% Placement Assistance",
      description:
        "Guaranteed support in securing positions with top investment banking firms",
    },
    {
      image: "/images/hero/practical-projects.jpg",

      icon: <Building2 className="h-8 w-8" />,
      title: "Practical projects",
      description: "Real-world projects in M&A, IPOs, and Portfolio Management",
    },
  ];

  return (
    <section
      className="justify-center relative min-h-screen bg-cover bg-center bg-no-repeat px-4 py-16"
      style={{
        backgroundImage: `url('/images/hero/sec-5.png')`,
        // Replace with your actual image URL
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 " />

      <div className="relative  z-10 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#333333] md:text-4xl lg:text-5xl">
            What Sets This Program Apart?
          </h2>
          {/* <div className="w-20 h-1 bg-blue-400 mx-auto rounded-full"/> */}
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1  gap-4 md:grid-cols-1 lg:grid-cols-2  justify-items-center">
          {/* <div>
          <div className="grid grid-cols-1 md:grid-cols-1">
        <div className="">
          <img
            src="/images/hero/78965412.png"
            alt="Professional portrait"
            className="w-full h-[700px] object-cover rounded-lg grayscale hover:grayscale-0 hover:shadow-xl"
          />
        </div>

       
      </div>
          </div> */}
          {/* <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3"> */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="group mb-3  transform p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image Section - Moved to top */}
              {feature.image && (
                <div className="relative">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="h-55 w-full rounded-md object-cover "
                    
                  />
                </div>
              )}
              <div className="absolute top-[60%] w-[90%] flex items-center space-x-4 bg-primary/80 p-4 ">
                {/* <div className="p-5 bg-[#7BBA27] rounded-lg group-hover:bg-[#0B1D2E] transition-colors duration-300 ">
                  {React.cloneElement(feature.icon, {
                    className: "w-7 h-7 text-white"
                  })}
                </div> */}
                <div>
                  <h3 className="text-3xl font-semibold text-[#fff]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-lg text-white">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* </div> */}
        </div>
      </div>
      
    </section>
  );
};

export default ProgramFeatures;
