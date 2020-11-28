import React from "react";
import { ReactComponent as LogoTrokeoBig } from "../../asset/allSvg/logo_trokeo_big.svg";
import { ReactComponent as IconFacebook } from "../../asset/allSvg/icon_follow_facebook.svg";
import { ReactComponent as IconGoogle } from "../../asset/allSvg/icon_follow_instagram.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="container_footer">
      <div className="wrapper_footer">
        <div className="wrapper_logo_footer">
          <LogoTrokeoBig />
        </div>

        <div className="wrapper_discover_footer">
          <p className="title_footer">Découvrir Trokéo</p>
          <div className="ul_footer">
            <span>
              <a href="/about">A propos </a>
            </span>
            <span>
              <a href="">Questions fréquentes</a>
            </span>
          </div>
        </div>
        <div className="wrapper_info_footer">
          <p className="title_footer">Informations légales</p>
          <div className="ul_footer">
            <span>
              <a href="">CGU</a>
            </span>
            <span>
              <a href="">Politique de confidentialité </a>
            </span>
            <span>
              <a href="">Services interdits </a>
            </span>
            <span>
              <a href=""> Mentions légales </a>
            </span>
          </div>
        </div>
        <div className="wrapper_followus_footer">
          <p className="title_footer">Suivez-nous </p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <IconFacebook />
            </div>
            <div style={{ marginLeft: 9 }}>
              <IconGoogle />
            </div>
          </div>
        </div>
      </div>
      <p className="description_footer">
        Trokéo est une plateforme qui vous permet d’échanger gratuitement vos
        biens (objets) et services entre particuliers à proximité. Avec Trokéo,
        redécouvrez le troc ! Profitez de Trokéo pour vous libérer de choses
        inutiles ou proposez vos services contre ce dont vous avez besoin.
        Postez votre offre en deux clics l’application mobile Trokéo et laissez
        les trokeurs venir vous contacter pour vous accordez ensemble d’un bien
        ou service à échanger. En un mot, Trokéo est une solution utile,
        gratuite et vertueuse, alors venez tester une nouvelle manière de
        consommer !
      </p>
    </div>
  );
}
