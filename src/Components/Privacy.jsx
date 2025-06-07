import React, { useEffect } from "react";
import Footer from "./Footer";
import Nabbar from "./Nabbar";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nabbar />

      <div className="h-44 flex relative">
        <img
          src="/HeroCarousel-pics/pic-1-transformed.jpg"
          className="w-full object-cover"
          alt="Privacy Banner"
        />
        <div className="absolute text-white text-3xl sm:text-5xl font-semibold flex flex-col h-full justify-center text-center items-center w-full bg-black/40">
          <p>Privacy Policy</p>
        </div>
      </div>

      <div className="px-6 md:px-16 py-12 flex flex-col gap-6 text-gray-800">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-blue-900">Privacy Policy</h1>
          <p className="text-gray-600">Effective Date: May 30, 2025</p>
          <p>
            At Fusion Byte Software Solutions, a Calgary-based software development company, we respect and protect the privacy of our clients, partners, and website visitors. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our website or use our services.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-blue-800">Information We Collect</h2>
          <p>We collect personal and technical information to provide a seamless experience across our services. This may include:</p>
          <ul className="list-disc list-inside pl-4 text-gray-700">
            <li>Full Name and Contact Details</li>
            <li>Email Address and Company Name</li>
            <li>Project or Service Inquiry Details</li>
            <li>Website usage data (e.g. pages visited, time on site)</li>
            <li>IP address and browser/device information</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-blue-800">How We Use Your Data</h2>
          <p>We use the data we collect for purposes such as:</p>
          <ul className="list-disc list-inside pl-4 text-gray-700">
            <li>Responding to service inquiries</li>
            <li>Improving our website and service offerings</li>
            <li>Marketing and communication (with consent)</li>
            <li>Internal analytics and performance tracking</li>
            <li>Ensuring security and preventing fraud</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-blue-800">Cookies and Tracking</h2>
          <p>
            We use cookies and other tracking technologies to enhance your experience and analyze web traffic. You can choose to disable cookies through your browser settings. Note that disabling cookies may affect functionality.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-blue-800">Third-Party Services</h2>
          <p>
            We may use trusted third-party tools such as Google Analytics to gather insights on how our website is used. These services may collect information in accordance with their own privacy policies.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-blue-800">Data Security</h2>
          <p>
            We implement industry-standard security practices to safeguard your data. However, no method of transmission over the Internet is entirely secure. We encourage responsible browsing and data handling on your end as well.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-blue-800">Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data at any time. Please contact us to make such a request.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-blue-800">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy as needed to reflect changes to legal, operational, or business requirements. Updates will be posted here with a revised "Effective Date."
          </p>
        </div>

        
      </div>

      <Footer />
    </>
  );
};

export default Privacy;
