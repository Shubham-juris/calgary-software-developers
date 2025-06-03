import React, { useState } from "react";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";

const FaqAccordion = ({ title, anss }) => {
  const [faqOpen, setFaqOpen] = useState(false);

  return (
    <div className="py-2">
      <div className="flex flex-col text-start font-medium justify-center sm:px-6 px-2 gap-1.5">
        <div className="w-full">
          <div
            className="bg-slate-100 hover:bg-slate-200 transition-all duration-300 py-3 px-4 cursor-pointer rounded-xl shadow-sm"
            onClick={() => setFaqOpen(!faqOpen)}
          >
            <div className="flex justify-between items-center text-slate-800">
              <p className="text-base sm:text-lg">{title}</p>
              {faqOpen ? (
                <IoMdArrowDropupCircle size={24} className="text-indigo-500" />
              ) : (
                <IoMdArrowDropdownCircle size={24} className="text-indigo-500" />
              )}
            </div>

            {faqOpen && (
              <div className="text-slate-600 py-3 text-sm sm:text-base font-normal leading-relaxed">
                {anss}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
