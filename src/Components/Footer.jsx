import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-900 py-8">
      <div className="sm:flex justify-evenly px-3 gap-8">
        {/* Address Section */}
        <div className="text-white flex flex-col gap-6 mt-4 text-sm">
          <p>
            <strong>Address:</strong>
            <br />
            5211 50 St, Drayton Valley
            <br />
            AB T7A1C9
          </p>
          <p>Phn no. (403)409-9268</p>
        </div>

        {/* Useful Links */}
        <div className="text-white flex flex-col py-3 gap-2 text-sm">
          <p className="text-2xl font-semibold">Useful Links</p>
          <Link to="/" className="text-gray-400 hover:text-white transition">
            Home
          </Link>
          <Link to="/about" className="text-gray-400 hover:text-white transition">
            About Us
          </Link>
          <Link to="/blog" className="text-gray-400 hover:text-white transition">
            Blog
          </Link>
          <Link to="/services" className="text-gray-400 hover:text-white transition">
            
          </Link>
          <Link to="/terms" className="text-gray-400 hover:text-white transition">
            
          </Link>
          <Link to="/privacy" className="text-gray-400 hover:text-white transition">
            Privacy Policy
          </Link>
        </div>


        {/* Support Section */}
        <div className="py-3 flex flex-col gap-2 text-white text-sm">
          <p className="text-2xl font-semibold">Support</p>
          <Link to="/contactus" className="text-gray-400 hover:text-white transition">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="flex justify-center py-6">
        <div className="h-px w-10/12 bg-gray-700"></div>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-center text-gray-400 text-sm">
        © 2024 Calgary Software Solutions Inc. — Calgary's Premier Development Partner.
      </div>
    </div>
  );
}

export default Footer;

