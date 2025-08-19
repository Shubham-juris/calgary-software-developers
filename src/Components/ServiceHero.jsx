import React from 'react'
import img from "../assets/services/hero.jpg"

const ServiceHero = () => {
  return (
    <>
       <div className="relative h-[300px] sm:h-[500px] lg:h-[500px]">
        <img
          src={img}
          alt="About Us Banner"
          className="w-full h-full object-cover brightness-75"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl sm:text-5xl font-bold">
          <p>Services</p>
        </div>
      </div> 
    </>
  )
}

export default ServiceHero
