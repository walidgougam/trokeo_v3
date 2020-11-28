import React from "react";
import "./ProfileOption.scss";
import { allOptionsProfile } from "../../Helpers";
import ThumbnailProfile from "../thumbnailProfile/ThumbnailProfile";

function ProfileOption() {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: " 1fr 1fr 1fr",
          gridColumnGap: "20px",
          gridRowGap: "13px",
        }}
      >
        {allOptionsProfile.map((option, index) => {
          return (
            <div
              style={{
                boxShadow: "3px 3px 10px rgba(194, 194, 194, 0.3)",
                width: "234px",
                height: "93px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
              }}
            >
              <div>{option.icon}</div>

              <p style={{ margin: "0px" }}>{option.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProfileOption;
