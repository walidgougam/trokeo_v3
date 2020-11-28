import React from "react";
import "./CardFollowCategory.scss";

export default function CardFollowCategory({
  title,
  follow,
  index,
  arrayLength,
}) {
  return (
    <div
      className="container_cardfollowcategory"
      style={{
        borderBottom: arrayLength - 1 > index ? "solid 1px #979797" : null,
        marginBottom: arrayLength - 1 > index ? null : 36,
      }}
    >
      <p>{title}</p>
      {follow ? (
        <div className="wrapper_unfollow_cardfollowcategory">
          <p>unfollow</p>
        </div>
      ) : (
        <div className="wrapper_follow_cardfollowcategory">
          <p>follow</p>
        </div>
      )}
    </div>
  );
}
