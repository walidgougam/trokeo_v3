import React, { useState } from "react";
import Navbar from "../../component/navbar/Navbar";
import "./Register.css";
import BtnFinish from "../../component/btn/BtnFinish";
import { registerApi } from "../../API";
import PictureIconProfile from "../../component/picture/PictureIconProfile";
import Input from "../../component/input/Input";
import InputSelect from "../../component/inputSelect/InputSelect";

export default function Register({ history, location }) {
  // STATE
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [female, setFemale] = useState(false);

  const handleRegister = () => {
    registerApi(email, password, firstName, lastName, female, () => {
      return history.push("/");
    });
  };
  return (
    <>
      <Navbar location={location} />
      <div className="container_register">
        <div className="wrapper_register">
          <p className="text_create_account_register">Créez un compte</p>
          <PictureIconProfile width={99} height={99} />
          <p className="text_add_picture_register">Ajouter une photo</p>
          <Input placeholder="Prénom" marginBottom={16} />
          <Input placeholder="Nom" marginBottom={16} />
          <Input placeholder="Email" marginBottom={16} />
          <Input placeholder="Mot de passe" marginBottom={6} />
          <p className="text_atleast8_register">
            Il doit contenir au moins 8 caractères.
          </p>
          <Input placeholder="Mot de passe" marginBottom={12} />
          <p className="text_you_are_register">Vous êtes</p>
          <InputSelect
            onChange={(e) =>
              e.target.value === "femme" ? setFemale(true) : setFemale(false)
            }
          />
          <BtnFinish titleBtn="Terminer" onClick={() => handleRegister()} />
        </div>
      </div>
    </>
  );
}
