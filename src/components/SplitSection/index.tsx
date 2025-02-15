"use client"
import React from 'react';
import { 
  LineChart, 
  FileSpreadsheet, 
  BookOpen, 
  Users, 
  Briefcase 
} from 'lucide-react';

const SplitSection = () => {
  const features = [
    {
      icon: <LineChart />,
      title: "Live Trading Simulations",
      description: "Get hands-on experience with real-time trading terminals"
    },
    {
      icon: <FileSpreadsheet />,
      title: "Financial Statement Analysis",
      description: "Deep dive into Fortune 500 companies' financial statements"
    },
    {
      icon: <BookOpen />,
      title: "Harvard Business Review Cases",
      description: "Learn from comprehensive HBR case studies"
    },
    {
      icon: <Users />,
      title: "Expert Guest Lectures",
      description: "Learn from top bankers at J.P. Morgan, Goldman Sachs & Morgan Stanley"
    },
    {
      icon: <Briefcase />,
      title: "Industry Internships",
      description: "Gain practical experience with leading financial institutions"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Content Section */}
      <div className="w-full lg:w-1/2 bg-[#0B1D2E] p-8 lg:p-16 flex items-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Master Investment Banking with a Cutting-Edge Learning Approach
          </h2>
          
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 group p-4 rounded-lg transition-all duration-300 hover:bg-[#305476]"
              >
                <div className="p-2 bg-[#7BBA27] group-hover:bg-[#375210] rounded-lg transition-colors">
                  {React.cloneElement(feature.icon, {
                    className: "w-7 h-7 text-white"
                  })}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-white">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat "
          
            style={{
              backgroundImage: `url('/images/hero/4968.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "grayscale(100%)",
              transition: "filter 0.3s ease-in-out",
            }}
          
        >
          {/* Overlay */}
          <div className="absolute inset-0 group-hover:filter-none transition duration-300 ease-in-out " />
        </div>
      </div>
    </div>
  );
};

export default SplitSection;