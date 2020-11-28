import React, { useState } from "react";
import "./HowItWorks.css";
//PICTURE
import { ReactComponent as ManComputer } from "../../asset/allSvg/man_computer.svg";
import { ReactComponent as WomanDress } from "../../asset/allSvg/woman_dress.svg";
import { ReactComponent as BoyPlant } from "../../asset/allSvg/boy_plant.svg";
import { ReactComponent as PigMoney } from "../../asset/allSvg/pig_money.svg";
import { ReactComponent as PeopleHeart } from "../../asset/allSvg/people_heart_image.svg";

export default function HowItWorks() {
  const [image, setImage] = useState([
    {
      picture: <ManComputer />,
      title: "Poster vos annonces en ligne",
    },
    {
      picture: <WomanDress />,
      title: "Echanger vos biens et/ou services avec les autres trokeurs",
    },
    {
      picture: <BoyPlant />,
      title: "Convenez par message d’un lieu/horaire pour l’échange",
    },
    {
      picture: <PigMoney />,
      title: "L’application est 100% gratuite",
    },
    {
      picture: <PeopleHeart />,
      title:
        "Vous pouvez également faire un don en consultant les demandes dans la rubrique associations",
    },
  ]);
  return (
    <div className="container_hiw">
      <p className="text_howitworks_hiw">Comment ca marche?</p>
      <div className="wrapper_card_hiw">
        {image.map((img, index) => {
          return (
            <div
              key={index}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  padding: "9px 4px",
                  borderRadius: "5px",
                }}
              >
                {img.picture}
              </div>
              <p className="text_description_picture_hiw">{img.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
