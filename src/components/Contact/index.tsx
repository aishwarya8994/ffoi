"use client"; // Ensure it's a client component
import { useState } from "react";
import emailjs from "@emailjs/browser";

import Link from "next/link";
import { MapPin, Mail, Phone, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_udgygmo", // Replace with your EmailJS Service ID
        "your_template_id", // Replace with your EmailJS Template ID
        e.currentTarget,
        "your_user_id" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.error("Failed to send:", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat py-16 md:py-20 lg:py-28"
      style={{ backgroundImage: `url('/images/hero/Group-12.png')` }}
    >
      <div data-aos="fade-right" className="container">
        <div className="justify-content-end -mx-4 flex flex-wrap">
          <div className="w-full lg:px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 rounded-sm bg-dark px-8 py-11 shadow-three sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-primary dark:text-white sm:text-3xl">
                Enquire Now
              </h2>
              <p className="mb-3 text-sm font-medium text-white lg:mb-12">
                Our support team will get back to you ASAP via email.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-3 lg:mb-4">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          required
                          className="w-full rounded-sm border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-3 lg:mb-4">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                          required
                          className="w-full rounded-sm border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-3 lg:mb-4">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                          className="w-full rounded-sm border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="mb-3 w-full px-4 md:w-1/2 lg:mb-4">
                      <select
                        name="qualification"
                        className="w-full rounded-sm border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                        required
                      >
                        <option value="Qualification" >
                          Select Your Qualification
                        </option>
                        <option value="Student">Pursuing Graduation</option>
                        <option value="Professional">Graduate</option>
                        <option value="Entrepreneur">Post Graduate</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="w-full px-4 md:full mb-3">
                    <select
                        name="qualification"
                        className="w-full rounded-sm border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                        required
                      >
                        <option value="City">
                         City
                        </option>
                        <option value="Student">Mumbai</option>
                        <option value="Professional">Navi Mumbai</option>
                        <option value="Entrepreneur">Thane</option>
                      
                      </select>
                    </div>

                    <div className="w-full px-4">
                      <div className="mb-4">
                        <textarea
                          name="message"
                          rows={4}
                          placeholder="Enter your Message"
                          required
                          className="w-full rounded-sm border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                        ></textarea>
                      </div>
                    </div>

                    <div className="mb-4 w-full flex items-center justify-center lg:justify-start px-4">
                      <button
                        type="submit"
                        className="rounded-sm bg-primary px-3 py-2 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 lg:px-9 lg:py-4"
                      >
                        Send Enquiry
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="text-center">
                  <p className="mb-4 text-lg font-semibold text-green-400">
                    Your enquiry has been submitted successfully!
                  </p>
                  <a
                    href="/FFOI Brochure.pdf" // Replace with your actual brochure URL
                    download
                    className="inline-block rounded-sm bg-primary px-6 py-3 text-white shadow-submit duration-300 hover:bg-primary/90"
                  >
                    Download Brochure
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Contact Details */}
          <div className="w-full lg:-ml-5 lg:w-5/12 xl:w-4/12">
            <div className="ml-0 h-[400px] space-y-5 bg-secondary/80 p-5 lg:h-[634px]">
              <h2 className="mb-5 text-2xl font-bold text-primary dark:text-white sm:text-3xl">
                Contact Us
              </h2>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-8 w-8 text-gray-300" />
                <div>
                  <p className="text-lg text-gray-300">Bharatiya Vidya Bhavan, Plot 3A, </p>
                  <p className="text-lg text-gray-300">Sector-30, Vashi, Navi Mumbai - 400703</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-8 w-8 text-gray-300" />
                <p className="text-lg text-gray-300">Info@ffoi.in</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-8 w-8 text-gray-300" />
                <p className="text-lg text-gray-300">+91 08065138207</p>
              </div>
              {/* Social Icons */}
              <div className="mt-4 flex gap-8 pt-4 lg:mt-16 lg:pt-11">
                <Link
                  href="https://www.instagram.com/ffoi_official?igsh=NmN3YjdqZGV5cHl6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-8 w-8 cursor-pointer text-primary transition-colors hover:text-white" />
                </Link>
                <Link
                  href="https://www.facebook.com/share/166zv8GL51/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-8 w-8 cursor-pointer text-primary transition-colors hover:text-white" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/finance-forum-of-india/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-8 w-8 cursor-pointer text-primary transition-colors hover:text-white" />
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
