import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/style.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <span span className="atas">asus</span>
        <span className="bawah">ONLINE STORE</span>
      </h1>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-button active" : "nav-button"}>BERANDA</NavLink>
        <NavLink to="/produk" className={({ isActive }) => isActive ? "nav-button active" : "nav-button"}>PRODUK</NavLink>
        <NavLink to="/keranjang" className={({ isActive }) => isActive ? "nav-button active" : "nav-button"}>KERANJANG</NavLink>
        <NavLink to="/tentang" className={({ isActive }) => isActive ? "nav-button active" : "nav-button"}>TENTANG</NavLink>
        <NavLink to="/kontak" className={({ isActive }) => isActive ? "nav-button active" : "nav-button"}>KONTAK</NavLink>
      </div>
    </nav>
  );
}