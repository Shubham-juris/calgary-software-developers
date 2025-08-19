import React from "react";
import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="h-44 bg-slate-800 flex relative">
        <img
          src="/parallax-5.jpg"
          className="w-full object-cover opacity-40"
          alt="FAQ Banner"
        />
        <div className="absolute text-white text-2xl font-semibold flex flex-col h-full justify-center text-center items-center w-full px-4">
          <p>Frequently Asked Questions</p>
          <p className="text-base sm:text-lg font-normal">
            Your trusted software partner in Calgary
          </p>
        </div>
      </div>

      {/* FAQ + Contact Section */}
      <div className="bg-gradient-to-b from-slate-100 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-10">
          {/* FAQ Accordion */}
          <div className="sm:w-1/2">
            <FaqAccordion
              title="WHAT SERVICES DOES YOUR SOFTWARE COMPANY OFFER?"
              anss="We provide custom software development, web and mobile app solutions, UI/UX design, cloud integration, and ongoing technical support tailored for startups to enterprise clients."
            />

            <FaqAccordion
              title="DO YOU WORK WITH CLIENTS OUTSIDE CALGARY?"
              anss="Yes! While we're headquartered in Calgary, we work with clients across Canada, the U.S., and globally through virtual meetings and cloud-based collaboration tools."
            />

            <FaqAccordion
              title="HOW LONG DOES A TYPICAL SOFTWARE PROJECT TAKE?"
              anss="Project timelines vary depending on complexity. A small app might take 4–6 weeks, while enterprise platforms may take several months. We always provide clear timelines during the project scoping phase."
            />

            <FaqAccordion
              title="WHAT TECHNOLOGIES DO YOU SPECIALIZE IN?"
              anss="We specialize in React, Node.js, Python, AWS, Flutter, PostgreSQL, and more. Our team stays up to date with modern frameworks and best practices to ensure high performance and scalability."
            />
          </div>

          {/* Ask a Question Form */}
          <div className="sm:w-1/2 flex flex-col items-start justify-center gap-6 px-2">
            <p className="font-bold text-2xl text-slate-700 w-full text-center">
              Have a question?
            </p>

            <input
              type="text"
              placeholder="Your Name"
              className="outline-none p-3 rounded-md w-full border border-slate-300 focus:ring-2 focus:ring-indigo-400"
            />

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="email"
                placeholder="Email Address"
                className="outline-none p-3 rounded-md w-full border border-slate-300 focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="outline-none p-3 rounded-md w-full border border-slate-300 focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <textarea
              placeholder="How can we help you?"
              className="outline-none w-full h-32 p-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-indigo-400"
              rows="6"
            ></textarea>

            <div className="w-full flex justify-end">
              <button className="bg-indigo-600 py-3 px-10 rounded-lg hover:bg-indigo-800 transition-all duration-300 text-white font-semibold">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
