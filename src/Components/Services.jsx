import React from "react";

const data = [
  {
    img: "/Services-jpg/ai-ml.png",
    text: "AI & Machine Learning",
  },
  {
    img: "/Services-jpg/modernization.png",
    text: "Legacy Software Modernization",
  },
  {
    img: "/Services-jpg/cloud.png",
    text: "Cloud Architecture & Migration",
  },
  {
    img: "/Services-jpg/cyber-security.png",
    text: "Cybersecurity & Compliance",
  },
  {
    img: "/Services-jpg/web-dev.png",
    text: "Custom Web & App Development",
  },
  {
    img: "/Services-jpg/consulting.png",
    text: "IT Strategy & Consulting",
  },
];

function Services() {
  return (
    <div className="my-12 px-4">
      <div className="flex flex-col items-center mb-10">
        <h2 className="font-extrabold text-4xl text-center text-sky-900 mb-3">Our Services</h2>
        <p className="text-center text-lg font-light max-w-3xl text-gray-700">
          At <strong>Fusion Byte Software Solutions</strong> in Calgary, we help businesses unlock growth through cutting-edge technologies, cloud innovation, and secure digital transformation. Explore our core offerings:
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {data.map((d, i) => (
          <div
            key={i}
            className="group flex flex-col items-center justify-center text-center shadow-lg h-72 w-80 p-6 rounded-xl bg-white hover:bg-sky-100 transition duration-300 ease-in-out"
          >
            <img
              src={d.img}
              alt={d.text}
              className="w-16 h-16 mb-4 group-hover:scale-110 transition duration-300"
            />
            <p className="text-lg font-semibold text-sky-800">{d.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
