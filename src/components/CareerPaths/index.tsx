import React from 'react';
import {
  TrendingUp,
  Briefcase,
  Building,
  Shield,
  LineChart,
  Settings
} from 'lucide-react';

const CareerPaths = () => {
  // Custom color classes
  const customColors = {
    primary: '#7BBA27', // Green
    secondary: '#0B1D2E', // Dark Blue
    primaryLight: '#9ed455', // Lighter Green
    secondaryLight: '#1c3854', // Lighter Blue
    gray: '#4A5568',
  };

  const careers = [
    {
      title: 'Investment Banking Analyst',
      icon: <TrendingUp />,
      startingSalary: 10,
      growthSalary: 80,
      theme: 'primary',
      description: 'Lead financial modeling and valuation analysis for major deals',
    },
    {
      title: 'Private Equity Associate',
      icon: <Briefcase />,
      startingSalary: 12,
      growthSalary: 100,
      theme: 'secondary',
      description: 'Manage investment portfolios and identify growth opportunities',
    },
    {
      title: 'M&A Consultant',
      icon: <Building />,
      startingSalary: 15,
      growthSalary: 120,
      theme: 'primary',
      description: 'Guide strategic mergers and acquisitions for global clients',
    },
    {
      title: 'Risk & Compliance Officer',
      icon: <Shield />,
      startingSalary: 8,
      growthSalary: 70,
      theme: 'secondary',
      description: 'Ensure regulatory compliance and risk management',
    },
    {
      title: 'Corporate Finance Strategist',
      icon: <LineChart />,
      startingSalary: 12,
      growthSalary: 90,
      theme: 'primary',
      description: 'Develop financial strategies for corporate growth',
    },
    {
      title: 'Investment Banking Operations Specialist',
      icon: <Settings />,
      startingSalary: 8,
      growthSalary: 80,
      theme: 'secondary',
      description: 'Optimize banking operations and process efficiency',
    },
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#333333]"
            // style={{ color: customColors.secondary }}
          >
            Career Paths That Define Success
          </h2>
          <p className="text-xl" style={{ color: customColors.gray }}>
            Launch your career in investment banking with competitive compensation
          </p>
          <div
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{ backgroundColor: customColors.primary }}
          />
        </div>

        {/* Career Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((career, index) => {
            // Calculate the percentage width for the progress bar
            const progressPercentage = Math.min(
              (career.startingSalary / career.growthSalary) * 100,
              100
            );

            return (
              <div
                key={index}
                className="relative rounded-2xl border p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                style={{
                  backgroundColor: 'white',
                  borderColor:
                    career.theme === 'primary'
                      ? customColors.primary
                      : customColors.secondary,
                  borderWidth: '2px',
                }}
              >
                {/* Icon */}
                <div className="absolute top-6 right-6">
                  {React.cloneElement(career.icon, {
                    className: 'w-8 h-8 opacity-30',
                    style: {
                      color:
                        career.theme === 'primary'
                          ? customColors.primary
                          : customColors.secondary,
                    },
                  })}
                </div>

                {/* Content */}
                <h3
                  className="text-xl font-bold mb-4 pr-8"
                  style={{
                    color:
                      career.theme === 'primary'
                        ? customColors.primary
                        : customColors.secondary,
                  }}
                >
                  {career.title}
                </h3>

                <p style={{ color: customColors.gray }} className="mb-6 text-sm">
                  {career.description}
                </p>

                {/* Salary Information */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span style={{ color: customColors.gray }}>Starting Package</span>
                    <span
                      className="font-semibold"
                      style={{
                        color:
                          career.theme === 'primary'
                            ? customColors.primary
                            : customColors.secondary,
                      }}
                    >
                      ₹{career.startingSalary} LPA
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full"
                      style={{
                        width: `${progressPercentage}%`, // Set dynamic width
                        backgroundColor:
                          career.theme === 'primary'
                            ? customColors.primary
                            : customColors.secondary,
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span style={{ color: customColors.gray }}>Growth Potential</span>
                    <span
                      className="font-semibold"
                      style={{
                        color:
                          career.theme === 'primary'
                            ? customColors.primary
                            : customColors.secondary,
                      }}
                    >
                      ₹{career.growthSalary} LPA
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <p className="text-center mt-8 text-sm" style={{ color: customColors.gray }}>
          * Salary ranges are indicative and may vary based on experience and organization
        </p>
      </div>
    </section>
  );
};

export default CareerPaths;
