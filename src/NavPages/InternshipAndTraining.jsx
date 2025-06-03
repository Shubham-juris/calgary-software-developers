import React, { useEffect } from "react";
import Nabbar from "../Components/Nabbar";
import Footer from "../Components/Footer";
import { TbPointFilled } from "react-icons/tb";

const InternshipAndTraining = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-full ">
        <Nabbar />
      </div>

      <div className="h-80 flex relative">
        <img
          src="/Internship-pics/calgary-software-internship.jpeg"
          className="w-full object-cover"
          alt="Calgary Software Internship"
        />
        <div className="absolute text-white text-2xl sm:text-5xl font-semibold flex flex-col h-full justify-center text-center items-center w-full bg-black bg-opacity-40">
          <span>Internship & Training Programs</span>
        </div>
      </div>

      <div className="flex text-xl text-gray-600 pt-10 gap-8 flex-col sm:pt-20 sm:px-28 text-start sm:text-center px-3">
        <span>
          At Fusion Byte Calgary, we are committed to nurturing the next generation of software developers
          by providing hands-on internship and training opportunities designed to bridge the gap between
          academia and industry.
        </span>

        <span>
          Our comprehensive programs focus on real-world skills including modern software development,
          cloud computing, agile methodologies, and professional communication, preparing interns for
          successful tech careers in Calgary’s vibrant IT sector.
        </span>

        <span>
          Over the past three years, Fusion Byte Calgary has empowered over 2,000 aspiring developers
          through our immersive training programs and internship placements at leading local tech firms.
        </span>

        <span>
          We offer tailored diploma and certification courses in software development, DevOps, data science,
          and digital innovation — combining expert instruction with mentorship from industry professionals.
        </span>
      </div>

      <div className="flex justify-center mt-10">
        <img
          src="/Internship-pics/calgary-software-training-group.jpg"
          className="w-4/5 object-contain rounded-lg shadow-lg"
          alt="Software Training Group"
        />
      </div>

      <div className="bg-[#1E3A8A] flex text-xl px-3 text-gray-200 gap-8 flex-col py-16 sm:px-28 text-start sm:text-center">
        <span>
          Fusion Byte Calgary’s training model leverages cutting-edge technology and
          partnerships with local industry leaders to ensure our programs are aligned
          with the needs of Calgary’s growing tech ecosystem.
        </span>

        <span>
          We are proud to collaborate with Alberta’s top software companies and educational institutions,
          aiming to expand our reach and train thousands more in Calgary and surrounding communities.
          We welcome new partners and sponsors to join us in this mission.
        </span>
      </div>

      <div className="flex flex-col justify-center sm:text-center sm:py-10 py-8 sm:px-16 px-3 gap-6 text-lg bg-gray-100">
        <span className="text-3xl font-semibold text-center">
          Our Skilling Programs
        </span>
        <span>
          In partnership with Calgary Polytechnic and industry experts, we deliver hands-on
          training programs combining theory with practical projects that reflect real industry challenges.
        </span>
        <span>
          Our mission is to equip emerging software developers with the skills, confidence, and professional
          experience needed to thrive in Calgary’s competitive tech market.
        </span>
      </div>

      <div className="flex sm:flex-row flex-col px-3 gap-6 py-3 sm:px-20 bg-gray-100 sm:pt-16 sm:justify-around sm:w-full">
        {/* Frontend Development Card */}
        <div className="border shadow-2xl rounded-2xl overflow-hidden sm:w-96 flex flex-col bg-white">
          <img
            src="/Internship-pics/frontend-development-calgary.jpg"
            alt="Frontend Development Training"
            className=""
          />

          <div className="flex flex-col items-start justify-center px-4">
            <span className="font-bold text-xl py-4">Frontend Development</span>
            <div className="pb-6 text-gray-700">
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled /> 3 Months Full-Time Program
              </span>
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled /> Hands-on React and Vue.js Projects
              </span>
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled /> Modern UI/UX Design Principles
              </span>
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled /> Industry-Recognized Certification
              </span>
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled /> 100% Internship Placement Support
              </span>
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled /> Agile & Scrum Methodology Training
              </span>
            </div>
          </div>

          <div className="flex justify-center pb-4">
            <button className="bg-blue-700 hover:bg-blue-900 transition-all duration-300 text-white py-2 px-10 rounded-lg text-xl">
              Learn More
            </button>
          </div>
        </div>

        {/* Backend Development Card */}
        <div className="border shadow-2xl rounded-2xl overflow-hidden sm:w-96 flex flex-col bg-white">
          <img
            src="/Internship-pics/backend-development-calgary.jpg"
            alt="Backend Development Training"
            className=""
          />

          <div className="flex flex-col items-start justify-center px-4">
            <span className="font-bold text-xl py-4">Backend Development</span>
            <div className="pb-6 text-gray-700">
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled /> 3 Months Full-Time or Part-Time Options
              </span>
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled /> Node.js, Python, and Java Training
              </span>
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled /> Cloud Computing with AWS & Azure
              </span>
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled /> Career Coaching & Resume Building
              </span>
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled /> Guaranteed Interview Opportunities
              </span>
              <span className="flex flex-row items-center gap-2">
                <TbPointFilled /> Agile & DevOps Practices
              </span>
            </div>
          </div>

          <div className="flex justify-center pb-4">
            <button className="bg-blue-700 hover:bg-blue-900 transition-all duration-300 text-white py-2 px-10 rounded-lg text-xl">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default InternshipAndTraining;
