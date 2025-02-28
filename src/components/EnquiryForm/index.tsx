"use client";

import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {Phone, ArrowDownToLine } from 'lucide-react'

const EnquiryForm = () => {
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
      <div className="fixed bg-white z-50 bottom-0 py-1 left-0 right-0 flex justify-center lg:hidden  gap-2 px-4">
        

        {/* Call Now Button */}
        <a
          href="tel:+1234567890"
          className="flex bg-primary text-white text-sm py-1 px-2 rounded shadow-lg  transition duration-300 items-center"
        >
        <Phone size={15} className="mr-1 " />  Call
        </a>

        {/* Download Brochure Button */}
        <button
          // href="/FFOI Brochure.pdf" 
          onClick={openModal}
          // download
          className="flex bg-primary text-white text-xs py-1 px-2 rounded shadow-lg  transition duration-300 items-center"
        >
       <ArrowDownToLine size={15} className="mr-1" />   Get Brochure
        </button>
        {/* Enquire Now Button */}
        <button
        // href="#contact"
          onClick={openModal}
          className="bg-primary text-white text-xs py-1 px-2 rounded shadow-lg  transition duration-300 items-center"
        >
          Enquire
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
                  Fill in your details and we will get back to you.
                </p>

                {/* Form */}
                <form>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-full">
                      <div className="mb-4 lg:mb-8">
                        <input
                          type="text"
                          placeholder="Name"
                          className="w-full rounded-sm border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary "
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-3 lg:mb-8">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          className="w-full rounded-sm border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary "
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-3 lg:mb-8">
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full rounded-sm border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary "
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-3 lg:mb-8">
                        <input
                          type="text"
                          placeholder="City"
                          className="w-full rounded-sm border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary "
                        />
                      </div>
                    </div>
                    <div className="mb-3 lg:mb-8 w-full px-4 md:w-1/2">
                      <select
                        name="whoAmI"
                        className="w-full rounded-sm border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary "
                        required
                      >
                        <option value="">Qualifications</option>
                        <option value="Student">Pursuing Graduation</option>
                        <option value="Professional">Graduate</option>
                        <option value="Entrepreneur">Post Graduate</option>
                        <option value="Entrepreneur">Other</option>
                      </select>
                    </div>
                    <div className="mb-4 w-full px-4">
                      <button className="rounded-sm bg-primary px-3 py-2 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark lg:px-9 lg:py-4">
                        Send Enquiry
                      </button>
                    </div>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default EnquiryForm;
