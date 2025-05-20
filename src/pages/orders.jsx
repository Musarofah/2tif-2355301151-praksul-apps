import React, { useState } from "react";
import orderData from "../data/Orders.json"; // Mengambil data JSON order

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
    // Di sini kamu akan menambahkan logika untuk menyimpan order baru
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Orders Page</h1>

      {/* Form Add New Order */}
      {showAddOrder && (
        <div
          style={{
            marginBottom: "20px",
            padding: "20px",
            border: "1px solid #ddd",
            maxWidth: "400px",
            margin: "auto",
            backgroundColor: "#f9f9f9",
            borderRadius: "5px",
          }}
        >
       
          <form>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Order ID</label>
              <input
                type="text"
                name="id"
                placeholder="Enter Order ID"
                value={newOrder.id}
                onChange={handleInputChange}
                style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Customer</label>
              <input
                type="text"
                name="customer"
                placeholder="Enter Customer Name"
                value={newOrder.customer}
                onChange={handleInputChange}
                style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Status</label>
              <select
                name="status"
                value={newOrder.status}
                onChange={handleInputChange}
                style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
              >
                <option value="">Select Status</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Total</label>
              <input
                type="number"
                name="total"
                placeholder="Enter Total Amount"
                value={newOrder.total}
                onChange={handleInputChange}
                style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Date</label>
              <input
                type="date"
                name="date"
                value={newOrder.date}
                onChange={handleInputChange}
                style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
              />
            </div>

            <button
              type="button"
              onClick={handleAddOrder}
              style={{
                padding: "10px 20px",
                backgroundColor: "blue",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            >
              Add Order
            </button>
          </form>
        </div>
      )}

      {/* Tombol Add New Order */}
      {!showAddOrder && (
        <div style={{ marginBottom: "20px", textAlign: "right" }}>
          <button
            onClick={() => setShowAddOrder(true)}
            style={{
              padding: "10px 20px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          >
            Add New Order
          </button>
        </div>
      )}

      {/* Tabel Data Order */}
      <table style={{ width: "100%", border: "1px solid #ddd", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ padding: "10px", textAlign: "left" }}>Order ID</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Customer</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Status</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Total</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {orderData.map((order) => (
            <tr key={order.id}>
              <td style={{ padding: "10px" }}>{order.id}</td>
              <td style={{ padding: "10px" }}>{order.customer}</td>
              <td style={{ padding: "10px" }}>{order.status}</td>
              <td style={{ padding: "10px" }}>${order.total.toFixed(2)}</td>
              <td style={{ padding: "10px" }}>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}