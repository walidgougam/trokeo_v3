import React from "react";
import "./BtnFinish.css";

export default function BtnFinish({
  titleBtn,
  onClick,
  width,
  height,
  fontSize,
}) {
  return (
    <div
      className="container_btnfinish"
      style={{ width, height }}
      onClick={onClick}
    >
      <p className="text_btnfinish" style={{ fontSize }}>
        {titleBtn}
      </p>
    </div>
  );
}
