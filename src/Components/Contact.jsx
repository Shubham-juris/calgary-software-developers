import React, { useState } from "react";
import { GrNotes } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";

function Contact() {
  const [form, setForm] = useState(false);

  return (
    <div className="absolute z-20">
      {/* Toggle Button */}
      <div onClick={() => setForm((prev) => !prev)} className="cursor-pointer">
        <div className="fixed bottom-1/2 right-6 sm:right-14">
          <div className="text-center font-semibold sm:text-2xl">
            <GrNotes className="sm:h-14 h-10 w-10 mx-auto text-indigo-600" />
            <div className="text-indigo-700 font-bold">
              Get In
              <br /> Touch
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className={`${
          form ? "block" : "hidden"
        } fixed inset-0 bg-black/60 flex items-center justify-center`}
      >
        <div className="bg-white rounded-xl p-6 sm:p-10 w-[90%] sm:w-[600px] shadow-lg relative">
          <button
            onClick={() => setForm(false)}
            className="absolute top-4 right-4 text-slate-600 hover:text-red-600"
          >
            <RxCross2 size={24} />
          </button>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6">
            Let's Discuss Your Software Project
          </h2>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                className="flex-1 px-4 py-3 border border-slate-300 rounded-md focus:outline-indigo-500"
                type="text"
                placeholder="Your Name *"
              />
              <input
                className="flex-1 px-4 py-3 border border-slate-300 rounded-md focus:outline-indigo-500"
                type="email"
                placeholder="Your Email *"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                className="flex-1 px-4 py-3 border border-slate-300 rounded-md focus:outline-indigo-500"
                type="text"
                placeholder="Phone Number *"
              />
              <input
                className="flex-1 px-4 py-3 border border-slate-300 rounded-md focus:outline-indigo-500"
                type="text"
                placeholder="Service Needed (e.g. App, Website)"
              />
            </div>
            <input
              className="px-4 py-3 border border-slate-300 rounded-md focus:outline-indigo-500"
              type="text"
              placeholder="Skype ID / WhatsApp No"
            />
            <textarea
              className="px-4 py-3 border border-slate-300 rounded-md focus:outline-indigo-500 resize-none"
              rows={4}
              placeholder="Tell us a bit about your project..."
            ></textarea>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button
                type="submit"
                className="bg-indigo-600 text-white font-semibold py-3 rounded-md w-full sm:w-1/2 hover:bg-indigo-700 transition"
              >
                Submit Enquiry
              </button>

              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white text-center font-semibold py-3 rounded-md w-full sm:w-1/2 hover:bg-green-700 transition"
              >
                WhatsApp Us
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
