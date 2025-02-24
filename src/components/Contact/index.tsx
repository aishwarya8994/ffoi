import NewsLatterBox from "./NewsLatterBox";
import {
  MapPin,
  Mail,
  User,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";
import Link from "next/link";

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
              className="mb-12 rounded-sm bg-dark px-8 py-11 shadow-three  sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-primary dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Enquire Now
              </h2>
              <p className="mb-3 text-sm font-medium text-white lg:mb-12 lg:text-base">
                Our support team will get back to you ASAP via email.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-3 lg:mb-8">
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
                    <div className="mb-3 lg:mb-8">
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
                    <div className="mb-3 lg:mb-8">
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
                    <div className="mb-3 lg:mb-8">
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
                  {/* <div className="mb-3 lg:mb-8 w-full px-4 md:w-1/2">
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
                  <div className="mb-3 lg:mb-8 w-full px-4 md:w-1/2">
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
                  <div className="mb-3 lg:mb-8 w-full px-4 md:w-1/2">
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
                  <p className="text-lg text-gray-300">
                    Office No.2, Vimla Plaza
                  </p>
                  <p className="text-lg text-gray-300">
                    Sector 5, Ghansoli - 400701
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="h-8 w-8 text-gray-300" />
                <p className="text-lg text-gray-300">Info@ffoi.in</p>
              </div>

              {/* Username */}
              {/* <div className="flex items-center gap-3">
                <User className="h-8 w-8 text-gray-300" />
                <p className="text-lg text-gray-300">mike.chemardin</p>
              </div> */}

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="h-8 w-8 text-gray-300" />
                <p className="text-lg text-gray-300">+91 08065138207</p>
              </div>

              {/* Social Icons */}
              <div className="mt-4 lg:mt-16 flex gap-8 pt-4 lg:pt-11">
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
