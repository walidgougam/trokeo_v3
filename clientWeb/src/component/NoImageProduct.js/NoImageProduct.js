import React from "react";
import "./NoImageProduct.scss";
import { allIcon } from "../../Helpers.js";
//PICTURE

export default function NoImageProduct({ icon }) {
  const renderIcon = () => {
    for (let i = 0; i < allIcon.length; i++) {
      if (allIcon[i].title === icon) {
        return allIcon[i].icon;
      }
    }
  };

  return <div className="container_noimageproduct">{renderIcon()}</div>;
}
