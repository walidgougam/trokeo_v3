import React from "react";
import "./Input.css";

export default function Input({ placeholder, value, marginBottom, onChange }) {
  return (
    <input
      type="text"
      value={value}
      className="container_input"
      placeholder={placeholder}
      style={{ marginBottom }}
      onChange={(e) => onChange(e)}
    />
  );
}
