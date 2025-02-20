import NewsLatterBox from "./NewsLatterBox";
import {
  MapPin,
  Mail,
  User,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative  min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat py-16 md:py-20 lg:py-28"
      style={{
        backgroundImage: `url('/images/hero/Group-12.png')`, // Replace with your actual image URL
      }}
    >
      <div className="container">
        <div className="justify-content-end -mx-4 flex flex-wrap">
          <div className=" w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white/85 px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Enquire Now
              </h2>
              <p className="mb-3 text-sm font-medium text-white lg:mb-12 lg:text-base">
                Our support team will get back to you ASAP via email.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      {/* <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                         Name
                      </label> */}
                      <input
                        type="text"
                        placeholder="Name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      {/* <label
                        htmlFor="contact"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                       Phone Number

                      </label> */}
                      <input
                        type="email"
                        placeholder="Phone Number"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      {/* <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                         Email
                      </label> */}
                      <input
                        type="email"
                        placeholder="Email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      {/* <label
                        htmlFor="city"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                         City
                      </label> */}
                      <input
                        type="text"
                        placeholder="City"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <select
                      name="whoAmI"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      required
                    >
                      <option value="">Qualifications</option>
                      <option value="Student">Student</option>
                      <option value="Professional">Professional</option>
                      <option value="Entrepreneur">Entrepreneur</option>
                    </select>
                  </div>
                  <div className="w-full px-4 md:w-1/2 mb-8">
                    <select
                      name="whoAmI"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      required
                    >
                      <option value="">State</option>
                      <option value="Student">Student</option>
                      <option value="Professional">Professional</option>
                      <option value="Entrepreneur">Entrepreneur</option>
                    </select>
                  </div>
                  <div className="w-full px-4 md:w-1/2 mb-8">
                    <select
                      name="whoAmI"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      required
                    >
                      <option value="">Work exp</option>
                      <option value="Student">Student</option>
                      <option value="Professional">Professional</option>
                      <option value="Entrepreneur">Entrepreneur</option>
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
                  <div className="w-full px-4 mb-4">
                    <button className="rounded-sm bg-primary px-3 py-2 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark lg:px-9 lg:py-4">
                      Send Enquiry
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full lg:-ml-5 lg:w-5/12 xl:w-4/12 ">
            {/* <NewsLatterBox /> */}

            {/* Contact Details */}
            <div className="ml-0 h-[624px] space-y-5 bg-secondary/80 p-5">
              {/* Header */}
              <h2 className="mb-5 text-2xl font-bold text-primary dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Contact Us
              </h2>
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-8 w-8 text-gray-300" />
                <div>
                  <p className="text-lg text-gray-300">23, Avenue de Paris</p>
                  <p className="text-lg text-gray-300">75012 Paris</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="h-8 w-8 text-gray-300" />
                <p className="text-lg text-gray-300">hello@mikechemardin.com</p>
              </div>

              {/* Username */}
              <div className="flex items-center gap-3">
                <User className="h-8 w-8 text-gray-300" />
                <p className="text-lg text-gray-300">mike.chemardin</p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="h-8 w-8 text-gray-300" />
                <p className="text-lg text-gray-300">+91 123456789</p>
              </div>

              {/* Social Icons */}
              <div className="mt-16 flex gap-8 pt-11">
                <Instagram className="h-8 w-8 cursor-pointer text-primary transition-colors hover:text-white" />
                <Twitter className="h-8 w-8 cursor-pointer text-primary transition-colors hover:text-white" />
                <Linkedin className="h-8 w-8 cursor-pointer text-primary transition-colors hover:text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
