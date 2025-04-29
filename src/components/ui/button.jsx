// File: components/ui/button.jsx
import React from "react";
import "../../styles/style.css";

export default function Button({ children, onClick, className = "" }) {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
}
