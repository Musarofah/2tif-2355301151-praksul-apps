import React from "react";
import {
  FaUtensils,
  FaParking,
  FaSwimmingPool,
  FaSpa,
  FaDumbbell,
  FaWifi,
  FaCoffee,
  FaEllipsisH,
} from "react-icons/fa";

const facilities = [
  { icon: <FaUtensils size={32} />, label: "Delicious Food" },
  { icon: <FaParking size={32} />, label: "Parking Area" },
  { icon: <FaSwimmingPool size={32} />, label: "Swimming Pool" },
  { icon: <FaSpa size={32} />, label: "Spa Salon" },
  { icon: <FaDumbbell size={32} />, label: "Exercise Space" },
  { icon: <FaWifi size={32} />, label: "Free Wifi" },
  { icon: <FaCoffee size={32} />, label: "Breakfast" },
  { icon: <FaEllipsisH size={32} />, label: "Other Service" },
];

const ListMenu = () => {
  return (
    <div className="bg-blue-50"> {/* Pindahkan bg-blue-50 ke div pembungkus */}
      <section className="py-16 rounded-xl mx-4 md:mx-8 lg:mx-16">
        <div className="container mx-auto px-6">
          {/* Judul dan deskripsi */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              We are Providing You Our Best Facilities
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <button className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition">
              Discover More
            </button>
          </div>

          {/* Grid fasilitas */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-300 overflow-hidden rounded-md">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-white hover:bg-blue-100 transition"
              >
                <div className="text-blue-500 mb-2">{facility.icon}</div>
                <p className="text-sm font-medium text-gray-700">
                  {facility.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListMenu;