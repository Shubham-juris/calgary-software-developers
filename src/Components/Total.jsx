import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Total = () => {
  const data = [
    {
      img: "src/Business-Centric-pics/transformation.png",
      title: "Digital Transformation",
    },
    {
      img: "src/Business-Centric-pics/custom.png",
      title: "Custom Software Solutions",
    },
    {
      img: "src/Business-Centric-pics/mobile-development.png",
      title: "Mobile App Development",
    },
    {
      img: "src/assets/BusinessCentric-jpg/engineering.png",
      title: "QA & Test Automation",
    },
    {
      img: "src/Business-Centric-pics/cloud-data.png",
      title: "Cloud Infrastructure",
    },
    {
      img: "src/Business-Centric-pics/cyber-security.png",
      title: "Cybersecurity Services",
    },
    {
      img: "src/Business-Centric-pics/polo-shirt.png",
      title: "AI Data Labeling",
    },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="bg-gray-50 px-4 sm:px-12 py-16">
      <div className="text-center mb-10">
        <h2 className="text-xl sm:text-4xl font-extrabold text-gray-800">
          <span className="text-blue-600">5+ Years</span> of Calgary-Based Innovation
        </h2>
        <p className="text-base sm:text-2xl mt-4 text-gray-600">
          Practical solutions tailored to complex business challenges.
        </p>
      </div>

      <div className="flex justify-center items-center py-10">
        <Carousel responsive={responsive}>
          {data.map((d, i) => (
            <div
              key={i}
              className="h-64 w-48 bg-white rounded-2xl mx-4 flex flex-col justify-center items-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img src={d.img} alt={d.title} className="w-20 h-20 mb-4" />
              <p className="text-center text-sm font-semibold px-2">{d.title}</p>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl p-8 sm:p-12 shadow-xl mt-12">
        <div className="sm:w-1/2 mb-6 sm:mb-0 sm:pr-10">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Digital Transformation in Calgary</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Calgary businesses are embracing digital change to stay competitive.
            Whether it's AI, IoT, mobile solutions, cloud infrastructure, or advanced analytics—
            technology is no longer optional. At our core, we help local enterprises
            leverage modern software to streamline operations, increase agility, and
            meet customer expectations in a digital-first world.
          </p>
        </div>
        <div className="sm:w-1/2">
          <img
            src="src/assets/BusinessCentric-jpg/images-3.jpg"
            alt="Digital Transformation"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Total;
