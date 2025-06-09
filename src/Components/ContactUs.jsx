import React, { useEffect } from "react";
import {
  FaFacebookSquare,
  FaPhoneAlt,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoLinkedin, IoLocationSharp } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { HiOutlineMailOpen } from "react-icons/hi";

import Nabbar from "./Nabbar";
import Footer from "./Footer";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nabbar />

      {/* Hero Section */}
      <div className="h-80 flex relative">
        <img
          src="/About-pics/About-Main.webp"
          className="w-full object-cover"
        />
        <div className="absolute text-white text-2xl sm:text-5xl font-semibold flex flex-col h-full justify-center text-center items-center w-full bg-black bg-opacity-40">
          <p>Contact Us</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-sky-50 to-white px-3">
        <div className="py-8 text-center text-slate-700 text-xl font-medium">
          <p>
            Collaborate with Calgary's leading software development team. Let's
            build the future—together.
          </p>
        </div>

        <div className="bg-white shadow-xl sm:p-14 p-8 rounded-3xl flex flex-col sm:flex-row gap-8">
          {/* Left Side - Contact Info */}
          <div className="bg-gradient-to-br from-sky-600 to-blue-700 text-white sm:w-2/5 rounded-3xl p-10 flex flex-col gap-6">
            <p className="font-bold text-2xl">Get in Touch</p>

            <div className="flex items-center gap-3">
              <IoLocationSharp size={30} className="text-white" />
              <p>5211 50 St, Drayton Valley, AB T7A1C9</p>
            </div>

            <div className="flex items-center gap-3">
              <HiOutlineMailOpen size={26} className="text-white" />
              <p>developerscalgarysoftware@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt size={24} className="text-white" />
              <p>+1 (403) 409-9268</p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="sm:w-3/5 sm:px-6 pt-6">
            <p className="font-bold text-2xl mb-4 text-slate-800">
              Project Inquiry Form
            </p>

            <div className="flex flex-wrap gap-5">
              {[
                { icon: <IoMdPerson />, placeholder: "First Name" },
                { icon: <IoMdPerson />, placeholder: "Last Name" },
                { icon: <HiOutlineMailOpen />, placeholder: "Email Address", type: "email" },
                { icon: <FaPhoneAlt />, placeholder: "Phone Number" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center border border-slate-300 rounded-xl w-full sm:w-[48%] px-4 py-3 bg-gray-50"
                >
                  <span className="text-sky-500 mr-2">{item.icon}</span>
                  <input
                    type={item.type || "text"}
                    placeholder={item.placeholder}
                    className="w-full outline-none bg-transparent"
                  />
                </div>
              ))}
            </div>

            <div className="mt-4">
              <textarea
                rows="6"
                placeholder="Tell us about your software needs..."
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none bg-gray-50"
              />
            </div>

            {/* Submit Button */}
            <div className="flex sm:justify-end justify-center py-6">
              <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-10 rounded-xl transition duration-300 shadow-md">
                Submit Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;

