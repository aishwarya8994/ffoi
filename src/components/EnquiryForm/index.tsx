"use client";

import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const EnquiryForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      {/* Sticky Button for Mobile */}
      <div className="fixed z-50 bottom-4 left-0 right-0 flex justify-center lg:hidden">
        <button
          onClick={openModal}
          className="bg-primary text-white py-3 px-6 rounded-full shadow-lg hover:bg-primary-dark transition duration-300"
        >
          Enquire Now
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
                      {/* <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                         Name
                      </label> */}
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full rounded-sm border border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary "
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-4 lg:mb-8">
                      {/* <label
                        htmlFor="contact"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                       Phone Number

                      </label> */}
                      <input
                        type="email"
                        placeholder="Phone Number"
                        className="w-full rounded-sm border border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary "
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-4 lg:mb-8">
                      {/* <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                         Email
                      </label> */}
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-sm border border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary "
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-4 lg:mb-8">
                      {/* <label
                        htmlFor="city"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                         City
                      </label> */}
                      <input
                        type="text"
                        placeholder="City"
                        className="w-full rounded-sm border border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary "
                      />
                    </div>
                  </div>
                  {/* <div className="mb-8 w-full px-4 md:w-1/2">
                    <select
                      name="whoAmI"
                      className="w-full rounded-sm border border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary "
                      required
                    >
                      <option value="">Qualifications</option>
                      <option value="Student">Pursuing Graduation</option>
                      <option value="Professional">Graduate</option>
                      <option value="Entrepreneur">Post Graduate</option>
                    </select>
                  </div> */}
                  <div className="mb-4 lg:mb-8 w-full px-4 md:w-1/2">
                    <select
                      name="state"
                      className="w-full rounded-sm border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                      required
                    >
                      <option value="">Select State</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">
                        Arunachal Pradesh
                      </option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Andaman and Nicobar Islands">
                        Andaman and Nicobar Islands
                      </option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Dadra and Nagar Haveli and Daman and Diu">
                        Dadra and Nagar Haveli and Daman and Diu
                      </option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Puducherry">Puducherry</option>
                      <option value="Ladakh">Ladakh</option>
                      <option value="Jammu and Kashmir">
                        Jammu and Kashmir
                      </option>
                    </select>
                  </div>
                  <div className="mb-4 lg:mb-8 w-full px-4 md:w-1/2">
                    <select
                      name="whoAmI"
                      className="w-full rounded-sm border border border-gray-500 bg-[#2C303B] px-6 py-3 text-base text-body-color outline-none focus:border-primary "
                      required
                    >
                      <option value="">Work exp</option>
                      <option value="Student">Fresher</option>
                      <option value="Professional">Less than 1 year</option>
                      <option value="Entrepreneur">1 to 3 years</option>
                      <option value="Entrepreneur">3 to 5 years</option>
                      <option value="Entrepreneur">5 to 10 years</option>
                      <option value="Entrepreneur">10+ years</option>
                    </select>
                  </div>
                  {/* <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div> */}
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
