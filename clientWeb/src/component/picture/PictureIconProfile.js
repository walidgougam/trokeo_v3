import React from "react";
import { ReactComponent as IconProfileBig } from "../../asset/allSvg/iconProfileBig.svg";
import "./PictureIconProfile.css";

function PictureIconProfile({ width, height, fromCardContactOwner, style }) {
  return (
    <div className="circle_icon_profile_pictureicon" style={style}>
      {!fromCardContactOwner && <IconProfileBig />}
    </div>
  );
}

export default PictureIconProfile;
