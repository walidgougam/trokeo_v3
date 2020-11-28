import React from "react";
import "./CardContactOwner.scss";
import BtnFinish from "../btn/BtnFinish";
import PictureIconProfile from "../picture/PictureIconProfile";
import { ReactComponent as StarFull } from "../../asset/allSvg/star_full.svg";
import { ReactComponent as StarEmpty } from "../../asset/allSvg/star_empty.svg";

export default function CardContactOwner() {
  return (
    <div className="container_cardcontactowner">
      <div className="wrapper_picture_owner_cardcontactowner">
        <PictureIconProfile width={49} height={49} fromCardContactOwner />
        <div className="wrapper_name_owner_cardcontactowner">
          <p>marine_w</p>
          <div className="wrapper_star_cardcontactowner">
            <StarFull />
            <StarFull />
            <StarEmpty />
            <StarEmpty />
          </div>
        </div>
      </div>
      <div className="container_btn_cardcontactowner">
        <BtnFinish width={219} height={30} titleBtn="Contacter le trokeur" />
        <div className="btn_product_inline_cardcontactowner">
          <span>8 annonces en ligne</span>
        </div>
      </div>
    </div>
  );
}
