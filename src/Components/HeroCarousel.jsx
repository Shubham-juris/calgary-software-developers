import React from "react";
import Nabbar from "./Nabbar";

function HeroCarousel() {
  return (
    <div className="relative w-full">
      <Nabbar />

      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">

          {/* Second Slide - Now the first and active slide */}
          <div className="carousel-item active" data-bs-interval="4500">
            <img
              src="/HeroCarousel-pics/pic-1-transformed.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>

          {/* Third Slide */}
          <div className="carousel-item" data-bs-interval="4500">
            <img
              src="/HeroCarousel-pics/DeWatermark.ai_1710827196818.jpg"
              className="d-block w-100"
              alt="..."
            />

            <div className="absolute sm:top-52 md:top-24 md:px-24 lg:px-72 lg:top-52 flex sm:px-80 top-12 left-14 right-14 flex-col">
              <div className="flex flex-col sm:gap-3 gap-2 lg:gap-3 lg:pb-10 justify-center items-center">
                <span className="sm:text-5xl lg:text-5xl md:text-2xl text-[14px] text-white font-bold">
                  An integral part of corporate Alberta’s journey
                </span>
                <span className="sm:text-xl lg:text-xl md:text-lg text-[9px] text-white font-bold">
                  Trusted advisors to multinationals, leading Albertan businesses
                  and leadership professionals
                </span>
              </div>

              <div className="flex flex-row pt-1 justify-between">
                {[
                  { value: "50+", label: "Years of market leadership" },
                  { value: "200K+", label: "Careers built to date" },
                  { value: "150+", label: "Consultants pan Alberta" },
                  { value: "21+", label: "Industry specialisations" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="w-1/5 flex flex-col items-center justify-center text-center"
                  >
                    <div className="backdrop-blur-sm flex justify-center font-bold items-center text-white sm:text-2xl rounded-full sm:w-28 sm:h-28 text-[12px] h-5 w-5 md:text-lg md:w-14 md:h-14 lg:text-2xl lg:w-28 lg:h-28">
                      <span>{item.value}</span>
                    </div>
                    <span className="text-white font-semibold sm:text-xl lg:text-sm text-[7px] md:text-sm">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default HeroCarousel;
