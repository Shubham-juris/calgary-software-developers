import React from "react";
import { FaCloud, FaCogs, FaLock, FaCode, FaLightbulb, FaBrain } from "react-icons/fa";

const data = [
  {

    icon: <FaBrain className="text-4xl text-sky-700 mb-4 group-hover:scale-110 transition duration-300" />,
    text: "AI & Machine Learning",
  },
  {
    icon: <FaCogs className="text-4xl text-sky-700 mb-4 group-hover:scale-110 transition duration-300" />,
    text: "Legacy Software Modernization",
  },
  {
    icon: <FaCloud className="text-4xl text-sky-700 mb-4 group-hover:scale-110 transition duration-300" />,
    text: "Cloud Architecture & Migration",
  },
  {
    icon: <FaLock className="text-4xl text-sky-700 mb-4 group-hover:scale-110 transition duration-300" />,
    text: "Cybersecurity & Compliance",
  },
  {
    icon: <FaCode className="text-4xl text-sky-700 mb-4 group-hover:scale-110 transition duration-300" />,
    text: "Custom Web & App Development",
  },
  // {
  //   icon: <FaLightbulb className="text-4xl text-sky-700 mb-4 group-hover:scale-110 transition duration-300" />,

    
  // },
];

function Services() {
  return (
    <div className="my-12 px-4">
      <div className="flex flex-col items-center mb-10">
        <h2 className="font-extrabold text-4xl text-center text-sky-900 mb-3">Our Services</h2>
        <p className="text-center text-lg font-light max-w-3xl text-gray-700">
          In <strong>Calgary Software Developers</strong> in Calgary, we help businesses unlock growth through cutting-edge technologies, cloud innovation, and secure digital transformation. Explore our core offerings:
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
