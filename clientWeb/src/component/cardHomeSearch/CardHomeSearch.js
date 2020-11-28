import React, { useState, useEffect } from "react";
import "./CardHomeSearch.css";
import { goodCategories, serviceCategories } from "../../Helpers";

export default function CardHomeSearch() {
  const [isServices, setIsServices] = useState(false);
  const [category, setCategory] = useState();

  useEffect(() => {
    if (!isServices) {
      setCategory(goodCategories);
    } else {
      setCategory(serviceCategories);
    }
  }, [isServices]);

  return (
    <div className="container_cardhomesearch">
      {console.log(category, "category")}
      <div>
        <p className="question_cardhomesearch">Que recherchez vous ?</p>
        <div className="wrapper_input_cardhomesearch">
          <input
            type="radio"
            checked={!isServices}
            onChange={() => setIsServices(false)}
          />
          <span>un bien</span>
          <input
            type="radio"
            checked={isServices}
            onChange={() => setIsServices(true)}
          />
          <span>un service</span>
        </div>
        <p className="question_cardhomesearch">
          Sélectionner la/les catégorie(s) associée(s)
        </p>
        <select className="input_category_cardhomesearch">
          {category?.map((category, index) => {
            return <option key={index}>{category.titleCategory}</option>;
          })}
        </select>
        <p className="question_cardhomesearch">Choississez la localisation ?</p>
        <input
          placeholder="Entrez une ville"
          className="input_entercity_cardhomesearch"
        />
      </div>
      <div className="wrapper_btn_cardhomesearch">
        <p>Lancer la recherche</p>
      </div>
    </div>
  );
}
