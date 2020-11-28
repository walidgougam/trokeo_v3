import React from "react";
import "./CardSetting.css";

export default function CardSetting({ title, description, picture }) {
  return (
    <div className="container_cardsetting">
      <p className="title_cardsetting">{title}</p>
      {picture}
      <p className="description_cardsetting">{description}</p>
    </div>
  );
}
