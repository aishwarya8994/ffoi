"use client"
import React, { useState } from 'react';
import { Globe2, Building2, ArrowRight, Briefcase, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const HiringPartnersAlt = () => {
  const [activeTab, setActiveTab] = useState('global');

  const banks = {
    global: [
      { name: "J.P. Morgan", logo: "https://cdn.prod.website-files.com/63f6e52346a353ca1752970e/644fb7a5f64fb5cb87a5beaa_20230501T1259-9f1793fc-a440-492c-a2b5-c01eba32c7f4.jpeg" },
      { name: "Goldman Sachs", logo: "https://worldgbc.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/08/08135440/GSsignature_Blue.png" },
      { name: "Morgan Stanley", logo: "https://pbs.twimg.com/profile_images/1631347869687898142/ATwo7QZZ_400x400.jpg" },
      { name: "Bank of America", logo: "https://logos-world.net/wp-content/uploads/2020/11/Bank-of-America-Emblem.png" },
      { name: "Barclays", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaAMBzVwmCWxPtgjiI7i7X4vrHX7GcH9i0zQ&s" }
    ],
    india: [
      { name: "Kotak Mahindra", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0x-5XTuch9fn5z1DFeFeNUI7iaWTAsN9Bpg&s" },
      { name: "HDFC Bank", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsiMz-D2pGIen44gUk-84rgzGpeOzLuh3vgQ&s" },
      { name: "BNP Paribas", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiLoiOe8E7v5GQnEVMFBQes0_igRqgSTiM4Q&s" },
      { name: "ICICI Securities", logo: "https://companieslogo.com/img/orig/ISEC.NS_BIG-46531085.png?t=1720452992" },
      { name: "JM Financial", logo: "https://signup.jmfonline.in/assets/images/JM%20Logo-%20Blue%20Logo.png" }
    ]
  };

  const bank2 = [
    { name: "J.P. Morgan", logo: "https://cdn.prod.website-files.com/63f6e52346a353ca1752970e/644fb7a5f64fb5cb87a5beaa_20230501T1259-9f1793fc-a440-492c-a2b5-c01eba32c7f4.jpeg" },
      { name: "Goldman Sachs", logo: "https://worldgbc.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/08/08135440/GSsignature_Blue.png" },
      { name: "Morgan Stanley", logo: "https://pbs.twimg.com/profile_images/1631347869687898142/ATwo7QZZ_400x400.jpg" },
      { name: "Bank of America", logo: "https://logos-world.net/wp-content/uploads/2020/11/Bank-of-America-Emblem.png" },
      { name: "Barclays", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaAMBzVwmCWxPtgjiI7i7X4vrHX7GcH9i0zQ&s" },
      { name: "Kotak Mahindra", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0x-5XTuch9fn5z1DFeFeNUI7iaWTAsN9Bpg&s" },
      { name: "HDFC Bank", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsiMz-D2pGIen44gUk-84rgzGpeOzLuh3vgQ&s" },
      { name: "BNP Paribas", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiLoiOe8E7v5GQnEVMFBQes0_igRqgSTiM4Q&s" },
      { name: "ICICI Securities", logo: "https://companieslogo.com/img/orig/ISEC.NS_BIG-46531085.png?t=1720452992" },
      { name: "JM Financial", logo: "https://signup.jmfonline.in/assets/images/JM%20Logo-%20Blue%20Logo.png" }

  ];

  // Style Variations for different layouts
  const layouts = {
    // carousel: (
    //   <div className="overflow-x-auto pb-6">
    //     <div className="flex space-x-6 min-w-max px-4">
    //       {banks[activeTab].map((bank, index) => (
    //         <div
    //           key={index}
    //           className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 w-64"
    //         >
    //           <div className="h-20 flex items-center justify-center mb-4">
    //             <img
    //               src={bank.logo}
    //               alt={`${bank.name} logo`}
    //               className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
    //             />
    //           </div>
    //           <p className="text-center font-medium text-gray-800">{bank.name}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // ),

    // masonry: (
    //   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
    //     {banks[activeTab].map((bank, index) => (
    //       <div
    //         key={index}
    //         className={`group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 
    //           ${index % 2 === 0 ? 'transform translate-y-4' : ''}`}
    //       >
    //         <div className="h-16 flex items-center justify-center mb-4">
    //           <img
    //             src={bank.logo}
    //             alt={`${bank.name} logo`}
    //             className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
    //           />
    //         </div>
    //         <p className="text-center font-medium text-gray-800">{bank.name}</p>
    //       </div>
    //     ))}
    //   </div>
    // ),

    // cards: (
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {banks[activeTab].map((bank, index) => (
    //       <div
    //         key={index}
    //         className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 grayscale hover:grayscale-0 transition duration-300 ease-in-out"
    //       >
    //         {/* <div className="absolute top-4 right-4">
    //           <ArrowRight className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
    //         </div> */}
    //         <div className="h-24 flex items-center justify-center mb-6">
    //           <img
    //             src={bank.logo}
    //             alt={`${bank.name} logo`}
    //             className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 "
    //           />
    //         </div>
    //         <div className="text-center">
    //           <p className="font-semibold text-lg text-gray-900 mb-2">{bank.name}</p>
    //           <p className="text-sm text-gray-600">Leading Investment Bank</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // ),

    // list: (
    //   <div className="space-y-4">
    //     {banks[activeTab].map((bank, index) => (
    //       <div
    //         key={index}
    //         className="group flex items-center justify-between bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
    //       >
    //         <div className="flex items-center space-x-6">
    //           <div className="w-20 h-12">
    //             <img
    //               src={bank.logo}
    //               alt={`${bank.name} logo`}
    //               className="w-full h-full object-contain"
    //             />
    //           </div>
    //           <div>
    //             <p className="font-semibold text-gray-900">{bank.name}</p>
    //             <p className="text-sm text-gray-600">Investment Banking</p>
    //           </div>
    //         </div>
    //         <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all duration-300" />
    //       </div>
    //     ))}
    //   </div>
    // )
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            {/* <Briefcase className="w-10 h-10 text-blue-600 mr-3" /> */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333]">
            Launch Your Career with Global & Domestic Investment Banks
            </h2>
          </div>
          <p className="text-xl text-gray-600  mt-2">
          Top Hiring Firms
          </p>
        </div>

        {/* Tabs */}
        {/* <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full shadow-md p-1">
            <button
              onClick={() => setActiveTab('global')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300  ${
                activeTab === 'global'
                  ? 'bg-[#0B1D2E] text-white font-semibold'
                  : 'text-gray-600 font-semibold hover:text-[#0B1D2E]'
              }`}
            >
              Global Banks
            </button>
            <button
              onClick={() => setActiveTab('india')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'india'
                  ? 'bg-[#0B1D2E] text-white font-semibold'
                  : 'text-gray-600 font-semibold hover:text-[#0B1D2E]'
              }`}
            >
              Indian Banks
            </button>
          </div>
        </div> */}

        {/* Content */}
        {/* <div className="space-y-12">
          {layouts.carousel}
          {layouts.masonry}
          {layouts.cards}
          {layouts.list}
        </div> */}


        {/* only cards section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bank2.map((bank, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 grayscale hover:grayscale-0"
          >
            <div className="h-24 flex items-center justify-center mb-6">
              <img 
                src={bank.logo}
                alt={`${bank.name} logo`}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
               
            />
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg text-gray-900 mb-2">{bank.name}</p>
              {/* <p className="text-sm text-gray-600">{bank.description}</p> */}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default HiringPartnersAlt;