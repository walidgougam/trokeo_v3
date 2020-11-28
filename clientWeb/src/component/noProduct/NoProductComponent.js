import React from "react";
import "./NoProductComponent.css";
//PICTURE
import { ReactComponent as NoProduct } from "../../asset/allSvg/noProduct.svg";

export default function NoProductComponent() {
  return (
    <div className="no_product_noproductcomponent">
      <NoProduct />
      <p>Désolé, pour le moment, aucune demande n’a été mise en ligne</p>
    </div>
  );
}
