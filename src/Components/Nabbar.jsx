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
      { to: "/services", label: "Services" },
      { to: "/blog", label: "Blog" },
      { to: "/contactus", label: "Contact" },
    ];

    return (
      <>
        {/* Mobile Menu Overlay */}
        {isOpenMenu && (
          <div className="sm:hidden fixed z-20 inset-0 bg-gray-900">
            <div className="relative text-end mr-4 mt-4">
              <button onClick={() => setIsOpenMenu(false)}>
                <ImCross color="white" size={36} />
              </button>
            </div>

            <div className="flex flex-col pt-8 text-white text-xl sm:text-2xl font-semibold text-center gap-6">
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
          className={`fixed top-0 w-full z-10 py-2 md:py-3 transition duration-300 ${
            navbar ? "bg-black/80 shadow-md" : "bg-gray-800"
          }`}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-10">
            {/* Logo with Link */}
            <NavLink to="/">
              <img
                src={logo}
                alt="Calgary Software Developers Logo"
                className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover cursor-pointer"
              />
            </NavLink>

            {/* Desktop Nav Links */}
            <div className="hidden sm:flex text-white text-xs sm:text-sm md:text-base gap-4 sm:gap-6 lg:gap-10 font-medium">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : "hover:text-yellow-200"
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Icon */}
            <div className="sm:hidden">
              <button onClick={() => setIsOpenMenu(true)}>
                <GiHamburgerMenu size={26} color="white" />
              </button>
            </div>
          </div>
        </div>

        {/* Spacer to prevent content overlap */}
        <div className="h-12 sm:h-16 md:h-20"></div>
      </>
    );
  };

  export default Nabbar;
