import React, { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { HiOutlineMailOpen } from "react-icons/hi";
import Footer from "./Footer";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <div className="relative h-60 sm:h-80">
        <img
          src="/About-pics/About-Main.webp"
          className="w-full h-full object-cover"
          alt="Contact Banner"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-5xl font-bold">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Intro Text */}
        <div className="py-10 text-center text-slate-700 text-lg sm:text-xl font-medium">
          <p>
            Collaborate with Calgary's leading software development team. Let's
            build the future—together.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white shadow-xl sm:p-10 p-6 rounded-3xl flex flex-col sm:flex-row gap-8">
          {/* Left Side - Contact Info */}
          <div className="bg-gradient-to-br from-sky-600 to-blue-700 text-white sm:w-2/5 rounded-3xl p-6 sm:p-10 flex flex-col gap-6">
            <p className="font-bold text-xl sm:text-2xl">Get in Touch</p>

            {/* Address */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=5211+50+St,+Drayton+Valley,+AB+T7A1C9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-sm sm:text-base hover:underline"
            >
              <IoLocationSharp size={26} className="mt-1" />
              <p>5211 50 St, Drayton Valley, AB T7A1C9</p>
            </a>

            {/* Email */}
            <a
              href="mailto:developerscalgarysoftware@gmail.com"
              className="flex items-start gap-2 text-sm sm:text-base hover:underline"
            >
              <HiOutlineMailOpen size={22} className="mt-1" />
              <p className="break-all">developerscalgarysoftware@gmail.com</p>
            </a>

            {/* Phone */}
            <a
              href="tel:+14034099268"
              className="flex items-start gap-3 text-sm sm:text-base hover:underline"
            >
              <FaPhoneAlt size={20} className="mt-1" />
              <p>+1 (403) 409-9268</p>
            </a>
          </div>

          {/* Right Side - Form */}
          <div className="sm:w-3/5 sm:px-4 pt-4">
            <p className="font-bold text-xl sm:text-2xl mb-6 text-slate-800">
              Project Inquiry Form
            </p>

            {/* Input Fields */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <IoMdPerson />, placeholder: "First Name" },
                { icon: <IoMdPerson />, placeholder: "Last Name" },
                {
                  icon: <HiOutlineMailOpen />,
                  placeholder: "Email Address",
                  type: "email",
                },
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
                    className="w-full outline-none bg-transparent text-sm sm:text-base"
                  />
                </div>
              ))}
            </div>

            {/* Message Box */}
            <div className="mt-4">
              <textarea
                rows="6"
                placeholder="Tell us about your software needs..."
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none bg-gray-50 text-sm sm:text-base"
              />
            </div>

            {/* Submit Button */}
            <div className="flex sm:justify-end justify-center py-6">
              <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 sm:px-10 rounded-xl transition duration-300 shadow-md text-sm sm:text-base">
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
