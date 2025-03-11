"use client"; // Ensure it's a client component
import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

import axios from "axios";

interface FormData {
  name: string;
  phone: string;
  email: string;
  qualification: string;
  city: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    qualification: "",
    city: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

 
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError(null);

    try {
      // Kylas API submission
      const response = await axios.post(
        "https://api.kylas.io/v1/leads/",
        {
          firstName: form.name.split(" ")[0],
          lastName: form.name.split(" ").slice(1).join(" ") || "",
          emails: [
            {
              type: "OFFICE",
              value: form.email,
              primary: true,
            },
          ],
          phoneNumbers: [
            {
              type: "MOBILE",
              code: "IN",
              value: form.phone,
              dialCode: "+91",
              primary: true,
            },
          ],
          requirementName: `Qualification: ${form.qualification}\nCity: ${form.city}\n\nMessage: ${form.message}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": process.env.NEXT_PUBLIC_KYLAS_API_KEY,
          },
        },
      );

      // If API submission is successful
      setIsSubmitted(true);
      setLoading(false);
    } catch (error) {
      console.error("Error submitting lead:", error);
      setSubmitError("Failed to submit enquiry. Please try again.");
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat py-16 md:py-20 lg:py-28"
      style={{ backgroundImage: `url('/images/hero/Group-12.png')` }}
    >
      <div data-aos="fade-right" className="container">
        <div className="justify-content-end -mx-4 flex flex-wrap">
          <div className="w-full lg:w-7/12 lg:px-4 xl:w-8/12">
            <div className="mb-12 rounded-sm bg-dark px-8 py-11 shadow-three sm:p-[55px] lg:mb-5 lg:h-[630px] lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-primary dark:text-white sm:text-3xl">
                Enquire Now
              </h2>
              <p className="mb-3 text-sm font-medium text-white lg:mb-12">
                Our support team will get back to you ASAP via email.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="-mx-4 flex flex-wrap">
                    {/* Name */}
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-3 lg:mb-4">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full rounded-sm border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-3 lg:mb-4">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full rounded-sm border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-3 lg:mb-4">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full rounded-sm border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                        />
                      </div>
                    </div>

                    {/* Qualification */}
                    <div className="mb-3 w-full px-4 md:w-1/2 lg:mb-4">
                      <select
                        name="qualification"
                        required
                        value={form.qualification}
                        onChange={handleChange}
                        className="w-full rounded-sm border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                      >
                        <option value="">Select Your Qualification</option>
                        <option value="Pursuing Graduation">
                          Pursuing Graduation
                        </option>
                        <option value="Graduate">Graduate</option>
                        <option value="Post Graduate">Post Graduate</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* City */}
                    <div className="md:full w-full px-4">
                      <div className="mb-3 lg:mb-4">
                        <input
                          type="text"
                          name="city"
                          required
                          value={form.city}
                          onChange={handleChange}
                          placeholder="City"
                          className="w-full rounded-sm border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="w-full px-4">
                      <div className="mb-4">
                        <textarea
                          name="message"
                          rows={3}
                          
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Enter your Message"
                          className="w-full rounded-sm border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                        ></textarea>
                      </div>
                    </div>

                    {/* Error Message */}
                    {submitError && (
                      <div className="mb-4 w-full px-4">
                        <p className="text-sm text-red-500">{submitError}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="mb-4 flex w-full items-center justify-center px-4 lg:justify-start">
                      <button
                        type="submit"
                        className="rounded-sm bg-primary px-3 py-2 text-base lg:text-xl font-medium text-white shadow-submit duration-300 hover:bg-primary/90 lg:px-9 lg:py-4"
                        disabled={loading}
                      >
                        {loading ? "Submitting..." : "Send Enquiry"}
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
                    href="/FFOI Brochure.pdf"
                    download
                    className="inline-block rounded-sm bg-primary px-6 py-3 text-white shadow-submit duration-300 hover:bg-primary/90"
                  >
                    Download Brochure
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Contact Details Section (Unchanged) */}
          <div className="w-full lg:-ml-5 lg:w-5/12 xl:w-4/12">
            <div className="ml-0 h-[400px] space-y-5 bg-secondary/80 p-5 lg:h-[630px]">
              {/* Address, Email, Phone, Social Links (As per your original code) */}
              <h2 className="mb-5 text-2xl font-bold text-primary dark:text-white sm:text-3xl">
                Contact Us
              </h2>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-8 w-8 text-gray-300" />
                <div>
                  <p className="text-lg text-gray-300">
                    Bharatiya Vidya Bhavan, Plot 3A,{" "}
                  </p>
                  <p className="text-lg text-gray-300">
                    Sector-30, Vashi, Navi Mumbai - 400703
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-8 w-8 text-gray-300" />
                <p className="text-lg text-gray-300">Info@ffoi.in</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-8 w-8 text-gray-300" />
                <p className="text-lg text-gray-300">+91 8065138207</p>
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
