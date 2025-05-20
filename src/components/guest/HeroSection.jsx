
import React from "react";
import { FaCalendarAlt, FaCalendarCheck, FaUserFriends, FaSearch } from "react-icons/fa";

const HeroSection = () => {
    return (
        <section className="bg-[#f4fbfd] pb-1">
            <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center pt-20 pb-10">
                {/* Left Side Text */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                        Stay Once Carry 1 <br /> Memories Forever
                    </h1>
                    <p className="text-gray-600 mb-6">
                        There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration in some form.
                    </p>
                    <button className="bg-[#CB0404] hover:bg-red-600 text-white font-semibold py-3 px-6 rounded">
                        Book Now
                    </button>
                </div>

                {/* Right Side Image */}
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <div className="rounded-tl-[150px] overflow-hidden shadow-xl h-full">
                        <img
                            src="src/assets/kamar.jpg"
                            alt="Kamar"
                            className="w-250 h-200 object-cover"
                        />
                    </div>
                </div>
            </div>


            {/* Booking Form - Diperbaiki sesuai gambar */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-12 max-w-6xl mx-auto flex items-center justify-around">
                {/* Check In */}
                <div className="flex flex-col items-start gap-1 text-gray-700">
                    <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-gray-500 text-lg" />
                        <span>Check In</span>
                    </div>
                    <input type="date" className="border-b-2 border-gray-300 py-1 focus:outline-none text-sm" />
                </div>

                {/* Check Out */}
                <div className="flex flex-col items-start gap-1 text-gray-700">
                    <div className="flex items-center gap-2">
                        <FaCalendarCheck className="text-gray-500 text-lg" />
                        <span>Check Out</span>
                    </div>
                    <input type="date" className="border-b-2 border-gray-300 py-1 focus:outline-none text-sm" />
                </div>

                {/* Guest Info */}
                <div className="flex flex-col items-start gap-1 text-gray-700">
                    <div className="flex items-center gap-2">
                        <FaUserFriends className="text-gray-500 text-lg" />
                        <span>Guests</span>
                    </div>
                    <select className="border-b-2 border-gray-300 py-1 focus:outline-none text-sm">
                        <option>0 Adults • 0 Children • 0 Room</option>
                        <option>1 Adult • 0 Children • 0 Room</option>
                        <option>2 Adults • 0 Children • 0 Room</option>
                        {/* Tambahkan opsi lain sesuai kebutuhan */}
                    </select>
                </div>

                {/* Button */}
                <button className="bg-[#CB0404] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#e04a4a] focus:outline-none">
                    Check Availability
                </button>
            </div>
        </section>
    );
};

export default HeroSection;

