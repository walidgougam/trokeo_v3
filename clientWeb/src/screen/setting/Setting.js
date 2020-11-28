import React, { useState } from "react";
import "./Setting.css";

//COMPONENT
import HeaderGreen from "../../component/headerGreen/HeaderGreen";
import Navbar from "../../component/navbar/Navbar";
import BtnSetting from "../../component/btnSetting/BtnSetting";
import Footer from "../../component/footer/Footer";
import PaymentSetting from "../../component/setting/paymentSetting/PaymentSetting";
import PasswordSetting from "../../component/setting/passwordSetting/PasswordSetting";
import NotificationSetting from "../../component/setting/notificationSetting/NotificationSetting";

export default function Setting({ location }) {
  const [activeNotification, setActiveNotification] = useState(false);
  const [activePersonalData, setActivePersonalData] = useState(false);
  const [activePayment, setActivePayment] = useState(false);
  const [activePassword, setActivePassword] = useState(false);
  const [activeDeconnection, setActiveDeconnection] = useState(false);

  return (
    <div>
      <Navbar location={location} />
      <HeaderGreen title="Paramètres" />
      <div className="container_central_setting">
        <BtnSetting
          active={activeNotification}
          onClick={() => setActiveNotification(!activeNotification)}
          titleBtn="Notifications"
          component={<NotificationSetting />}
        />
        <BtnSetting
          active={activePersonalData}
          onClick={() => setActivePersonalData(!activePersonalData)}
          titleBtn="Données personnelles"
          paddingTop={28}
        />
        <BtnSetting
          active={activePassword}
          onClick={() => setActivePassword(!activePassword)}
          titleBtn="Mot de passe"
          paddingTop={28}
          component={<PasswordSetting />}
        />
        <BtnSetting
          active={activePayment}
          onClick={() => setActivePayment(!activePayment)}
          titleBtn="Paiements"
          paddingTop={28}
          component={<PaymentSetting />}
        />
        <BtnSetting
          active={activeDeconnection}
          onClick={() => setActiveDeconnection(!activeDeconnection)}
          titleBtn="Déconnection"
          paddingTop={28}
        />
      </div>
      <Footer />
    </div>
  );
}
