import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Beranda from "./pages/Beranda";
import Produk from "./pages/Produk";
import Keranjang from "./pages/Keranjang";
import Tentang from "./pages/Tentang";
import Kontak from "./pages/Kontak";
import "./styles/style.css";

export default function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/keranjang" element={<Keranjang />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}