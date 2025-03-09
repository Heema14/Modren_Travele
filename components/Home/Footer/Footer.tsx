import { Support, OtherServices, Company } from "@/constant/constant";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer data-aos="fade-up" id="footer" className="py-16">
      <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 lg:grid-cols-4 gap-10">
        <ul className="space-y-3">
          <h1 className="text-lg font-bold">Company</h1>

          {Company.map((item) => (
            <li
              key={item.id}
              className="flex items-center duration-300 hover:pl-3 group"
            >
              <span className="opacity-0 translate-x-[-10px] duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                <IoIosArrowForward />
              </span>
              <a
                className="ml-2 text-gray-700 font-medium text-sm duration-300 hover:text-blue-950"
                href={item.url}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="space-y-3">
          <h1 className="text-lg font-bold">Support</h1>

          {Support.map((n) => (
            <li
              key={n.id}
              className="flex items-center duration-300 hover:pl-3 group"
            >
              <span className="opacity-0 translate-x-[-10px] duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                <IoIosArrowForward />
              </span>
              <a
                className="ml-2 text-gray-700 font-medium text-sm duration-300 hover:text-blue-950"
                href={n.url}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="space-y-3">
          <h1 className="text-lg font-bold">Other Services</h1>

          {OtherServices.map((n) => (
            <li
              key={n.id}
              className="flex items-center duration-300 hover:pl-3 group"
            >
              <span className="opacity-0 translate-x-[-10px] duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                <IoIosArrowForward />
              </span>
              <a
                className="ml-2 text-gray-700 font-medium text-sm duration-300 hover:text-blue-950"
                href={n.url}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="space-y-3">
          <h1 className="text-lg font-bold">Contact Us</h1>
          <div className="my-6">
            <h1 className="text-sm text-gray-600 mb-2">Our Mobile Number</h1>
            <a
              href="tel:+123 45646468"
              className="text-base font-bold text-blue-950"
            >
              +123 45646468
            </a>
          </div>
          <div>
            <h1 className="text-sm text-gray-600 mb-2">Our Email</h1>
            <a
              href="mailto:example123@gmail.com"
              className="text-base font-bold text-blue-950"
            >
              example123@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* bottom part */}
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="text-center md:text-left">
          Copyright &copy; 2024 WebDev. All rights By (❤️ Ibrahim Yassin ❤️).
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social: </span>
          <span className="text-blue-600 duration-200 text-lg cursor-pointer hover:text-white w-7 h-7 flex justify-center items-center flex-col border border-gray-500 rounded-full bg-white hover:bg-blue-600">
            <FaFacebook />
          </span>
          <span className="text-red-600 duration-200 text-lg cursor-pointer hover:text-white w-7 h-7 flex justify-center items-center flex-col border border-gray-500 rounded-full bg-white hover:bg-red-600">
            <FaInstagram />
          </span>
          <span className="text-blue-600 duration-200 text-lg cursor-pointer hover:text-white w-7 h-7 flex justify-center items-center flex-col border border-gray-500 rounded-full bg-white hover:bg-blue-600">
            <FaTwitter />
          </span>
          <span className="text-gray-600 duration-200 text-lg cursor-pointer hover:text-white w-7 h-7 flex justify-center items-center flex-col border border-gray-500 rounded-full bg-white hover:bg-gray-600">
            <FaGithub />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
