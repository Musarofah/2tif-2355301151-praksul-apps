// // components/Footer.jsx
// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-6">
//       <div className="container mx-auto text-center">
//         <p>&copy; 2025 Parador. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Subscribe Section */}
      <section className="py-16 bg-white text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Subscribe & Get Special Discount!
        </h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Don’t Wanna Miss Somethings? Subscribe Right Now And Get The Special Discount And Monthly Newsletter.
        </p>
        <form className="mt-8 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter Your Email Address..."
            className="flex-grow px-6 py-3 rounded-full shadow-md border border-gray-300 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Sosial */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              <span className="flex items-center gap-1">
                <span className="text-2xl">🏠</span>
                <span>Parador</span>
              </span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Management consulting includes a broad range of activities, and the many firms and their members often define these practices.
            </p>
            <div className="flex gap-3 text-gray-400 text-lg">
              <FaFacebookF className="hover:text-white cursor-pointer" />
              <FaTwitter className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaGooglePlusG className="hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">SERVICES</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Delicious Food</li>
              <li>Parking Area</li>
              <li>Free Wifi</li>
              <li>Swimming Pool</li>
              <li>Spa Salon</li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">IMPORTANT LINK</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>About Us</li>
              <li>Populer Destination</li>
              <li>Awesome Rooms</li>
              <li>Our Services</li>
              <li>Pricing Plan</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">CONTACT</h4>
            <ul className="text-gray-400 text-sm space-y-4">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1" />
                <span>
                  7 Green Lake Street<br />
                  Crawfordsville, IN 47933
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt />
                +1 800 123 456 789
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope />
                parador@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-12 border-t pt-6">
          Copyright © 2021 Parador by wpOceans. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
