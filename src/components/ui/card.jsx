import React, { useEffect } from "react";
import "../../styles/style.css";

export default function Card({ children }) {
  return <div className="card">{children}</div>;
}
