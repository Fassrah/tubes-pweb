import React from "react";
import Card from "../components/ui/card";
import Button from "../components/ui/button";
import zephyrus_g14 from "../images/1-z_g14.png";
import zenbook_a14 from "../images/2-z_a14.png";
import vivobook_14 from "../images/3-v_14.png";
import zenbook_14 from "../images/4-z_14.png";
import tuf_f15 from "../images/5-t_f15.png";
import chromebook from "../images/6-cb.png";
import expertbook_b3 from "../images/7-eb.png";
import strix_scar18 from "../images/8-s_s18.png";
import vivobook_go14 from "../images/9-v_g14.png";
import zenbook_pro14 from "../images/10-z_p14.png";


const products = [
  { id: 1, name: "ASUS ROG Zephyrus G14 (2024)", price:  32999000, image: zephyrus_g14 },
  { id: 2, name: "ASUS Zenbook A14 (UX3407)", price:  14999000, image: zenbook_a14 },
  { id: 3, name: "ASUS VivoBook 14 (A1400EA)", price:  6999000, image: vivobook_14 },
  { id: 4, name: "ASUS Zenbook 14 OLED (UX3402)", price:  15999000, image: zenbook_14 },
  { id: 5, name: "ASUS TUF Gaming F15 (FX506HC)", price:  13499000, image: tuf_f15 },
  { id: 6, name: "ASUS Chromebook C214MA", price:  4599000, image: chromebook },
  { id: 7, name: "ASUS ExpertBook B3 Flip (B3402FBA)", price:  13899000, image: expertbook_b3 },
  { id: 8, name: "ASUS ROG Strix Scar 18 (G834)", price:  63999000, image: strix_scar18 },
  { id: 9, name: "ASUS Vivobook Go 14 (E1404FA)", price:  5499000, image: vivobook_go14 },
  { id: 10, name: "ASUS Zenbook Pro 14 Duo OLED (UX8402)", price:  38999000, image: zenbook_pro14 },
];

export default function Produk() {
  return (
    <div className="page">
      <h2>Daftar Produk</h2>
      <div className="product-grid">
        {products.map((product) => (
          <Card key={product.id}>
            <img src={product.image} alt={product.name} style={{ filter: "brightness(80%)" }} className="product-img" />
            <h3>{product.name}</h3>
            <p>IDR {product.price.toLocaleString()}</p>
            <Button class='btn'>Tambah ke Keranjang</Button>
          </Card>
        ))}
      </div>

      <div className="pagination-container">
        <button className="pagination-btn" style={{backgroundColor: "#ffffff83", border: "none"}}>Previous</button>
        <button className="pagination-btn active">1</button>
        <button className="pagination-btn">2</button>
        <button className="pagination-btn">3</button>
        <button className="pagination-btn">Next</button>
      </div>
    </div>
  );
}