"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { Phone, MessageCircle, ArrowDownToLine, Send  } from "lucide-react";
import DownloadBrochure from "@/components/DownloadBrochure";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "  fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
            : "absolute bg-gray-200 !bg-opacity-80"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-2"
                } `}
              >
                <img 
                  src="/images/logo/FFOI-Logo.png"
                  alt="logo"
                  width={200}
                  height={40}
                  className="w-full"
                />
                
              </Link>
            </div>
            
            <div className="flex w-full items-center justify-end px-2">
              <div>
              {/* Contact Icon (Mobile Only) */}
              {/* <Link href="tel:+918065138207" className="lg:hidden">
     <div className="bg-secondary rounded-full p-2">
     <Phone className=" text-white" size={18} />
     </div>
    </Link> */}
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-full rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20  lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:hidden lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              usePathName === menuItem.path
                                ? "text-dark font-semibold hover:text-primary"
                                : "text-dark font-semibold hover:text-primary "
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                  {/* <Link
                  href="tel:1234567892"
                  className="block   lg:hidden"
                >
                  <div className="flex bg-primary rounded px-3 lg:px-6 py-2 text-white hover:bg-[#375210] mb-3">
                  <Phone className="mr-2 text-sm lg:text-base text-white" />{" "}
                  <span>+91 123456789</span>
                  </div>
                </Link>
                <Link
                href="#contact" scroll={false}
                  
                  className="block   lg:hidden"
                >
                  <div className="flex bg-primary rounded px-3  lg:px-6 py-2 text-white hover:bg-[#375210] mb-3">
                  <ArrowDownToLine className="mr-2 text-sm lg:text-base text-white" />{" "}
                  <span>Download Brochure</span>
                  </div>
                </Link>  
                <Link
                href="#contact"
                  
                  className="block  lg:hidden"
                >
                  <div className="flex bg-secondary rounded px-6 py-2 text-white hover:bg-secondary/70">
                  
                  
                  <span>Enquire Now</span>
                  <Send className="ml-2 text-sm lg:text-base text-white" />
                  </div>
                </Link> */}
               {/* <div className="block lg:hidden ">
               <DownloadBrochure/>
               </div> */}
              
                </nav>
              </div>
              <div className="flex items-center justify-end gap-4 pr-16 lg:pr-0">
                {/* <Link
                  href="/signin"
                  className="hidden px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white md:block"
                >
                  Sign In
                </Link> */}
                {/* <Link
                  href="/signup"
                  className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
                >
                  Call Now
                </Link> */}
                <Link
                  href="/"
                  className="hidden lg:block   "
                >
                  <div className="flex items-center bg-primary rounded px-3 lg:px-6 py-2 text-white hover:bg-[#375210]">
                  <Phone className="mr-2 text-lg text-white" size={20} />{" "}
                  <span>+918065138207</span>
                  </div>
                </Link>
                <Link
                href="#contact"
                  // href="/"
                  className="hidden   lg:block"
                >
                  <div className="flex items-center bg-primary rounded px-6 py-2 text-white hover:bg-[#375210]">
                  <ArrowDownToLine className="mr-2 text-lg text-white" size={20} />{" "}
                  <span>Download Brochure</span>
                  </div>
                </Link>
                <Link
                href="#contact"
                 
                  className="hidden  lg:block"
                >
                  <div className="flex items-center bg-secondary rounded px-6 py-2 text-white hover:bg-secondary/70">
                  
                 
                  <span>Enquire Now</span>
                  <Send className="ml-2 text-lg text-white" size={20} />
                  </div>
                </Link>
                  {/* <div className="hidden md:block ">
                  <DownloadBrochure/>
                  </div> */}

                {/* <div>
                  <ThemeToggler />
                </div> */}
              </div>
            </div>
            
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
