import React from "react";
import Nabbar from "../Components/Nabbar";

const Qa = () => {
  return (
    <>
      <Nabbar />
      <div className="h-56 flex relative">
        <img
          src="/QA_Pics/calgary-qa-banner.jpg"
          alt="Calgary QA Consultancy"
          className="w-full object-cover"
        />
        <div className="absolute text-white pl-2 sm:text-2xl font-semibold flex flex-col h-full justify-start w-full bg-black bg-opacity-40">
          <div className="absolute bg-indigo-700 top-2/4 sm:ml-10 py-2 px-4 rounded-md">
            <span>QA Consultancy</span>
          </div>
        </div>
      </div>

      <div className="py-16">
        {/* Benefits Section */}
        <div className="sm:px-12 flex sm:flex-row flex-col justify-evenly">
          <div className="sm:w-1/3 mx-1 flex items-center">
            <div className="p-1 border border-gray-300 rounded-md">
              <img
                src="/QA_Pics/calgary-qa-benefits.jpg"
                alt="QA Benefits Calgary"
                className="object-contain"
              />
            </div>
          </div>

          <div className="sm:w-1/3 px-2 flex flex-col justify-evenly gap-4 sm:gap-0">
            <span className="text-2xl text-indigo-700 font-semibold">Benefits</span>
            <p className="text-gray-600">
              In Calgary’s fast-evolving tech landscape, maintaining
              software quality is key to competitive advantage. Our QA consultancy
              helps local companies implement robust testing strategies to reduce bugs,
              accelerate release cycles, and boost customer satisfaction.
            </p>
            <div>
              <button className="bg-indigo-700 text-white px-4 rounded-md py-1">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="sm:px-12 py-12 flex sm:flex-row flex-col justify-evenly">
          <div className="sm:w-1/3 mx-1 flex items-center">
            <div className="p-1 border border-gray-300 rounded-md">
              <img
                src="/QA_Pics/calgary-qa-portfolio.jpg"
                alt="QA Portfolio Calgary"
                className="object-contain"
              />
            </div>
          </div>

          <div className="sm:w-1/3 px-2 flex flex-col justify-evenly gap-4 sm:gap-0">
            <span className="text-2xl text-indigo-700 font-semibold">Our Services</span>
            <p className="text-gray-600">
              We provide end-to-end QA consultancy including QA process
              design, process audits, automation strategy implementation,
              specialized software testing, and customized training programs
              to empower Calgary software teams.
            </p>
            <div>
              <button className="bg-indigo-700 text-white px-4 rounded-md py-1">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Workflow Section */}
        <div className="sm:px-12 py-12 flex sm:flex-row flex-col justify-evenly">
          <div className="sm:w-1/3 mx-1 flex items-center">
            <div className="p-1 border border-gray-300 rounded-md">
              <img
                src="/QA_Pics/calgary-qa-workflow.jpg"
                alt="QA Workflow Calgary"
                className="object-contain"
              />
            </div>
          </div>

          <div className="sm:w-1/3 px-2 flex flex-col justify-evenly gap-4 sm:gap-0">
            <span className="text-2xl text-indigo-700 font-semibold">Workflow Optimization</span>
            <p className="text-gray-600">
              Building the right QA and development teams is only the start.
              Our consultancy focuses on creating seamless collaboration
              workflows between QA and DevOps teams to ensure faster delivery
              cycles with higher product quality and fewer post-release issues.
            </p>
            <div>
              <button className="bg-indigo-700 text-white px-4 rounded-md py-1">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qa;
