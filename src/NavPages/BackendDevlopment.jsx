import React, { useEffect } from "react";
import GetInTouch from "./GetInTouch";
import Footer from "../Components/Footer";
import Nabbar from "../Components/Nabbar";

const BackendDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nabbar />
      <div className="h-56 flex relative">
        <img
          src="/Backend-Dev/Calgary-backend.webp"
          className="w-full object-cover"
          alt="Calgary Software Backend Development"
        />

        <div className="absolute text-white text-3xl font-bold flex flex-col h-full justify-center text-center items-center w-full bg-black bg-opacity-40">
          Backend Development Solutions for Calgary Businesses
        </div>
      </div>

      <div className="flex justify-center text-xl font-light py-8">
        <span className="border-b-2 py-3 border-blue-500">
          Leading Backend Platforms & Technologies
        </span>
      </div>

      <div className="flex flex-wrap justify-center">
        {/* Go */}
        <div className="border rounded-lg px-8 py-10 flex flex-col text-center sm:w-1/3 m-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center pb-4 h-44">
            <img
              className="object-contain"
              src="/BackEnd-Pics/215px-Go_Logo_Blue.svg.png"
              alt="Go Programming Language"
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">Go (Golang)</h3>
          <p className="text-gray-700">
            Designed by Google, Go offers high-performance concurrency and
            simplicity, perfect for building scalable microservices and cloud-native applications.
            Calgary startups and enterprises trust Go for backend efficiency.
          </p>
          <div className="flex justify-center mt-6">
            <button className="rounded-3xl bg-blue-600 text-white hover:bg-blue-700 duration-500 px-6 py-2.5">
              Explore More
            </button>
          </div>
        </div>

        {/* C# */}
        <div className="border rounded-lg px-8 py-10 flex flex-col text-center sm:w-1/3 m-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center pb-4 h-44">
            <img
              className="object-contain"
              src="/BackEnd-Pics/c-sharp-programming-language-icon.webp"
              alt="C# Programming Language"
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">C# (.NET)</h3>
          <p className="text-gray-700">
            Microsoft’s C# and .NET framework power robust backend systems,
            widely used by Calgary’s corporate and government sectors for scalable enterprise applications.
          </p>
          <div className="flex justify-center mt-6">
            <button className="rounded-3xl bg-blue-600 text-white hover:bg-blue-700 duration-500 px-6 py-2.5">
              Explore More
            </button>
          </div>
        </div>

        {/* Node.js */}
        <div className="border rounded-lg px-8 py-10 flex flex-col text-center sm:w-1/3 m-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center pb-4 h-44">
            <img
              className="object-contain"
              src="/BackEnd-Pics/Node.js_logo.svg.png"
              alt="Node.js Logo"
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">Node.js (JavaScript)</h3>
          <p className="text-gray-700">
            Popular for real-time and event-driven applications, Node.js
            allows Calgary developers to build fast, scalable server-side apps with JavaScript.
          </p>
          <div className="flex justify-center mt-6">
            <button className="rounded-3xl bg-blue-600 text-white hover:bg-blue-700 duration-500 px-6 py-2.5">
              Explore More
            </button>
          </div>
        </div>

        {/* PHP */}
        <div className="border rounded-lg px-8 py-10 flex flex-col text-center sm:w-1/3 m-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center pb-4 h-44">
            <img
              className="object-contain"
              src="/BackEnd-Pics/PHP-logo.svg.png"
              alt="PHP Logo"
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">PHP</h3>
          <p className="text-gray-700">
            PHP remains a reliable choice for web applications and CMS platforms,
            trusted by many Calgary businesses for rapid backend development and integrations.
          </p>
          <div className="flex justify-center mt-6">
            <button className="rounded-3xl bg-blue-600 text-white hover:bg-blue-700 duration-500 px-6 py-2.5">
              Explore More
            </button>
          </div>
        </div>

        {/* Python */}
        <div className="border rounded-lg px-8 py-10 flex flex-col text-center sm:w-1/3 m-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center pb-4 h-44">
            <img
              className="object-contain"
              src="/BackEnd-Pics/Python-logo-notext.svg.png"
              alt="Python Logo"
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">Python</h3>
          <p className="text-gray-700">
            Known for its readability and powerful libraries, Python is widely used for backend services,
            APIs, and data-driven applications by Calgary software teams.
          </p>
          <div className="flex justify-center mt-6">
            <button className="rounded-3xl bg-blue-600 text-white hover:bg-blue-700 duration-500 px-6 py-2.5">
              Explore More
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-14 px-4 text-center">
        <span className="text-2xl font-semibold mb-4">Ready to Build Your Backend Solution?</span>
        <button className="bg-amber-500 hover:bg-white hover:text-amber-500 border-2 border-amber-500 rounded-3xl px-12 py-4 font-semibold transition-colors duration-200 sm:w-3/12">
          Contact Us Now
        </button>
        <span className="mt-10 text-lg font-light">Explore Our Related Case Studies</span>
      </div>

      <GetInTouch />
      <Footer />
    </>
  );
};

export default BackendDevelopment;
