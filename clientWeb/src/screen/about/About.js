import React from "react";
import "./About.scss";
//PICTURE
import { ReactComponent as ImagePeopleHeartBig } from "../../asset/allSvg/people_heart_image_big.svg";
import { ReactComponent as ImageWomanPigMoney } from "../../asset/allSvg/woman_pig_money.svg";
import { ReactComponent as ImageManPainting } from "../../asset/allSvg/man_painting.svg";
//COMPONENT
import HeaderGreen from "../../component/headerGreen/HeaderGreen";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";

export default function About() {
  return (
    <div>
      <Navbar />
      <HeaderGreen title="A propos de Trokéo" />
      <div className="container_about">
        <div className="wrapper_people_about">
          <ImagePeopleHeartBig />
          <div>
            <p className="title_about">Le geste eco-citoyen</p>
            <p className="text_about">
              Lutter contre la consommation de masse c’est possible avec Trokéo
              n’achetez plus, échangez !
            </p>
          </div>
        </div>
        <div className="wrapper_woman_pig_about">
          <div style={{}}>
            <p className="title_about">Economisez de l’argent</p>
            <p className="text_about">
              Le troc vous permettra d’accéder à des offres répondant à vos
              besoins tout en vous libérant d’objets encombrants
            </p>
          </div>
          <ImageWomanPigMoney />
        </div>
        <div className="wrapper_man_painting_about">
          <ImageManPainting />
          <div>
            <p className="title_about">Faite partagez votre savoir faire</p>
            <p className="text_about">
              Proposer vos prestations contre un service ou un objet auprès de
              la communauté de trokeurs.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
