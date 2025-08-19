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
      {/* Hero Section */}
      <div className="relative h-[400px] sm:h-[500px] lg:h-[500px]">
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
      <div className="py-12 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10 lg:p-12">
          {/* Flex Row for Who We Are + Our Location */}
          <section className="flex flex-col lg:flex-row gap-8">
            {/* Who We Are Card */}
            <div className="flex-1 bg-gray-50 rounded-xl shadow-md p-6 sm:p-8">
              <h2 className="text-4xl font-semibold text-orange-600 border-b-4 border-orange-500 inline-block pb-2">
                Who We Are
              </h2>
              <p className="text-xl font-light text-gray-700 mt-4">
                At Calgary Digital Solutions, we are passionate about helping
                businesses thrive through smart, scalable software development.
                Our team of skilled developers, UX designers, and AI specialists
                build digital experiences that solve real-world problems and
                drive innovation.
              </p>
            </div>

            {/* Our Location Card */}
            <div className="flex-1 bg-gray-50 rounded-xl shadow-md p-6 sm:p-8">
              <h2 className="text-3xl font-semibold text-gray-800 pb-2 border-b-4 border-orange-500 inline-block">
                Our Location
              </h2>
              <p className="text-gray-600 leading-relaxed mt-4">
                “Also Serving Drayton Valley!” Calgary Software Developers is
                excited to announce our new branch in Drayton Valley, Alberta.
                This expansion allows us to better serve clients across Central
                Alberta with customized software solutions.
                <br />
                With this expansion, Calgary Software Developers can now provide
                tailored software solutions to even more businesses across
                Central Alberta. Whether you’re in Calgary or Drayton Valley,
                our team is here to help you build, grow, and innovate.
              </p>
            </div>
          </section>

          {/* Build Smart Section (Full Width) */}
          <section className="mt-12 space-y-4">
            <p className="text-xl font-semibold text-gray-800">
              Build Smart. Build Fast. Build Right.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Based in Calgary, Alberta, we support clients across Canada and
              internationally. Our approach blends local insight with global
              expertise, using Agile methods, modern tech stacks, and a
              human-centered design philosophy.
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
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
