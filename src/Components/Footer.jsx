import React from "react";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-gray-900 py-8">
        <div className="sm:flex justify-evenly px-3 gap-8">
          <div>
            <img
              src="/logo-footer.png"
              alt="FusionByte Logo"
              className="w-48"
            />
            <div className="text-white flex flex-col gap-6 mt-4 text-sm">
              <p>
                <strong>Address:</strong><br />
                Suite 304, 535 10 Ave SW,<br />
                Calgary, Alberta T2R 0A8
              </p>
              <p>
                <strong>Email:</strong><br />
                contact@fusionbyte.ca
              </p>
            </div>
          </div>

          <div className="text-white flex flex-col py-3 gap-2 text-sm">
            <p className="text-2xl font-semibold">Useful Links</p>
            <Link to="/" className="text-gray-400 hover:text-white transition">Home</Link>
            <Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link>
            <Link to="/blog" className="text-gray-400 hover:text-white transition">Blog</Link>
            <Link to="/services" className="text-gray-400 hover:text-white transition">Services</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link>
          </div>

          <div className="text-white flex flex-col gap-2 py-3 text-sm">
            <p className="text-2xl font-semibold">Our Services</p>
            <p className="text-gray-400 hover:text-white transition">Custom Web Applications</p>
            <p className="text-gray-400 hover:text-white transition">Cloud Integration & DevOps</p>
            <p className="text-gray-400 hover:text-white transition">AI & Machine Learning Solutions</p>
            <p className="text-gray-400 hover:text-white transition">Cybersecurity Audits</p>
            <p className="text-gray-400 hover:text-white transition">Digital Strategy Consulting</p>
            <p className="text-gray-400 hover:text-white transition">UI/UX Design</p>
          </div>

          <div className="py-3 flex flex-col gap-2 text-white text-sm">
            <p className="text-2xl font-semibold">Support</p>
            <Link to="/contactus" className="text-gray-400 hover:text-white transition">Contact Us</Link>
            <p className="text-gray-400 hover:text-white transition">Technical Support</p>
            <Link to="/contactus" className="text-gray-400 hover:text-white transition">Get in Touch</Link>

            <div className="flex flex-wrap gap-3 pt-4 text-white">
              <a href="/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare size={25} /></a>
              <a href="/" target="_blank" rel="noopener noreferrer"><FaInstagram size={25} /></a>
              <a href="/" target="_blank" rel="noopener noreferrer"><FaYoutube size={25} /></a>
              <a href="/" target="_blank" rel="noopener noreferrer"><SiGooglemaps size={25} /></a>
              <a href="/" target="_blank" rel="noopener noreferrer"><FaSquarePinterest size={25} /></a>
              <a href="/" target="_blank" rel="noopener noreferrer"><FaTwitterSquare size={25} /></a>
              <a href="/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin size={25} /></a>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-6">
          <div className="h-px w-10/12 bg-gray-700"></div>
        </div>

        <div className="text-center text-gray-400 text-sm">
          © 2024 FusionByte Software Solutions Inc. — Calgary's Premier Development Partner.
        </div>
      </div>
    </>
  );
}

export default Footer;
