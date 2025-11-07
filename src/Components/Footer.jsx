import React from "react";
import { FaFacebookSquare, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Left - Logo + About */}
        <div>
          <h2 className="text-2xl font-bold">Calgary Software Solutions</h2>
          <p className="text-gray-400 mt-3 text-sm">
            Calgary's Premier Development Partner. We build scalable, innovative
            software solutions for businesses of all sizes.
          </p>
        </div>

        {/* Middle - Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
          <div className="flex flex-col gap-2 text-gray-400 text-sm">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <Link to="/about" className="hover:text-white">
              About Us
            </Link>
            <Link to="/blog" className="hover:text-white">
              Blog
            </Link>
            <Link to="/services" className="hover:text-white">
              Services
            </Link>
            <Link to="/contactus" className="hover:text-white">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right - Contact Info + Icons */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <div className="flex items-start gap-3 mb-3">
            <IoLocationSharp size={22} className="text-sky-400" />
            <a
              href="https://maps.google.com/?q=200+4+Ave+SW,+Calgary,+AB+T2P+0J4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm"
            >
              200 4 Ave SW, Calgary, AB T2P 0J4
            </a>
          </div>

          <div className="flex items-start gap-3 mb-3">
            <IoLocationSharp size={22} className="text-sky-400" />
            <a
              href="https://maps.google.com/?q=5211+50+St,+Drayton+Valley,+AB+T7A1C9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm"
            >
              5211 50 St, Drayton Valley, AB T7A 1C9
            </a>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <FaPhoneAlt size={18} className="text-sky-400" />
            <a
              href="tel:+14034099268"
              className="text-gray-400 hover:text-white text-sm"
            >
              (403) 409-9268
            </a>
          </div>

          {/* Social Icons under address + phone */}
          <div className="flex gap-3">
            <a
              href="https://facebook.com/profile.php?id=61556795012375"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://instagram.com/calgarysoftwaredevelopers6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="border-t border-gray-700 py-6 text-center">
        <p className="text-gray-500 text-sm">
          © 2024 Calgary Software Solutions Inc. — All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
