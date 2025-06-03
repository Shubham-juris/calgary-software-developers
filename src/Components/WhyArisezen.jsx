import React from "react";
import { MdHomeWork } from "react-icons/md";
import { FaUserFriends, FaHandHoldingHeart, FaFolderOpen, FaUsers } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { HiLightBulb } from "react-icons/hi";
import { BsStars } from "react-icons/bs";

function WhyFusion() {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="text-gray-900 flex flex-col justify-center items-center px-6 md:px-48 mx-3">
        <h2 className="text-4xl font-extrabold pb-6 text-center bg-gradient-to-r from-blue-600 to-teal-400 text-transparent bg-clip-text">
          Why Choose Fusion Byte — Calgary’s Trusted Software Partner
        </h2>
        <p className="text-center text-lg font-light max-w-3xl text-gray-700">
          We specialize in delivering tailored software development and IT solutions to businesses across Calgary.
          Our team combines deep local market knowledge with cutting-edge technology expertise to drive real results.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-start gap-10 mt-14 px-4 md:px-20">
        {/* Each card */}
        <div className="group cursor-pointer transition-transform duration-300 hover:-translate-y-3 bg-white rounded-xl shadow-lg w-60 h-60 p-8 flex flex-col justify-start gap-6">
          <FaUserFriends size={50} className="text-blue-600 group-hover:text-teal-500 transition-colors" />
          <h3 className="text-lg font-semibold text-gray-900">
            Experienced Calgary-Based Software Experts
          </h3>
          <p className="text-gray-600 text-sm">
            Our local team understands Calgary’s unique business landscape and tech needs.
          </p>
        </div>

        <div className="group cursor-pointer transition-transform duration-300 hover:-translate-y-3 bg-white rounded-xl shadow-lg w-60 h-60 p-8 flex flex-col justify-start gap-6">
          <MdHomeWork size={50} className="text-blue-600 group-hover:text-teal-500 transition-colors" />
          <h3 className="text-lg font-semibold text-gray-900">
            Proven Remote & On-Site IT Solutions
          </h3>
          <p className="text-gray-600 text-sm">
            Flexible delivery models to suit Calgary businesses, from remote support to onsite deployments.
          </p>
        </div>

        <div className="group cursor-pointer transition-transform duration-300 hover:-translate-y-3 bg-white rounded-xl shadow-lg w-60 h-60 p-8 flex flex-col justify-start gap-6">
          <FaHandHoldingHeart size={50} className="text-blue-600 group-hover:text-teal-500 transition-colors" />
          <h3 className="text-lg font-semibold text-gray-900">
            Building Long-Term Client Partnerships
          </h3>
          <p className="text-gray-600 text-sm">
            We prioritize trust and open communication to support your business growth.
          </p>
        </div>

        <div className="group cursor-pointer transition-transform duration-300 hover:-translate-y-3 bg-white rounded-xl shadow-lg w-60 h-60 p-8 flex flex-col justify-start gap-6">
          <BiSolidLike size={50} className="text-blue-600 group-hover:text-teal-500 transition-colors" />
          <h3 className="text-lg font-semibold text-gray-900">
            Commitment to Quality & Results
          </h3>
          <p className="text-gray-600 text-sm">
            Delivering robust, scalable solutions with a track record of successful projects.
          </p>
        </div>

        <div className="group cursor-pointer transition-transform duration-300 hover:-translate-y-3 bg-white rounded-xl shadow-lg w-60 h-60 p-8 flex flex-col justify-start gap-6">
          <FaFolderOpen size={50} className="text-blue-600 group-hover:text-teal-500 transition-colors" />
          <h3 className="text-lg font-semibold text-gray-900">
            Agile Project Management
          </h3>
          <p className="text-gray-600 text-sm">
            Efficient workflows and transparent processes tailored to your needs.
          </p>
        </div>

        <div className="group cursor-pointer transition-transform duration-300 hover:-translate-y-3 bg-white rounded-xl shadow-lg w-60 h-60 p-8 flex flex-col justify-start gap-6">
          <HiLightBulb size={50} className="text-blue-600 group-hover:text-teal-500 transition-colors" />
          <h3 className="text-lg font-semibold text-gray-900">
            Innovation at the Core
          </h3>
          <p className="text-gray-600 text-sm">
            We stay ahead with the latest tech trends to keep your solutions future-proof.
          </p>
        </div>

        <div className="group cursor-pointer transition-transform duration-300 hover:-translate-y-3 bg-white rounded-xl shadow-lg w-60 h-60 p-8 flex flex-col justify-start gap-6">
          <BsStars size={50} className="text-blue-600 group-hover:text-teal-500 transition-colors" />
          <h3 className="text-lg font-semibold text-gray-900">
            Excellence in Delivery
          </h3>
          <p className="text-gray-600 text-sm">
            We aim for excellence in every project, ensuring satisfaction and performance.
          </p>
        </div>

        <div className="group cursor-pointer transition-transform duration-300 hover:-translate-y-3 bg-white rounded-xl shadow-lg w-60 h-60 p-8 flex flex-col justify-start gap-6">
          <FaUsers size={50} className="text-blue-600 group-hover:text-teal-500 transition-colors" />
          <h3 className="text-lg font-semibold text-gray-900">
            A Collaborative & Supportive Culture
          </h3>
          <p className="text-gray-600 text-sm">
            Our team’s culture fosters creativity, teamwork, and client focus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyFusion;
