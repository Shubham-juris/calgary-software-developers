import React, { useEffect } from "react";
import GetInTouch from "./GetInTouch";
import Footer from "../Components/Footer";
import Nabbar from "../Components/Nabbar";

const FrontEndDev = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nabbar />

      <div className="h-56 flex relative">
        <img
          src="/Front-End-Dev-jpg/calgary-frontend-dev.webp"
          className="w-full object-cover"
          alt="Front End Development Services Calgary"
        />

        <div className="absolute text-white text-3xl font-bold flex flex-col h-full justify-center text-center items-center w-full bg-black bg-opacity-40">
          Front End Development Solutions for Calgary Businesses
        </div>
      </div>

      <div className="flex justify-center text-xl font-thin py-8">
        <span className="border-b-2 py-3 border-blue-600">
          Modern Platforms and Technologies We Use
        </span>
      </div>

      <div className="flex flex-wrap justify-center">
        {/* Vue.js */}
        <div className="border rounded-lg px-8 py-10 flex flex-col text-center sm:w-1/3 m-4 shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex justify-center pb-4">
            <img
              src="/Front-End-Dev-jpg/vuejs.png.webp"
              alt="Vue.js Logo"
              className="object-contain h-32"
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">Vue.js Development</h3>
          <p className="text-gray-700">
            Calgary software teams rely on Vue.js to build fast, lightweight, and
            highly interactive user interfaces for web applications with ease.
          </p>
          <div className="flex justify-center mt-6">
            <button className="rounded-3xl bg-blue-600 text-white hover:bg-blue-700 duration-500 px-6 py-2.5">
              Explore More
            </button>
          </div>
        </div>

        {/* Bootstrap */}
        <div className="border rounded-lg px-8 py-10 flex flex-col text-center sm:w-1/3 m-4 shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex justify-center pb-4">
            <img
              src="/Front-End-Dev-jpg/bootstrap.png.webp"
              alt="Bootstrap Logo"
              className="object-contain h-32"
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">Bootstrap Framework</h3>
          <p className="text-gray-700">
            Delivering responsive and mobile-first web designs, Bootstrap helps
            Calgary developers build consistent, modern websites with rapid turnaround.
          </p>
          <div className="flex justify-center mt-6">
            <button className="rounded-3xl bg-blue-600 text-white hover:bg-blue-700 duration-500 px-6 py-2.5">
              Explore More
            </button>
          </div>
        </div>

        {/* React.js */}
        <div className="border rounded-lg px-8 py-10 flex flex-col text-center sm:w-1/3 m-4 shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex justify-center pb-4">
            <img
              src="/Front-End-Dev-jpg/reactjs.png.webp"
              alt="React.js Logo"
              className="object-contain h-32"
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">React.js Development</h3>
          <p className="text-gray-700">
            React is a top choice among Calgary developers for building
            dynamic, scalable, and user-friendly web applications across
            diverse industries.
          </p>
          <div className="flex justify-center mt-6">
            <button className="rounded-3xl bg-blue-600 text-white hover:bg-blue-700 duration-500 px-6 py-2.5">
              Explore More
            </button>
          </div>
        </div>

        {/* Angular */}
        <div className="border rounded-lg px-8 py-10 flex flex-col text-center sm:w-1/3 m-4 shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex justify-center pb-4">
            <img
              src="/Front-End-Dev-jpg/angular-logo.png.webp"
              alt="Angular Logo"
              className="object-contain h-32"
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">Angular Development</h3>
          <p className="text-gray-700">
            We assist Calgary businesses in building robust, scalable Angular
            web and mobile apps tailored for enterprise-grade performance.
          </p>
          <div className="flex justify-center mt-6">
            <button className="rounded-3xl bg-blue-600 text-white hover:bg-blue-700 duration-500 px-6 py-2.5">
              Explore More
            </button>
          </div>
        </div>

        {/* Ruby on Rails */}
        <div className="border rounded-lg px-8 py-10 flex flex-col text-center sm:w-1/3 m-4 shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex justify-center pb-4">
            <img
              src="/Front-End-Dev-jpg/rails-logo.jpg.webp"
              alt="Ruby on Rails Logo"
              className="object-contain h-32"
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">Ruby on Rails</h3>
          <p className="text-gray-700">
            Calgary startups and enterprises use Ruby on Rails for rapid
            development of scalable, maintainable web applications.
          </p>
          <div className="flex justify-center mt-6">
            <button className="rounded-3xl bg-blue-600 text-white hover:bg-blue-700 duration-500 px-6 py-2.5">
              Explore More
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-14 px-4 text-center">
        <span className="text-2xl font-semibold mb-4">Ready to Build Your Frontend?</span>
        <button className="bg-amber-500 hover:bg-white hover:text-amber-500 border-2 border-amber-500 rounded-3xl px-12 py-4 font-semibold transition-colors duration-200 sm:w-3/12">
          Contact Us Now
        </button>
        <span className="mt-10 text-lg font-light">Explore Our Related Case Studies</span>
      </div>

      <GetInTouch />
      <Footer />
    </div>
  );
};

export default FrontEndDev;
