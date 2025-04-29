import React from "react";
import about from "../images/about.jpg";
import "../styles/style.css";

export default function TentangKami() {
  return (
    <div className="page-about">
      <h2>Tentang Kami</h2>
      <div className="about-container">
        <div className="about-image">
          <img src={about} alt="ASUS LOGO" className="about-img" />
        </div>

        <div className="about-text">
          <h3>ASUS Online Store</h3>
          <p>
            Selamat datang di <strong>ASUS Online Store</strong> — destinasi
            resmi untuk produk teknologi terbaik dari ASUS. Kami menyediakan
            laptop, smartphone, perangkat gaming, dan aksesoris berkualitas
            premium dengan garansi resmi.
            <br />
            <br />
            Dengan pengalaman bertahun-tahun dan dedikasi penuh kepada
            pelanggan, kami hadir untuk memberikan solusi teknologi yang
            memperkaya hidup Anda. Belanja nyaman dan aman hanya di{" "}
            <strong>ASUS Online Store</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
