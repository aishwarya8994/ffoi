"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ArrowDownToLine } from "lucide-react";

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
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
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
        () => {
          alert("Failed to submit enquiry. Please try again.");
        }
      );
  };

  useEffect(() => {
    const handleScroll = () => {
      const secondSection = document.getElementById("second-section");
      const triggerPoint = secondSection?.offsetTop || 600;

      if (window.innerWidth >= 768 && window.scrollY >= triggerPoint) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col">
      {showFooter && (
        <footer className="fixed bottom-0 left-0 right-0 bg-[#0B1D2E] text-white py-4 px-6 shadow-lg z-50">
          <form className="flex flex-wrap items-center justify-center gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="bg-white text-black px-4 py-2 rounded-md w-full md:w-auto"
              required
            />
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
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              className="bg-white text-black px-4 py-2 rounded-md w-full md:w-auto"
              required
            />
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="bg-white text-black px-4 py-2 rounded-md w-full md:w-auto"
              required
            >
              <option value="">City</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
            </select>
            <select
              name="whoAmI"
              value={formData.whoAmI}
              onChange={handleChange}
              className="bg-white text-black px-4 py-2 rounded-md w-full md:w-auto"
              required
            >
              <option value="">Who am I?</option>
              <option value="Student">Student</option>
              <option value="Professional">Professional</option>
              <option value="Entrepreneur">Entrepreneur</option>
            </select>
            <button
              type="submit"
              className="bg-[#7BBA27] text-[#fff] px-6 py-2 font-bold rounded-md hover:bg-[#375210] transition"
            >
              Enquire Now!
            </button>
            {/* <button
              type="submit"
              className="flex bg-[#7BBA27] text-[#fff] px-6 py-2 font-bold rounded-md hover:bg-[#375210] transition"
            >
              <ArrowDownToLine className="mr-2" /> Download Brochure
            </button> */}
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
                I agree to receive promotional calls/SMS/WhatsApp/Email from Finance Forum of India
              </label>
            </div>
          </form>
        </footer>
      )}
    </div>
  );
}
