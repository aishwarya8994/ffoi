import React from 'react';
import { BookOpen, TrendingUp, FileText, Users, Briefcase } from 'lucide-react';
import Image from 'next/image';

const MasterInvestment = () => {
  // const features = [
  //   {
  //     icon: <TrendingUp className="w-12 h-12" />,
  //     title: " Live trading simulations on terminals",
  //     description: "Get hands-on experience with professional trading terminals, simulating real-market conditions and trading scenarios.",
  //     imageUrl: "/images/hero/20289170_6256878.jpg"
  //   },
  //   {
  //     icon: <FileText className="w-12 h-12" />,
  //     title: "Financial statement analysis of Fortune 500 companies",
  //     description: "Deep dive into Fortune 500 companies' financial statements, learning advanced analysis techniques and valuation methods.",
  //     imageUrl: "/images/hero/2150103557.jpg"
  //   },
  //   {
  //     icon: <BookOpen className="w-12 h-12" />,
  //     title: "Harvard Business Review case studies",
  //     description: "Learn from real-world scenarios and strategic decisions through comprehensive HBR case studies.",
  //     imageUrl: "/images/hero/harvard.jpg"
  //   },
  
    
  //   {
  //     icon: <Users className="w-12 h-12" />,
  //     title: "Guest lectures from top investment bankers at J.P. Morgan, Goldman Sachs & Morgan Stanley",
  //     description: "Gain insights directly from top investment bankers at J.P. Morgan, Goldman Sachs & Morgan Stanley.",
  //     imageUrl: "/images/hero/2150951407.jpg"
  //   },
    
  //   {
  //     icon: <Briefcase className="w-12 h-12" />,
  //     title: "Internships with leading financial institutions",
  //     description: "Secure valuable internship opportunities with leading financial institutions to kickstart your career.",
  //     imageUrl: "/images/hero/2148908835.jpg"
  //   }
  // ];


  // Features split into two groups
  const firstGridFeatures = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Live trading simulations on terminals",
      description: "Get hands-on experience with professional trading terminals, simulating real-market conditions and trading scenarios.",
      imageUrl: "/images/hero/20289170_6256878.jpg",
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Financial statement analysis of Fortune 500 companies",
      description: "Deep dive into Fortune 500 companies' financial statements, learning advanced analysis techniques and valuation methods.",
      imageUrl: "/images/hero/2150103557.jpg",
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Harvard Business Review case studies",
      description: "Learn from real-world scenarios and strategic decisions through comprehensive HBR case studies.",
      imageUrl: "/images/hero/harvard.jpg",
    },
  ];

  const secondGridFeatures = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Guest lectures from top investment bankers",
      description: "Gain insights directly from top investment bankers at J.P. Morgan, Goldman Sachs, and Morgan Stanley.",
      imageUrl: "/images/hero/2150951407.jpg",
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Internships with leading financial institutions",
      description: "Secure valuable internship opportunities with leading financial institutions to kickstart your career.",
      imageUrl: "/images/hero/2148908835.jpg",
    },
  ];



  return (
    <section className="bg-white py-5 md:py-20 lg:py-28">
    <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 ">
      {/* Section Title */}
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-12 leading-tight text-center">
        Master Investment Banking with a Cutting-Edge Learning Approach
      </h2>

      {/* First Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mb-16">
        {firstGridFeatures.map((feature, index) => (
          <div data-aos="flip-up"
            key={index}
            className="relative h-96 group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
          >
            {/* Background Image */}
            <img 
              src={feature.imageUrl}
              alt={feature.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale"
             
           />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

            {/* Content */}
            <div className="relative h-full p-6 flex flex-col justify-end text-white">
              <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-primary/80 backdrop-blur-sm p-3 rounded-lg inline-block mb-4">
                  {React.cloneElement(feature.icon, { className: "text-white" })}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-2">{feature.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Second Grid */}
      <div className="flex flex-wrap justify-center gap-8 ">
        {secondGridFeatures.map((feature, index) => (
          <div data-aos="flip-up"
            key={index}
            className="relative h-96  w-full md:w-[calc(33.33%-16px)] lg:w-[calc(33.33%-16px) group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
          >
            {/* Background Image */}
            <img 
              src={feature.imageUrl}
              alt={feature.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale"
             
           />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

            {/* Content */}
            <div className="relative h-full p-6 flex flex-col justify-end text-white">
              <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-primary/80 backdrop-blur-sm p-3 rounded-lg inline-block mb-4">
                  {React.cloneElement(feature.icon, { className: "text-white" })}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-2">{feature.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default MasterInvestment;