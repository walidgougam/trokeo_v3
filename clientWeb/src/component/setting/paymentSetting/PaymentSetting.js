import React from "react";
import "./PaymentSetting.css";
//PICTURE
import NoAdvertising from "../../../asset/allSvg/noAdvertising.png";
import { ReactComponent as PhoneNotification } from "../../../asset/allSvg/phoneNotification.svg";
import { ReactComponent as AddPicture } from "../../../asset/allSvg/addPicture.svg";
//COMPONENT
import BtnFinish from "../../btn/BtnFinish";
import CardSetting from "../cardSetting/CardSetting";

export default function PaymentSetting() {
  return (
    <div>
      <p className="text_visibility_paymentsetting">
        Gagnez en visibilité et multipliez vos chances de troquer !
      </p>
      <div className="wrapper_card_paymentsetting">
        <CardSetting
          title="Supprimer les publicités"
          picture={
            <img src={NoAdvertising} style={{ width: 163, height: 162 }} />
          }
          description="Pour un meilleur confort de navigation "
        />
        <CardSetting
          title="Ajouter plus des photos"
          picture={<AddPicture />}
          description="Mettez en valeur votre annonce pour une annonce optimale !"
        />
        <CardSetting
          title="Ne rien louper "
          picture={<PhoneNotification />}
          description=" Suivre des annonces, être alerter pour une recherche "
        />
      </div>
      <div className="wrapper_btn_price_paymentsetting">
        <BtnFinish
          width={324}
          height={47}
          fontSize={16}
          titleBtn="2,99€/mois"
        />
        <BtnFinish width={324} height={47} fontSize={16} titleBtn="18,99€/an" />
      </div>
    </div>
  );
}
