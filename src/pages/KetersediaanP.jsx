import React, { useState } from "react";
import produkData from "../data/produk.json"; // Mengambil data JSON order
import ProductList from "../pertemuan-4/ProductList";

export default function Produk() {
  const [showAddProduk, setShowAddProduk] = useState(false);
  const [newProduk, setNewProduk] = useState({
    id: "",
    title: "",
    price: "",
    stock: "",
  });

  const handleAddProduk = () => {
    console.log("New Produk:", newProduk);
    setShowAddProduk(false);
    // Di sini kamu akan menambahkan logika untuk menyimpan order baru
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduk({ ...newProduk, [name]: value });
  };

  return ( 
    <div style={{ padding: "20px" }}>
      <ProductList/>
      <h1>Ketersediaan Produk Page</h1>
      
      {/* Form Add New Order */}
      {showAddProduk && (
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
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Produk ID</label>
              <input
                type="text"
                name="id"
                placeholder="Enter Produk ID"
                value={newProduk.id}
                onChange={handleInputChange}
                style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter Produk Name"
                value={newProduk.title}
                onChange={handleInputChange}
                style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Price</label>
              <select
                name="price"
                value={newProduk.price}
                onChange={handleInputChange}
                style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
              >
                <option value="">Select Price</option>
                <option value="price">799.00</option>
                <option value="price">699.99</option>
                <option value="price">999.00</option>
              </select>
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Stok</label>
              <input
                type="number"
                name="stok"
                placeholder="Stok"
                value={newProduk.stok}
                onChange={handleInputChange}
                style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
              />
            </div>

    

            <button
              type="button"
              onClick={handleAddProduk}
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
              Add Ketersediaan Produk
            </button>
          </form>
        </div>
      )}

      {/* Tombol Add New Order */}
      {!showAddProduk && (
        <div style={{ marginBottom: "20px", textAlign: "right" }}>
          <button
            onClick={() => setShowAddProduk(true)}
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
            Add New Ketersediaan Produk
          </button>
        </div>
      )}

      {/* Tabel Data Order */}
      <table style={{ width: "100%", border: "1px solid #ddd", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ padding: "10px", textAlign: "left" }}>Order ID</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Title</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Price</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Stok</th>
          </tr>
        </thead>
        <tbody>
          {produkData.map((produk) => (
            <tr key={produk.id}>
              <td style={{ padding: "10px" }}>{produk.id}</td>
              <td style={{ padding: "10px" }}>{produk.title}</td>
              <td style={{ padding: "10px" }}>{produk.price}</td>
              <td style={{ padding: "10px" }}>${produk.stok}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


