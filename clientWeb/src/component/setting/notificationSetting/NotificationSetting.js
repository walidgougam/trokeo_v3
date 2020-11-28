import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";
import "./NotificationSetting.css";
import { createMuiTheme } from "@material-ui/core/styles";

export default function NotificationSetting() {
  const [checked, setChecked] = useState(true);
  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <p className="title_notification_notificationsetting">
        Notifications push
      </p>
      <p className="description_notification_notificationsetting">
        Sélectionnez les notifications à afficher sur votre téléphone.
      </p>
      <div className="wrapper_notification_line_notificationsetting">
        <p>Mises à jour</p>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={checked} onChange={toggleChecked} />}
          />
        </FormGroup>
      </div>
      <div className="wrapper_notification_line_notificationsetting">
        <p>Expiration de mes annonces</p>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={checked} onChange={toggleChecked} />}
          />
        </FormGroup>
      </div>
      <div className="wrapper_notification_line_notificationsetting">
        <p>Réservation d’un bien</p>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={checked} onChange={toggleChecked} />}
          />
        </FormGroup>
      </div>
      <div className="wrapper_notification_line_notificationsetting">
        <p>Nouveaux messages sur ma messagerie</p>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={checked} onChange={toggleChecked} />}
          />
        </FormGroup>
      </div>
      <p style={{ borderTop: "solid 1px #979797", marginBottom: 0 }}></p>
      <p
        className="title_notification_notificationsetting"
        style={{ marginTop: 30 }}
      >
        Notifications par e-mail
      </p>
      <p className="description_notification_notificationsetting">
        Sélectionnez les notifications à afficher dans votre boite mail.
      </p>
      <div className="wrapper_notification_line_notificationsetting">
        <p>Mises à jour</p>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={checked} onChange={toggleChecked} />}
          />
        </FormGroup>
      </div>
      <div className="wrapper_notification_line_notificationsetting">
        <p>Expiration de mes annonces</p>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={checked} onChange={toggleChecked} />}
          />
        </FormGroup>
      </div>
      <div className="wrapper_notification_line_notificationsetting">
        <p>Réservation d’un bien</p>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={checked} onChange={toggleChecked} />}
          />
        </FormGroup>
      </div>
      <div
        className="wrapper_notification_line_notificationsetting"
        style={{ paddingBottom: "24px" }}
      >
        <p>Nouveaux messages sur ma messagerie</p>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={checked} onChange={toggleChecked} />}
          />
        </FormGroup>
      </div>
    </div>
  );
}
