import React, { useState } from "react";
import customerData from "../data/Customers.json";

export default function Customers() {
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    loyalty: "",
  });

  const handleAddCustomer = () => {
    console.log("New Customer:", newCustomer);
    setShowAddCustomer(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const getLoyaltyBadgeClass = (level) => {
    switch (level.toLowerCase()) {
      case "gold":
        return "badge badge-warning text-white";
      case "silver":
        return "badge badge-info text-white";
      case "bronze":
        return "badge badge-neutral text-white";
      default:
        return "badge";
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Customers Page</h1>
        {!showAddCustomer && (
          <button
            className="btn bg-green-500 hover:bg-green-600 text-white"
            onClick={() => setShowAddCustomer(true)}
          >
            Add New Customer
          </button>
        )}
      </div>

      {showAddCustomer && (
        <form className="bg-white shadow-md rounded-lg p-6 max-w-xl mx-auto space-y-4">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">ID</label>
            <input
              type="text"
              name="id"
              value={newCustomer.id}
              onChange={handleInputChange}
              className="input w-full border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter ID"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={newCustomer.name}
              onChange={handleInputChange}
              className="input w-full border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter name"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={newCustomer.email}
              onChange={handleInputChange}
              className="input w-full border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter email"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={newCustomer.phone}
              onChange={handleInputChange}
              className="input w-full border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter phone"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Loyalty</label>
            <select
              name="loyalty"
              value={newCustomer.loyalty}
              onChange={handleInputChange}
              className="select w-full border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Select Loyalty Level</option>
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="Bronze">Bronze</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              className="btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-200"
              onClick={() => setShowAddCustomer(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn bg-blue-600 hover:bg-blue-700 text-white"
              onClick={handleAddCustomer}
            >
              Add Customer
            </button>
          </div>
        </form>
      )}

      <div className="overflow-x-auto mt-8">
        <table className="table w-full text-sm text-gray-800">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Loyalty</th>
            </tr>
          </thead>
          <tbody>
            {customerData.map((customer) => (
              <tr
                key={customer.id}
                className="hover:bg-gray-200 transition-colors"
              >
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>
                  <span className={getLoyaltyBadgeClass(customer.loyalty)}>
                    {customer.loyalty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
