import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";
import logo from "../assets/navbar/logo.jpg";

const Nabbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 2) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/blog", label: "Blog" },
    { to: "/contactus", label: "Contact" },
  ];

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isOpenMenu && (
        <div className="sm:hidden fixed z-20 inset-0 bg-black">
          <div className="relative text-end mr-4 mt-4">
            <button onClick={() => setIsOpenMenu(false)}>
              <ImCross color="white" size={40} />
            </button>
          </div>

          <div className="flex flex-col pt-8 text-white text-2xl font-semibold text-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpenMenu(false)}
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "hover:text-gray-300"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* Navbar */}
      <div
        className={`fixed top-0 w-full z-10 py-3 transition duration-300 ${
          navbar ? "bg-black/80 shadow-md" : "bg-black"
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-10">
          {/* Logo */}
          <img
            src={logo}
            alt="Calgary Software Developers Logo"
            className="w-14 h-14 sm:w-20 sm:h-20 rounded-full object-cover"
          />

          {/* Desktop Nav Links */}
          <div className="hidden sm:flex text-white text-sm gap-6 font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "hover:text-yellow-200"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="sm:hidden">
            <button onClick={() => setIsOpenMenu(true)}>
              <GiHamburgerMenu size={28} color="white" />
            </button>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content overlap */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
};

export default Nabbar;
