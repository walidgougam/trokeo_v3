import React from "react";
import "./PasswordSetting.css";
//PICTURE
import { ReactComponent as HidePassword } from "../../../asset/allSvg/hide_password.svg";
import { ReactComponent as WrongPassword } from "../../../asset/allSvg/wrong_password.svg";

export default function PasswordSetting() {
  return (
    <div style={{ width: 344, marginBottom: 40 }}>
      <div className="wrapper_input_passwordsetting">
        <input
          type="text"
          placeholder="Ancien mot de passe"
          style={{ border: "none" }}
        />
        <div style={{ paddingRight: 24 }}>
          <HidePassword />
        </div>
      </div>
      <p className="text_password_forget_passwordsetting">
        Mot de passe oublié
      </p>
      <div className="wrapper_input_passwordsetting">
        <input
          type="text"
          placeholder="Nouveau mot de passe"
          style={{ border: "none" }}
        />
        <div style={{ display: "flex" }}>
          <div>
            <HidePassword />
          </div>
          <div style={{ marginLeft: 13, paddingRight: 15 }}>
            <WrongPassword />
          </div>
        </div>
      </div>
      <p className="text_atleast8_passwordsetting">
        Il doit contenir au moins 8 caractères
      </p>
    </div>
  );
}
