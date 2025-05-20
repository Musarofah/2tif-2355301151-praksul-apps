// src/components/ListMenu.jsx
import React from 'react';
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";

function ListMenu() {
  const menuItems = [
    {
      icon: <FaShoppingCart size={24} />,
      label: 'Total Orders',
      value: 75,
    },
    {
      icon: <FaTruck size={24} />,
      label: 'Total Delivered',
      value: 175,
    },
    {
      icon: <FaBan size={24} />,
      label: 'Total Canceled',
      value: 40,
    },
    {
      icon: <FaDollarSign size={24} />,
      label: 'Total Revenue',
      value: 'Rp.128',
    },
  ];

  return (
    <div id="sidebar-menu" className="p-5">
      {menuItems.map((item, index) => (
        <div key={index} className="bg-white shadow-md rounded-2xl p-4 flex items-center space-x-4 mb-4">
          <div className={`bg-${getColorByIndex(index)}-100 text-${getColorByIndex(index)}-600 rounded-full p-4`}>
            {item.icon}
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">{item.value}</span>
            <span className="text-gray-500">{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function getColorByIndex(index) {
  const colors = ['green', 'blue', 'red', 'yellow'];
  return colors[index % colors.length];
}

export default ListMenu;