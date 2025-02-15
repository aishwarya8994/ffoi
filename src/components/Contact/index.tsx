import NewsLatterBox from "./NewsLatterBox";
import { MapPin, Mail, User, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative  bg-cover bg-center bg-no-repeat min-h-screen overflow-hidden py-16 md:py-20 lg:py-28"
    style={{ 
      backgroundImage: `url('/images/hero/Group-12.png')` // Replace with your actual image URL
    }}
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-content-end">
          <div className=" w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white/85 px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Enquire Now
              </h2>
              <p className="mb-3 lg:mb-12 text-sm lg:text-base font-medium text-white">
                Our support team will get back to you ASAP via email.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                         Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="contact"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                       Phone Number

                      </label>
                      <input
                        type="email"
                        placeholder="Enter your phone number"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                         Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                   <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="city"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                         City
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your city"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Qualification
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your qualification"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
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
                  <div className="w-full px-4">
                    <button className="rounded-sm bg-primary px-3 lg:px-9 py-2 lg:py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                     Send Enquiry
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="lg:-ml-5 w-full lg:w-5/12 xl:w-4/12 ">
            {/* <NewsLatterBox /> */}
           
       
        
        {/* Contact Details */}
        <div className="space-y-5 bg-secondary/80 p-5 h-[630px] ml-0">
         {/* Header */}
        <h2 className="mb-5 text-2xl font-bold text-primary dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">Contact Us</h2>
          {/* Address */}
          <div className="flex items-start gap-3">
            <MapPin className="w-8 h-8 mt-1 text-gray-300" />
            <div>
              <p className="text-lg text-gray-300">23, Avenue de Paris</p>
              <p className="text-lg text-gray-300">75012 Paris</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail className="w-8 h-8 text-gray-300" />
            <p className="text-lg text-gray-300">hello@mikechemardin.com</p>
          </div>

          {/* Username */}
          <div className="flex items-center gap-3">
            <User className="w-8 h-8 text-gray-300" />
            <p className="text-lg text-gray-300">mike.chemardin</p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <Phone className="w-8 h-8 text-gray-300" />
            <p className="text-lg text-gray-300">+91 123456789</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-8 mt-16 pt-11">
            <Instagram 
              className="w-8 h-8 text-primary cursor-pointer hover:text-white transition-colors" 
            />
            <Twitter 
              className="w-8 h-8 text-primary cursor-pointer hover:text-white transition-colors" 
            />
            <Linkedin 
              className="w-8 h-8 text-primary cursor-pointer hover:text-white transition-colors" 
            />
          </div>
        </div>
      </div>
         
        </div>
      </div>
    </section>
  );
};

export default Contact;
