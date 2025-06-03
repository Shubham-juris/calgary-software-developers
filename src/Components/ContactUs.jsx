import React, { useEffect } from "react";
import { FaFacebookSquare, FaPhoneAlt, FaInstagram, FaYoutube } from "react-icons/fa";
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
        <img src="/About-pics/About-Main.webp" className="w-full object-cover" />
        <div className="absolute text-white text-2xl sm:text-5xl font-semibold flex flex-col h-full justify-center text-center items-center w-full">
          <p>Contact Us</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-slate-900 to-white px-3">
        <div className="py-8 text-center text-white text-xl">
          <p>
            Collaborate with Calgary's leading software development team. Let's build the future—together.
          </p>
        </div>

        <div className="bg-white sm:p-14 p-8 rounded-3xl flex flex-col sm:flex-row">
          {/* Left Side - Contact Info */}
          <div className="bg-indigo-900 text-white sm:w-2/5 rounded-3xl p-10 flex flex-col gap-4">
            <p className="font-bold text-2xl">Get in Touch</p>

            <div className="flex items-center gap-3">
              <IoLocationSharp size={32} className="text-sky-400" />
              <p>Calgary, Alberta</p>
            </div>

            <div className="flex items-center gap-3">
              <HiOutlineMailOpen size={28} className="text-orange-400" />
              <p>fusionbyte@outlook.com</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt size={26} className="text-green-400" />
              <p>+1 (403) 123-4567</p>
            </div>

            <div className="flex gap-4 pt-6 text-white">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare size={32} />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={32} />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={32} />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <IoLogoLinkedin size={32} />
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="sm:w-3/5 sm:px-6 pt-6">
            <p className="font-bold text-2xl mb-4">Project Inquiry Form</p>

            <div className="flex flex-wrap gap-5">
              <div className="flex items-center border rounded-xl w-full sm:w-[48%] px-4 py-3">
                <IoMdPerson className="text-slate-400 mr-2" />
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full outline-none"
                />
              </div>
              <div className="flex items-center border rounded-xl w-full sm:w-[48%] px-4 py-3">
                <IoMdPerson className="text-slate-400 mr-2" />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full outline-none"
                />
              </div>
              <div className="flex items-center border rounded-xl w-full sm:w-[48%] px-4 py-3">
                <HiOutlineMailOpen className="text-slate-400 mr-2" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full outline-none"
                />
              </div>
              <div className="flex items-center border rounded-xl w-full sm:w-[48%] px-4 py-3">
                <FaPhoneAlt className="text-slate-400 mr-2" />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full outline-none"
                />
              </div>
            </div>

            <div className="mt-4">
              <textarea
                rows="6"
                placeholder="Tell us about your software needs..."
                className="w-full border rounded-xl px-4 py-3 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex sm:justify-end justify-center py-6">
          <button className="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-3 px-10 rounded-xl transition duration-300">
            Submit Message
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
