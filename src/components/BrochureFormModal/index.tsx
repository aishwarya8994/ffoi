"use Client";

// components/BrochureFormModal.tsx
import React, { useState, useEffect } from "react";
import { CircleX } from "lucide-react";

const statesInIndia = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];
const BrochureFormModal = ({ isOpen, closeModal, setDownloadable }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    qualification: "",
    experience: "",
    state: "",
  });
  const [isDownloadable, setIsDownloadable] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling when closed
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup when unmounting
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);

  //   // Enable download after form submission
  //   setDownloadable(true);
  //   closeModal();
  // };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  
    // Enable the download link
    setDownloadable(true);
    setIsDownloadable(true); // <-- Update local state
  
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 pt-7">
      <div className="relative w-full lg:w-1/2 rounded-lg bg-dark p-6 shadow-lg">
        <div className="flex justify-between">
          <h2 className="mb-4 text-2xl font-semibold text-primary">
            Enquiry Form
          </h2>
          <button onClick={closeModal} className=" mb-4 text-gray-500">
            <CircleX />
          </button>
        </div>

        <form className="flex flex-wrap " onSubmit={handleSubmit}>
          <div className="mb-3 w-full px-2 md:w-1/2">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full rounded-sm border border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary "
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3  w-full px-2 md:w-1/2">
            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full rounded-sm border border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary "
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3  w-full px-2 md:w-1/2">
            {/* Phone Number */}
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              className="w-full rounded-sm border border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary "
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3  w-full px-2 md:w-1/2">
            {/* City */}
            <input
              type="text"
              name="city"
              placeholder="Your City"
              className="w-full rounded-sm border border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary "
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3  w-full px-2 md:w-1/2">
            {/* State Dropdown */}
            <select
              name="state"
              className="w-full rounded-sm border border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary "
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">Select State</option>
              {statesInIndia.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3  w-full px-2 md:w-1/2">
            {/* Qualification Dropdown */}
            <select
              name="qualification"
              className="w-full rounded-sm border border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary "
              value={formData.qualification}
              onChange={handleChange}
              required
            >
              <option value="">Select Qualification</option>
              <option value="High School">High School</option>
              <option value="Diploma">Diploma</option>
              <option value="Bachelor's Degree">Bachelor's Degree</option>
              <option value="Master's Degree">Master's Degree</option>
              <option value="PhD">PhD</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-3  w-full px-2 md:w-1/2">
            {/* Work Experience Dropdown */}
            <select
              name="experience"
              className="w-full rounded-sm border border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary "
              value={formData.experience}
              onChange={handleChange}
              required
            >
              <option value="">Select Work Experience</option>
              <option value="Fresher">Fresher</option>
              <option value="1-3 years">1-3 years</option>
              <option value="3-5 years">3-5 years</option>
              <option value="5+ years">5+ years</option>
            </select>
          </div>
          {/* Submit Button */}
          <button type="submit" className="bg-primary text-white p-2 rounded w-full">
            Submit & Download
          </button> 
          {/* Submit & Download Button */}
          {/* {isDownloadable ? (
            <a
              href="/FFOI-Brochure.pdf" // Replace with actual brochure link
              download
              className="block w-full rounded bg-blue-600 p-3 text-center text-white"
            >
              Download Brochure
            </a>
          ) : (
            <button
              type="submit"
              className="w-full rounded bg-primary p-2 text-white"
            >
              Submit & Download
            </button>
          )} */}
        </form>
      </div>
    </div>
  );
};

export default BrochureFormModal;
