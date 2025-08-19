import React from "react";
import {
  FaCloud,
  FaCogs,
  FaLock,
  FaCode,
  FaLightbulb,
  FaBrain,
  FaMobileAlt,
  FaLaptopCode,
  FaSearch,
  FaPaintBrush,
  FaServer,
  FaChartLine,
} from "react-icons/fa";

const data = [
  {
    icon: (
      <FaMobileAlt className="text-4xl text-sky-700 mb-4 group-hover:scale-110 transition duration-300" />
    ),
    text: "Mobile App Development",
  },
  {
    icon: (
      <FaLaptopCode className="text-4xl text-sky-700 mb-4 group-hover:scale-110 transition duration-300" />
    ),
    text: "Custom Web Development",
  },
  {
    icon: (
      <FaPaintBrush className="text-4xl text-sky-700 mb-4 group-hover:scale-110 transition duration-300" />
    ),
    text: "UI/UX & Web Designing",
  },
  {
    icon: (
      <FaCloud className="text-4xl text-sky-700 mb-4 group-hover:scale-110 transition duration-300" />
    ),
    text: "Cloud Architecture & Services",
  },
  {
    icon: (
      <FaBrain className="text-4xl text-sky-700 mb-4 group-hover:scale-110 transition duration-300" />
    ),
    text: "AI & Machine Learning",
  },
  {
    icon: (
      <FaSearch className="text-4xl text-sky-700 mb-4 group-hover:scale-110 transition duration-300" />
    ),
    text: "SEO & Digital Marketing",
  },
  {
    icon: (
      <FaChartLine className="text-4xl text-sky-700 mb-4 group-hover:scale-110 transition duration-300" />
    ),
    text: "Business Growth Consulting",
  },
  {
    icon: (
      <FaServer className="text-4xl text-sky-700 mb-4 group-hover:scale-110 transition duration-300" />
    ),
    text: "Web Hosting & Cloud Services",
  },
  {
    icon: (
      <FaCogs className="text-4xl text-sky-700 mb-4 group-hover:scale-110 transition duration-300" />
    ),
    text: "Legacy Software Modernization",
  },
  {
    icon: (
      <FaLock className="text-4xl text-sky-700 mb-4 group-hover:scale-110 transition duration-300" />
    ),
    text: "Cybersecurity & Compliance",
  },
];

function Services() {
  return (
    <div className="my-12 px-4">
      <div className="flex flex-col items-center mb-10">
        <h2 className="font-extrabold text-4xl text-center text-sky-900 mb-3">
          Our Services
        </h2>
        <p className="text-center text-lg font-light max-w-3xl text-gray-700">
          At <strong>Calgary Software Developers</strong>, we provide end-to-end
          digital solutions — from <span className="font-semibold">web & app development</span> to{" "}
          <span className="font-semibold">cloud services, AI, and digital marketing</span>. Our mission is to help
          businesses grow faster with innovative technology.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {data.map((d, i) => (
          <div
            key={i}
            className="group flex flex-col items-center justify-center text-center shadow-lg h-72 w-80 p-6 rounded-xl bg-white hover:bg-sky-100 transition duration-300 ease-in-out"
          >
            {d.icon}
            <p className="text-lg font-semibold text-sky-800">{d.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
