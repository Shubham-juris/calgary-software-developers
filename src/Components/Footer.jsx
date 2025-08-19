import React from "react";
import { FaFacebookSquare, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/navbar/logo.jpg";

function Footer() {
  return (
    <div className="bg-gray-900 py-10">
      <div className="flex flex-col items-center text-center">
        {/* Logo */}
        <img
          src={logo}
          alt="Company Logo"
          className="w-20 h-20 rounded-full object-cover mb-4"
        />

        {/* Address & Phone */}
        <a
          href="https://www.google.com/maps?q=5211+50+St,+Drayton+Valley,+AB+T7A1C9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 text-sm mb-2 flex items-center gap-2 hover:text-white"
        >
          <FaMapMarkerAlt /> 5211 50 St, Drayton Valley, AB T7A1C9
        </a>

        <a
          href="tel:4034099269"
          className="text-gray-300 text-sm mb-4 flex items-center gap-2 hover:text-white"
        >
          <FaPhoneAlt /> (403) 409-9269
        </a>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
          <Link to="/" className="text-gray-400 hover:text-white transition">
            Home
          </Link>
          <Link to="/about" className="text-gray-400 hover:text-white transition">
            About Us
          </Link>
          <Link to="/services" className="text-gray-400 hover:text-white transition">
            Services
          </Link>
          <Link to="/blog" className="text-gray-400 hover:text-white transition">
            Blog
          </Link>
          <Link to="/contactus" className="text-gray-400 hover:text-white transition">
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl mb-4">
          <a
            href="https://facebook.com/profile.php?id=61556795012375"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 text-white"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://instagram.com/calgarysoftwaredevelopers6/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 text-white"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Footer Bottom */}
        <p className="text-gray-400 text-xs">
          © 2024 Calgary Software Solutions Inc. — Calgary's Premier Development Partner.
        </p>
      </div>
    </div>
  );
}

export default Footer;
