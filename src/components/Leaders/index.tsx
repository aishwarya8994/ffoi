"use client";
import Image from "next/image";
import React from "react";

const Leaders = () => {
  const leaders = [
    {
      name: "Uday Kotak",
      company: "Kotak Mahindra Bank",
      description:
        "Built a financial powerhouse integrating investment banking, capital markets, and wealth management.",
      image: "/images/leaders/uday-kotak.webp",
    },
    {
      name: "Aditya Puri",
      company: "HDFC Bank",
      description:
        "Transformed HDFC Bank into a global financial leader with innovation and customer trust. ",
      image: "/images/leaders/aditya-puri.webp",
    },
    {
      name: "Nimesh Kampani",
      company: "JM Financial",
      description:
        "Built a diversified financial services conglomerate from a bill discounting firm. Pioneered the transition from non-banking financial company to a full-service commercial bank.",
      image: "/images/leaders/Kampani.jpg",
    },

    {
      name: "Zarin Daruwala",
      company: "Standard Chartered Bank, India",
      description:
        "Leads major cross-border deals and foreign investments in India. ",
      image: "/images/leaders/Zarin_Daruwala.webp",
    },
    {
      name: "Deepak Parekh",
      company: "HDFC Ltd.",
      description:
        "Set the benchmark for housing finance and investment banking with smart risk management. ",
      image: "/images/leaders/deepak-parekh.webp",
    },
    {
      name: "Hemendra Kothari",
      company: "DSP Investment Managers",
      description:
        "A master of equity markets with a long-term investment approach. ",
      image: "/images/leaders/hemendra-kothari.jpg",
    },
    {
      name: "Anshu Jain",
      company: "Deutsche Bank",
      description:
        "A global finance icon who leveraged tech for advanced trading and advisory.",
      image: "/images/leaders/anshu-jain.webp",
    },
  ];

  return (
    <div className="container-fluid  py-8">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-[#fff] md:text-4xl lg:text-5xl">
          The Leaders Who Shaped India's Financial Landscape
        </h2>
        <p className="text-xl font-semibold text-primary">
          Are you ready to follow their path?
        </p>
      </div>
      {/* <div className='flex justify-center'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 mx-auto justify-center">
        {leaders.map((leader, index) => (
          <div key={index} className="border border-gray-600 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-[400px] object-cover rounded-lg grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
            </div>
            <div className="p-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
                <p className="text-primary text-lg font-semibold mb-3">{leader.company}</p>
                <p className="text-gray-200 line-clamp-2 text-base">{leader.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div> */}
      {/* <div className="flex flex-wrap justify-center gap-8 pt-8">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="w-full max-w-[400px] overflow-hidden rounded-lg border border-gray-600 transition-shadow duration-300 hover:shadow-lg sm:w-[calc(50%-16px)] lg:w-[calc(25%-16px)]"
          >
            <div className="relative">
              <img
                src={leader.image}
                alt={leader.name}
                className="h-[400px] w-full rounded-lg object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6">
              <div className="text-left">
                <h3 className="mb-1 text-2xl font-bold">{leader.name}</h3>
                <p className="mb-3 text-lg font-semibold text-primary">
                  {leader.company}
                </p>
                <p className="line-clamp-2 text-base text-gray-200">
                  {leader.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      <div className="container-fluid mx-auto px-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
    {leaders.slice(0, 4).map((leader, index) => (
      <div
        key={index}
        className="border border-gray-600 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        <div className="relative">
          <Image
            src={leader.image}
            alt={leader.name}
            className="w-full h-[400px] object-cover rounded-lg grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="p-6">
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
            <p className="text-primary text-lg font-semibold mb-3">
              {leader.company}
            </p>
            <p className="text-gray-200 line-clamp-2 text-base">
              {leader.description}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 justify-content-center mx-auto">
    {leaders.slice(4).map((leader, index) => (
      <div
        key={index}
        className="border border-gray-600 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        <div className="relative">
          <Image
            src={leader.image}
            alt={leader.name}
            className="w-full h-[400px] object-cover rounded-lg grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="p-6">
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
            <p className="text-primary text-lg font-semibold mb-3">
              {leader.company}
            </p>
            <p className="text-gray-200 line-clamp-2 text-base">
              {leader.description}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Leaders;
