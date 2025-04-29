import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

export default function Footer() {
return (
<footer className="footer">
<div className="footer-content">
<div className="footer-section">
<h4 className="footer-heading">Tentang Kami</h4>
<p className="footer-text">
ASUS Online Store menyediakan produk teknologi terkini dengan kualitas terbaik
dan garansi resmi. Kami berkomitmen untuk memberikan pengalaman belanja terbaik.
</p>
</div>
<div className="footer-section">
      <h4 className="footer-heading">Navigasi</h4>
      <div className="footer-links">
        <Link to="/beranda" className="footer-link">Beranda</Link>
        <Link to="/produk" className="footer-link">Produk</Link>
        <Link to="/keranjang" className="footer-link">Keranjang</Link>
        <Link to="/tentang" className="footer-link">Tentang</Link>
        <Link to="/kontak" className="footer-link">Kontak</Link>
      </div>
    </div>

    <div className="footer-section">
      <h4 className="footer-heading">Kontak</h4>
      <div className="contact-info">
        <p className="footer-text"> (021) 1234-5678</p>
        <p className="footer-text"> support@asusstore.com</p>
        <p className="footer-text"> Jl. Teknologi No. 123, Jakarta</p>
      </div>
    </div>

    <div className="footer-section">
      <h4 className="footer-heading">Follow Kami</h4>
      <div className="social-links">
        <a href="#" className="footer-link">Instagram</a>
        <a href="#" className="footer-link">Facebook</a>
        <a href="#" className="footer-link">Twitter</a>
      </div>
    </div>
  </div>
  
  <div className="footer-bottom">
    <p className="copyright">
      © 2024 ASUS Online Store. All rights reserved
    </p>
  </div>
</footer>
);
}