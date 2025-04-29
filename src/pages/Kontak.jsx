// Kontak.jsx
import React from "react";

export default function Kontak() {
  return (
    <div className="page">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Hubungi Kami</h2>
          <div className="contact-details">
            <p>Email: support@asusstore.com</p>
            <p>Telepon: (021) 1234-5678</p>
            <p>Alamat: Jl. Teknologi No. 123, Jakarta</p>
          </div>
        </div>

        <div className="contact-form">
          <h3>Kirim Pesan</h3>
          <form className="form-container">
            <div className="form-group">
              <label htmlFor="nama">Nama Lengkap</label>
              <input type="text" id="nama" className="form-input" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Alamat Email</label>
              <input type="email" id="email" className="form-input" />
            </div>

            <div className="form-group">
              <label htmlFor="subjek">Subjek</label>
              <input type="text" id="subjek" className="form-input" />
            </div>

            <div className="form-group">
              <label htmlFor="pesan">Pesan</label>
              <textarea
                id="pesan"
                className="form-input textarea"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn-contact">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
