import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {

  const cards = [
    {
      id: 1,
      title: "Join a $100B+ Global Industry",
      description: "Poised for exponential growth",
      imageUrl: "/images/hero/2150900719.jpg"
    },
    {
      id: 2,
      title: "Command Lucrative Salaries",
      description: "– Earn up to ₹1Cr+ per year",
      imageUrl: "/images/hero/2151575336.jpg"
    },
    {
      id: 3,
      title: "Step into High-Demand Roles",
      description: " In M&A, IPOs, and Private Equity",
      imageUrl: "/images/hero/178.jpg"
    },
    {
      id: 4,
      title: "Be part of India’s Booming Investment Banking Sector,",
      description: "Projected to hit $3.3B by 2025",
      imageUrl: "/images/hero/2150970201.jpg"
    }
  ];


  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28 bg-white">
      <div className="bg-gray-200 text-center pt-2 pb-2 mb-8">
      <h2 className="wow fadeInUp  text-2xl md:text-4xl lg:text-5xl font-bold !leading-tight text-[#333333]  sm:text-4xl md:text-[45px]" data-wow-delay=".15s">
      Why Choose FFOI MBA in Investment Banking?
        </h2>
         
          </div>
        <div className="container">
          

          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2 lg:grid-cols-2 mt-11">
           <div className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-1 lg:grid-cols-2 mt-5">
           {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
           </div>
           <div className="mt-5">
           <img src="/images/hero/sec-2-img.png" className="mb-2" />
           </div>
          </div> */}
{/* New Modified section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-11">
        {cards.map((card) => (
          <div 
            key={card.id}
            className="relative overflow-hidden group h-[400px] rounded-lg"
          >
            {/* Image with zoom effect */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-110 grayscale hover:grayscale-0"
               
               
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/50" />
            </div>
            
            {/* Text content */}
            <div className="absolute bottom-6 left-6 right-6 z-10 bg-[#fff]/90 px-5 py-3 rounded text-center">
              <h3 className="text-secondary text-xl lg:text-4xl font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-primary text-lg lg:text-3xl font-semibold mb-2 line-clamp-2">
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
