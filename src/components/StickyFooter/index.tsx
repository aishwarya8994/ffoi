"use client";

import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import {ArrowDownToLine, MessageCircleMore} from 'lucide-react'

export default function StickyFooter() {
  const [showFooter, setShowFooter] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    city: "",
    whoAmI: "",
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agreement) {
      alert("Please agree to receive promotional messages.");
      return;
    }

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        formData,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          alert("Enquiry submitted successfully!");
          setFormData({
            fullName: "",
            phoneNumber: "",
            email: "",
            city: "",
            whoAmI: "",
            agreement: false,
          });
        },
        (error) => {
          alert("Failed to submit enquiry. Please try again.");
        }
      );
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled past a certain point (e.g., 600px or dynamically by section)
      const secondSection = document.getElementById("second-section");
      const triggerPoint = secondSection?.offsetTop || 600;

      if (window.scrollY >= triggerPoint) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col">
      {/* Landing Page Sections */}
      {/* <section className="bg-gray-100 p-8 text-center h-screen" id="first-section">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to Your Finance Career!
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Start your journey toward a high-impact career in investment banking.
        </p>
      </section>

      <section className="bg-white p-8 text-center h-screen" id="second-section">
        <h2 className="text-2xl font-semibold text-gray-800">
          Explore Our Programs
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Discover the programs that can help you achieve your dream role.
        </p>
      </section>

      <section className="bg-gray-100 p-8 text-center h-screen" id="third-section">
        <h2 className="text-2xl font-semibold text-gray-800">
          Unlock Career Opportunities
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Take the first step toward success by applying today.
        </p>
      </section> */}

      {/* Sticky Footer */}
      {showFooter && (
        <footer
        className={`fixed bottom-0 left-0 right-0 bg-[#0B1D2E] text-white py-4 mt-10 px-6 shadow-lg z-50 transition-transform duration-300 ${
          showFooter ? "translate-y-0" : "translate-y-full"
        }`}
        >
          {/* <h1 className="font-bold text-3xl mb-4">Get Started on your Journey!</h1> */}
          <form
        className="flex flex-wrap items-center justify-center gap-4"
        onSubmit={handleSubmit}
      >
        {/* Full Name */}
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="bg-white text-black px-4 py-2 rounded-md flex-grow md:flex-none w-full md:w-auto"
          required
        />

        {/* Phone Number */}
        <div className="flex items-center bg-white rounded-md overflow-hidden">
          <span className="bg-[#f3f4f6] px-3 py-2 text-sm flex items-center text-blue-900">
            🇮🇳 (+91)
          </span>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="flex-grow px-4 py-2 text-black bg-white"
            required
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={formData.email}
          onChange={handleChange}
          className="bg-white text-black px-4 py-2 rounded-md flex-grow md:flex-none w-full md:w-auto"
          required
        />

        {/* City */}
        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="bg-white text-black px-4 py-2 rounded-md flex-grow md:flex-none w-full md:w-auto"
          required
        >
          <option value="">City</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
        </select>

        {/* Who am I */}
        <select
          name="whoAmI"
          value={formData.whoAmI}
          onChange={handleChange}
          className="bg-white text-black px-4 py-2 rounded-md flex-grow md:flex-none w-full md:w-auto"
          required
        >
          <option value="">Who am I?</option>
          <option value="Student">Student</option>
          <option value="Professional">Professional</option>
          <option value="Entrepreneur">Entrepreneur</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#7BBA27] text-[#fff] px-6 py-2 font-bold rounded-md hover:bg-[#375210] transition"
        >
          Enquire Now!
        </button>
        <button
          type="submit"
          className="flex bg-[#7BBA27] text-[#fff] px-6 py-2 font-bold rounded-md hover:bg-[#375210] transition"
        >
        <ArrowDownToLine className="mr-2" /> Download Brochure
        </button>
        {/* <button
          type="submit"
          className="flex bg-[#7BBA27] text-[#fff] px-6 py-2 font-bold rounded-md hover:bg-[#375210] transition"
        >
        <MessageCircleMore className="mr-2" /> Chat
        
        </button> */}

        {/* Agreement */}
        <div className="flex items-center w-full md:w-auto">
          <input
            type="checkbox"
            name="agreement"
            checked={formData.agreement}
            onChange={handleChange}
            className="mr-2"
            required
          />
          <label htmlFor="agreement" className="text-sm">
            I agree to receive promotional calls/SMS/WhatsApp/Email from
            Finance Forum od India
          </label>
        </div>
      </form>
        </footer>
      )}
    </div>
  );
}
