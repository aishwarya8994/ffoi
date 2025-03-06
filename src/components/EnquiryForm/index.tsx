"use client";

import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {Phone, ArrowDownToLine } from 'lucide-react'
import axios from "axios";

interface FormData {
  name: string;
  phone: string;
  email: string;
  qualification: string;
  city: string;
  message: string;
}


const EnquiryForm = () => {

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





  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="container">
      {/* Sticky Buttons for Mobile */}
      <div className="fixed bg-white z-50 bottom-0 w-full py-2 flex justify-between left-0 right-0 flex justify-center lg:hidden  gap-2 px-2">
        

        {/* Call Now Button */}
        <a
          href="tel:+918065138207"
          className="flex-grow flex bg-primary text-white text-sm py-2 px-3 rounded shadow-lg  transition duration-300 justify-center items-center"
        >
        <Phone size={16} className="mr-1 " />  Call
        </a>
         {/* Enquire Now Button */}
        <button
        // href="#contact"
          onClick={openModal}
          className="flex-grow bg-primary text-white text-sm py-2 px-3 rounded shadow-lg  transition duration-300 justify-center items-center"
        >
          Enquire
        </button>
        {/* Download Brochure Button */}
        <button
          // href="/FFOI Brochure.pdf" 
          onClick={openModal}
          // download
          className="flex-grow flex bg-primary text-white text-sm py-2 px-3 rounded shadow-lg  transition duration-300 justify-center items-center"
        >
       <ArrowDownToLine size={16} className="mr-1" />   Get Brochure
        </button>
       
        
      </div>

      {/* Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md bg-dark/80 rounded-lg shadow-lg p-6">
                <Dialog.Title className="text-xl font-semibold text-primary">
                  Enquiry Form
                </Dialog.Title>
                <p className="text-sm text-gray-500 mb-4">
                Our support team will get back to you ASAP via email.
                </p>

                {/* Form */}
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
                          required
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
                        className="rounded-sm bg-primary px-3 py-2 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 lg:px-9 lg:py-4"
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default EnquiryForm;
