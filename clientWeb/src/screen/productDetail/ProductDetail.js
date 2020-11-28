import React, { useState } from "react";
import "./ProductDetail.scss";
//PICTURE
import { ReactComponent as HeartEmpty } from "../../asset/allSvg/heart_empty.svg";
import { ReactComponent as HeartFull } from "../../asset/allSvg/heart_full.svg";
import { ReactComponent as IconLocation } from "../../asset/allSvg/icon_location.svg";
//COMPONENT
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import CardContactOwner from "../../component/cardContactOwner/CardContactOwner";

export default function ProductDetail() {
  const [heart, setHeart] = useState(true);
  return (
    <div>
      <Navbar />
      <div style={{ marginLeft: 139, marginTop: 23, marginBottom: 12 }}>
        <span className="title_category_productdetail">Catégorie</span>
        <span className="detail_category_productdetail">
          Beauté & bien être > soin du visage
        </span>
      </div>
      <div style={{ display: "flex", marginLeft: 139, marginRight: 139 }}>
        <CardContactOwner />
        <div className="container_right_productdetail">
          <img
            src={require("../../asset/allSvg/shave.jpg")}
            alt="product_image"
            className="image_product_productdetail"
          />
          <div className="wrapper_icon_heart_productdetail">
            <p className="title_product_productdetail">
              Kit de rasage pour Homme
            </p>
            <div
              onClick={() => setHeart(!heart)}
              style={{ cursor: "pointer " }}
            >
              {heart ? <HeartEmpty /> : <HeartFull />}
            </div>
          </div>
          <p className="title_section_productdetail">Etat</p>
          <p className="result_section_productdetail">Neuf</p>
          <p className="title_section_productdetail">Description</p>
          <p className="result_section_productdetail">
            Tout est là : les produits, les outils, le résultat.. Tout! Ce Kit
            de rasage shavette de la marque Bluebeards Revenge rallie
            magistralement tradition.
          </p>
          <p className="title_section_productdetail">Localisation</p>
          <div className="wrapper_location_productdetail">
            <IconLocation />
            <p>5,8 km</p>
          </div>
          <div className="map_productdetail"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
