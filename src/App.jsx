// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return <h1>Beranda Aplikasi</h1>;
}

function NotFound() {
  return <h1>404 - Halaman tidak ditemukan</h1>;
}

// Komponen Main dihapus atau belum ada, jadi jangan dipakai dulu
// import Main from "./pertemuan-3/components/main";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/pertemuan-3" element={<Main />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
