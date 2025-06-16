import React, { useState } from "react";
import orderData from "../data/Orders.json";

export default function Orders() {
  const [showAddOrder, setShowAddOrder] = useState(false);
  const [newOrder, setNewOrder] = useState({
    id: "",
    customer: "",
    status: "",
    total: "",
    date: "",
  });

  const handleAddOrder = () => {
    console.log("New Order:", newOrder);
    setShowAddOrder(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Orders Page</h1>
        {!showAddOrder && (
          <button
            className="btn bg-green-500 hover:bg-green-600 text-white"
            onClick={() => setShowAddOrder(true)}
          >
            Add New Order
          </button>
        )}
      </div>

      {showAddOrder && (
        <form className="bg-white shadow-md rounded-lg p-6 max-w-xl mx-auto space-y-4">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Order ID
            </label>
            <input
              type="text"
              name="id"
              value={newOrder.id}
              onChange={handleInputChange}
              className="input w-full bg-white border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter Order ID"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Customer
            </label>
            <input
              type="text"
              name="customer"
              value={newOrder.customer}
              onChange={handleInputChange}
              className="input w-full bg-white border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter Customer Name"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Status
            </label>
            <select
              name="status"
              value={newOrder.status}
              onChange={handleInputChange}
              className="select w-full bg-white border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Select Status</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Total
            </label>
            <input
              type="number"
              name="total"
              value={newOrder.total}
              onChange={handleInputChange}
              className="input w-full bg-white border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter Total Amount"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={newOrder.date}
              onChange={handleInputChange}
              className="input w-full bg-white border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              className="btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-200"
              onClick={() => setShowAddOrder(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn bg-blue-600 hover:bg-blue-700 text-white"
              onClick={handleAddOrder}
            >
              Add Order
            </button>
          </div>
        </form>
      )}

      <div className="overflow-x-auto mt-8">
        <table className="table w-full text-sm text-gray-800">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Total</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-gray-200 text-gray-800 transition-colors"
              >
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>
                  <span
                    className={`badge ${
                      order.status === "Completed"
                        ? "badge-success"
                        : order.status === "Pending"
                        ? "badge-warning"
                        : "badge-error"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td>${parseFloat(order.total).toFixed(2)}</td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
