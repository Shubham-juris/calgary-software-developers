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
              className="border-2 border-orange-500 rounded-tl-xl rounded-br-xl w-40 h-40 flex flex-col justify-center items-center text-center hover:scale-105 transition-all duration-200 hover:bg-orange-500 hover:text-white"
            >
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Partner Logos */}
        <section className="my-12">
          <h3 className="text-3xl font-semibold text-center mb-8">
            Trusted By Industry Leaders
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center px-4">
            {[
              "amazon-web-services-logo.jpg.webp",
              "Apple-1.png.webp",
              "Automation-Anywhere.png.webp",
              "Bing-Partner.png.webp",
              "Blue-Prism-Delivery-Partner.png.webp",
              "cloud-migarator-logo.jpg.webp",
              "Google-Partner.png.webp",
              "Group-19-1.png.webp",
              "Group-19.png.webp",
              "microsoft-goldlogo-small.jpg.webp",
              "UI-Path-Partner.png.webp",
              "vm-wave-logo.jpg.webp",
            ].map((logo, i) => (
              <div
                key={i}
                className="p-4 bg-white shadow-sm hover:bg-orange-100 transition-all duration-200 rounded-md"
              >
                <img src={`/About-pics/${logo}`} alt="Partner Logo" className="max-h-12 object-contain" />
              </div>
            ))}
          </div>
        </section>

        {/* Final Call */}
        <section className="py-12 space-y-4 text-center sm:text-left">
          <h4 className="text-2xl font-bold">Your Trusted Calgary Tech Partner</h4>
          <p className="text-gray-600">
            With headquarters in Calgary, Alberta, and a distributed team across the globe, Calgary Digital Solutions is ready to bring your vision to life. Whether you're an early-stage startup or an established enterprise, we're your partner in building tomorrow’s technology today.
          </p>
          <div className="flex justify-center sm:justify-start gap-4 pt-4">
            <CiFacebook size={32} className="text-orange-600 hover:text-orange-800" />
            <FaXTwitter size={32} className="text-orange-600 hover:text-orange-800" />
            <CiCirclePlus size={32} className="text-orange-600 hover:text-orange-800" />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
