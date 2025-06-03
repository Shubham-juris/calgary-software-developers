import React from "react";
import Nabbar from "../Components/Nabbar";

const GetInTouch = () => {
  return (
    <div>
      <Nabbar />
      <div className="flex gap-8 px-10 justify-center sm:flex-row flex-col bg-white py-20">
        {/* Let's Talk */}
        <div className="flex relative justify-center items-center text-2xl group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500">
          <img
            src="/Get-In-Touch-Pics/calgary-tech-meeting.webp"
            alt="Let's Talk - Calgary Software Developers"
            className="object-cover w-full h-56"
          />
          <p className="absolute text-white px-4 text-center font-semibold text-lg bg-blue-900 bg-opacity-60 w-full py-4 group-hover:-translate-y-2 duration-1000">
            Let’s Talk — Build Your Calgary Software Solution
          </p>
        </div>

        {/* We're Hiring */}
        <div className="flex relative justify-center items-center text-2xl group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500">
          <img
            src="/Get-In-Touch-Pics/calgary-software-team.webp"
            alt="We're Hiring - Calgary Software Developers"
            className="object-cover w-full h-56"
          />
          <p className="absolute text-white px-4 text-center font-semibold text-lg bg-blue-900 bg-opacity-60 w-full py-4 group-hover:-translate-y-2 duration-1000">
            Join Our Calgary Tech Team — We’re Hiring Talented Developers
          </p>
        </div>

        {/* Tech Blog */}
        <div className="flex relative justify-center items-center text-2xl group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500">
          <img
            src="/Get-In-Touch-Pics/calgary-tech-blog.webp"
            alt="Technology Blog - Calgary Software Developers"
            className="object-cover w-full h-56"
          />
          <p className="absolute text-white px-4 text-center font-semibold text-lg bg-blue-900 bg-opacity-60 w-full py-4 group-hover:-translate-y-2 duration-1000">
            Tech Insights — Digital Transformation Success in Calgary
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="flex flex-col text-center gap-3 max-w-3xl mx-auto px-4">
          <span className="text-3xl font-bold text-blue-900">Get in Touch with Calgary’s Software Experts</span>
          <p className="text-lg text-gray-700">
            Whether you’re looking to start a new project, explore career opportunities, or just have questions, we’re here to help.
            Contact us by phone, email, or through our online form.
          </p>
        </div>

        <div className="flex justify-center sm:gap-10 py-10 sm:flex-row flex-col max-w-4xl mx-auto px-4">
          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-xl sm:w-4/12 flex flex-col gap-3 justify-center items-center py-10 px-6 hover:-translate-y-2 transition-transform duration-500 cursor-pointer">
            <img
              src="/Get-In-Touch-Pics/phone-icon.webp"
              alt="Contact Phone"
              className="h-20 w-auto"
            />
            <span className="text-blue-900 font-semibold text-lg">Call Us: (403) 555-1234</span>
            <p className="text-gray-600 text-center">
              Calgary Office Hours: Mon - Fri, 9 AM - 6 PM
            </p>
          </div>

          {/* Request a Quote */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-xl sm:w-4/12 flex flex-col gap-3 justify-center items-center py-10 px-6 hover:-translate-y-2 transition-transform duration-500 cursor-pointer">
            <img
              src="/Get-In-Touch-Pics/quote-icon.webp"
              alt="Request a Quote"
              className="h-20 w-auto"
            />
            <span className="text-blue-900 font-semibold text-lg">Request a Quote</span>
            <p className="text-gray-600 text-center">
              Ready to get started? Tell us about your project and we’ll provide a detailed estimate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
