import React from "react";
import strix_scar18 from "../images/8-s_s18.png";
import "../styles/style.css";

export default function Keranjang() {
  const item = {
    name: "ASUS ROG Strix Scar 18 (G834)",
    price: 63999000,
    image: strix_scar18,
    quantity: 1,
  };

  return (
    <div className="page-cart">
      <h2>Keranjang Belanja</h2>
      <div className="keranjang-container">
        <div className="keranjang-items">
          <div className="cart-list">
            <div className="cart-item">
              <img src={item.image} alt={item.name} className="cart-img" />
              <div className="cart-info-container">
                <div className="product-line">
                  <div className="name-wrapper">
                    <h3>{item.name}</h3>
                  </div>
                  <div className="quantity-controls">
                    <button className="quantity-btn">-</button>
                    <span className="quantity-number">{item.quantity}</span>
                    <button className="quantity-btn">+</button>
                  </div>
                  <p className="cart-price">
                    IDR {(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
                <span className="remove-link">Hapus</span>
              </div>
            </div>
          </div>
        </div>
        <div className="order-summary">
          <h3>Ringkasan Pesanan</h3>
          <div className="summary-content">
            <p>Total Item: {item.quantity}</p>
            <p>Subtotal: IDR {(item.price * item.quantity).toLocaleString()}</p>
            <p>Estimasi Ongkir: IDR 150,000</p>
            <p>Total Harga: IDR 64,149,000</p>
            <hr className="summary-divider" />
            <p>Estimasi Tiba: 1 - 2 Hari Kerja</p>
            <button className="btn-cart">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
