import React from "react";
import "./InputSelect.css";

export default function InputSelect({ onChange }) {
  return (
    <select
      className="input_inputselect"
      style={{ marginBottom: 37 }}
      onChange={(e) => onChange(e)}
    >
      <option style={{ color: "red" }} value="" selected disabled hidden>
        Sélectionnez
      </option>
      <option value="homme">Homme</option>
      <option value="femme">Femme</option>
    </select>
  );
}
