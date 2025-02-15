"use client"
import React from 'react';
import { Quote, Star } from 'lucide-react';

const StudentTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Abhishek Randive",
      title: "Exceptional Learning Experience",
      quote: "The program exceeded my expectations with its comprehensive curriculum and hands-on learning approach. The mentors were always available to guide us through complex concepts.",
      image: "/api/placeholder/400/400", // Replace with actual image
      rating: 5
    },
    {
      id: 2,
      name: "Rajratna Ahire",
      title: "Personalized Career Support",
      quote: "What sets this program apart is the individual attention given to each student's career goals. The placement team worked tirelessly to help me secure my dream position.",
      image: "/api/placeholder/400/400", // Replace with actual image
      rating: 5
    },
    {
      id: 3,
      name: "Tushar Shetty",
      title: "Industry-Relevant Curriculum",
      quote: "Every module we studied had direct applications in the real world. The case studies and live projects prepared me well for my current role in investment banking.",
      image: "/api/placeholder/400/400", // Replace with actual image
      rating: 5
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Top Accent Bar */}
              <div className="h-2 bg-blue-600 group-hover:bg-blue-700 transition-colors duration-300" />
              
              {/* Content Container */}
              <div className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-8 right-6">
                  <Quote className="w-8 h-8 text-blue-100 group-hover:text-blue-200 transition-colors duration-300" />
                </div>

                {/* Profile Image */}
                <div className="relative w-20 h-20 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full object-cover border-4 border-white shadow-md group-hover:border-blue-50 transition-all duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                    {testimonial.id}
                  </div>
                </div>

                {/* Title and Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {testimonial.title}
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  {testimonial.name}
                </p>

                {/* Quote */}
                <p className="text-gray-600 mb-6 relative">
                  {testimonial.quote}
                </p>

                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star 
                      key={index}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;