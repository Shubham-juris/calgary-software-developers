import React, { useEffect } from "react";
import { CiFacebook, CiCirclePlus } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import Nabbar from "./Nabbar";
import Footer from "./Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      <Nabbar />

      {/* Hero Section */}
      <div className="relative h-80">
        <img
          src="/About-pics/About.JPG"
          alt="About Us Banner"
          className="w-full h-full object-cover brightness-75"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl sm:text-5xl font-bold">
          <p>About Us</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-6 sm:px-24">
        {/* Who We Are */}
        <section className="space-y-6">
          <h2 className="text-4xl font-semibold text-orange-600 border-b-4 border-orange-500 pb-4">
            Who We Are
          </h2>
          <p className="text-xl font-light">
            At Calgary Digital Solutions, we are passionate about helping businesses thrive through smart, scalable software development. Our team of skilled developers, UX designers, and AI specialists build digital experiences that solve real-world problems and drive innovation.
          </p>
          <p className="text-xl font-semibold pt-4">
            Build Smart. Build Fast. Build Right.
          </p>
          <p className="text-gray-600">
            Based in Calgary, Alberta, we support clients across Canada and internationally. Our approach blends local insight with global expertise, using Agile methods, modern tech stacks, and a human-centered design philosophy.
          </p>
        </section>

        {/* Statistics Cards */}
        <section className="flex flex-wrap justify-center gap-4 my-12">
          {[
            { value: "2010", label: "Founded" },
            { value: "120+", label: "Team Members" },
            { value: "10", label: "Countries Represented" },
            { value: "4.9", label: "Client Rating" },
            { value: "95%", label: "Remote Flexibility" },
            { value: "42%", label: "Women in Tech" },
            { value: "8 yrs", label: "Avg. Tenure" },
            { value: "100+", label: "Successful Projects" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="border-2 border-orange-500 rounded-tl-xl rounded-br-xl w-36 sm:w-40 h-40 flex flex-col justify-center items-center text-center hover:scale-105 transition-all duration-200 hover:bg-orange-500 hover:text-white"
            >
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Final Call To Action */}
        <section className="text-center my-16">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to transform your business?
          </h3>
          <p className="text-gray-600 mb-6">
            Let’s discuss your next big idea and how we can bring it to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition duration-200"
          >
            
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;

