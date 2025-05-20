
// src/components/guest/HeaderGuest.jsx
import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { FaSearch, FaShoppingCart, FaBell, FaCog } from "react-icons/fa"

const HeaderGuest = () => {
    return (
        <header className="bg-[#f4fbfd] py-4 shadow-sm">
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo & Menu (kiri) */}
                <div className="flex items-center gap-4">
                    {/* Menu icon (untuk responsive jika mau dikembangkan) */}
                    <button className="md:hidden text-gray-700">
                        <HiOutlineMenu size={24} />
                    </button>

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span id="logo-title" className="font-poppins-extrabold text-[48px] text-gray-900">
                            Sedap <b id="logo-dot" className="text-hijau">.</b>
                        </span>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <a href="#" className="hover:text-red-500">Home</a>
                    <a href="#" className="hover:text-red-500">About</a>
                    <a href="#" className="hover:text-red-500">Room</a>
                    <a href="#" className="hover:text-red-500">Destination</a>
                    <a href="#" className="hover:text-red-500">Blog</a>
                    <a href="#" className="hover:text-red-500">Pages</a>
                    <a href="#" className="hover:text-red-500">Shop</a>
                    <a href="#" className="hover:text-red-500">Contact</a>
                </nav>

                {/* Icons */}


                <div className="flex items-center space-x-8">
                    {/* Search Icon */}
                    <button className="text-gray-600 hover:text-red-500">
                        <FaSearch size={18} />
                    </button>

                    {/* Cart Icon with badge */}
                    <div className="relative">
                        <button className="text-gray-600 hover:text-red-500">
                            <FaShoppingCart size={18} />
                        </button>
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                            2
                        </span>
                    </div>

                    {/* Notification Icon with badge */}
                    <div className="relative">
                        <button className="text-gray-600 hover:text-red-500">
                            <FaBell size={18} />
                        </button>
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                            3
                        </span>
                    </div>

                    {/* Settings Icon */}
                    <button className="text-gray-600 hover:text-red-500">
                        <FaCog size={18} />
                    </button>
                </div>


            </div>
        </header>
    );
};

export default HeaderGuest;
