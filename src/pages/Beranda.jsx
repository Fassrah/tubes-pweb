import React from "react";
import images from "../images/a.png";

export default function Beranda() {
  return (
    <main className="main-content">
      <section className="product-info">
        <h1>
          In Search of <br />
          Incredible
        </h1>
        <p>
          ASUS berkomitmen menghadirkan teknologi inovatif untuk
          <br /> menciptakan pengalaman digital yang lebih mudah,
          <br /> cepat, dan menyenangkan bagi semua.
        </p>

        <section className="product-details">
          <div className="seri">
            <h3>SERI</h3>
            <p>ASUS ROG Strix Scar 18 </p>
          </div>
          <div className="kategori">
            <h3>KATEGORI</h3>
            <p>Gaming</p>
          </div>
        </section>

        <div className="price-container">
          <div className="price">IDR 63999000</div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </section>

      <section className="product-image">
        <img src={images} alt="laptop" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="triangle"></div>
        <div className="x-shape">X</div>
      </section>
    </main>
  );
}
