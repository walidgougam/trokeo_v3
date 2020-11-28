import React from "react";
import "./ThumbnailProfile.scss";
import PictureIconProfile from "../picture/PictureIconProfile";
import { ReactComponent as Star } from "../../asset/allSvg/star_full.svg";
import { ReactComponent as ArrowRight } from "../../asset/allSvg/arrow_right.svg";

function ThumbnailProfile({ history }) {
  return (
    <div className="container_thumbnailprofile">
      <div className="wrapper_top_thumbnail_thumbnailprofile">
        <div className="wrapper_left_thumbnailprofile">
          <PictureIconProfile style={{ width: 89, height: 86 }} />
          <div className="wrapper_name_star_thumbnailProfile">
            <p className="name_thumbnailprofile">name</p>
            <p className="member_since_thumbnailprofile">
              membre depuis le 08/01/2020
            </p>
            <div style={{ marginTop: 4 }}>
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>
        </div>
        <div className="wrapper_right_thumbnailprofile">
          <p className="text_city_thumbnailprofile">haut de seine france</p>
          <div
            className="wrapper_review_thumbnailprofile"
            onPress={() => history.push("/review/2")}
          >
            <p>voir les avis</p>
            <div>
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper_bottom_thumbnail_thumbnailprofile">
        <p className="text_about_thumbnailprofile">A propos</p>
        <p className="text_description_thumbnailprofile">
          Bonjour je suis dispo pour vous aidez pour vos tache bricolage,
          montage, peinture et demenagement et vous pouvez voir mes avis.
        </p>
      </div>
    </div>
  );
}

export default ThumbnailProfile;
