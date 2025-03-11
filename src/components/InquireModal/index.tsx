// components/InquireModal.tsx
import { useModal } from "@/components/ModalContext";
import {CircleX} from 'lucide-react'
import { useState } from "react";
import axios from "axios";
import Image from "next/image";

interface FormData {
  name: string;
  phone: string;
  email: string;
  qualification: string;
  city: string;
  message: string;
}
const InquireModal = () => {
  const { isOpen, closeModal } = useModal();
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

  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 pt-3 lg:pt-7">
      <div className="bg-dark p-4 lg:p-6 rounded-lg w-full lg:w-1/2">
      <div className="flex justify-end">
      <button onClick={closeModal} className="mt-2 text-gray-500"><CircleX /></button>
      </div>
      
             
              {!isSubmitted ? (
                
                <form onSubmit={handleSubmit}>
                  <h2 className="mb-3 text-2xl font-bold text-primary dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Enquire Now
              </h2>
                  <div className="-mx-4 flex flex-wrap">
                    {/* Name */}
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-3 lg:mb-4">
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
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
                  {/* <Image src="/thank-you.png" alt="ThankYou" width={400} height={250} /> */}
                  <p className="mb-4 text-lg lg:text-2xl font-semibold text-primary">
                  Thank you! Your enquiry has been submitted successfully.
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
  );
};

export default InquireModal;
