import React, { useState } from "react";
import customerData from "../data/customers.json"; // Mengambil data JSON customer

export default function Customers() {
  const [showAddCustomer, setShowAddCustomer] = useState(false); // Status form Add Customer
  const [newCustomer, setNewCustomer] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    loyalty: "",
  });

  // Handler untuk menambahkan customer baru (sementara hanya console.log)
  const handleAddCustomer = () => {
    console.log("New Customer:", newCustomer);
    // Di sini kamu akan menambahkan logika untuk menyimpan customer baru
    setShowAddCustomer(false); // Menutup form setelah menambahkan customer
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Customers Page</h1>

      {/* Form untuk Menambahkan Customer - hanya tampil saat tombol Add Customer diklik */}
      {showAddCustomer && (
        <div
          style={{
            marginBottom: "20px",
            padding: "20px",
            border: "1px solid #ddd",
            maxWidth: "400px", // Mengatur lebar maksimum form
            margin: "auto",
            backgroundColor: "#f9f9f9",
            borderRadius: "5px", // Menambahkan sedikit border radius
          }}
        >
        
          <form>
            <div style={{ marginBottom: "15px" }}> {/* Menambah jarak antar input group */}
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>ID</label>
              <input
                type="text"
                placeholder="Enter customer ID"
                value={newCustomer.id}
                onChange={(e) => setNewCustomer({ ...newCustomer, id: e.target.value })}
                style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Name</label>
              <input
                type="text"
                placeholder="Enter name"
                value={newCustomer.name}
                onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Email</label>
              <input
                type="email"
                placeholder="Enter email"
                value={newCustomer.email}
                onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Phone</label>
              <input
                type="text"
                placeholder="Enter phone number"
                value={newCustomer.phone}
                onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Loyalty</label>
              <select
                value={newCustomer.loyalty}
                onChange={(e) => setNewCustomer({ ...newCustomer, loyalty: e.target.value })}
                style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
              >
                <option value="">Select Loyalty Level</option>
                <option value="Bronze">Bronze</option>
                <option value="Silver">Silver</option>
                <option value="Gold">Gold</option>
              </select>
            </div>

            <button
              type="button"
              onClick={handleAddCustomer} // Menambahkan customer baru
              style={{
                padding: "10px 20px",
                backgroundColor: "blue",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
                fontSize: "16px", // Menambahkan ukuran font
              }}
            >
              Add Customer
            </button>
          </form>
        </div>
      )}

      {/* Tombol untuk Menampilkan Form Add Customer */}
      {!showAddCustomer && (
        <div style={{ marginBottom: "20px", textAlign: "right" }}>
          <button
            onClick={() => setShowAddCustomer(true)} // Menampilkan form
            style={{
              padding: "10px 20px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
              fontSize: "16px", // Menambahkan ukuran font
            }}
          >
            Add Customer
          </button>
        </div>
      )}

      {/* Tabel Data Customer */}
      <table style={{ width: "100%", border: "1px solid #ddd", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ padding: "10px", textAlign: "left" }}>ID</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Name</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Email</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Phone</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Loyalty</th>
          </tr>
        </thead>
        <tbody>
          {customerData.map((customer) => (
            <tr key={customer.id}>
              <td style={{ padding: "10px" }}>{customer.id}</td>
              <td style={{ padding: "10px" }}>{customer.name}</td>
              <td style={{ padding: "10px" }}>{customer.email}</td>
              <td style={{ padding: "10px" }}>{customer.phone}</td>
              <td style={{ padding: "10px" }}>{customer.loyalty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}