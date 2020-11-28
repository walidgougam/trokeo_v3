import React from "react";
import "./HeaderGreen.css";

export default function HeaderGreen({ title }) {
  return (
    <div className="wrapper_header_headergreen">
      <p className="text_header_headergreen">{title}</p>
    </div>
  );
}
