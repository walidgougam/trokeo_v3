import React from "react";
import "./Profile.scss";
//COMPONENT
import ProfileOption from "../../component/profileOption/ProfileOption";
import Navbar from "../../component/navbar/Navbar";
import HeaderGreen from "../../component/headerGreen/HeaderGreen";
import ThumbnailProfile from "../../component/thumbnailProfile/ThumbnailProfile";

function Profile({ history }) {
  return (
    <div style={{ backgroundColor: "hsl(0, 0%, 98%)" }}>
      <Navbar />
      <HeaderGreen />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ThumbnailProfile history={history} />
      </div>

      <div
        style={{
          paddingRight: "139px",
          paddingLeft: "139px",
        }}
      >
        <ProfileOption />
      </div>
    </div>
  );
}

export default Profile;
