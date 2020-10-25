import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StarEmptyIcon, StarFullIcon } from "../assets/icon/Icon";

export default function StarsComponent({ width, height, starsNumber }) {
  const [defaultRating, setDefaultRating] = useState(0);
  const [maxRating, setMaxRating] = useState(4);

  const renderStars = () => {
    const star = [];

    for (let i = 0; i < maxRating; i++) {
      console.log(starsNumber, "starsNumber");
      star.push(
        i < starsNumber ? (
          <StarFullIcon width={width} height={height} />
        ) : (
          <StarEmptyIcon width={width} height={height} />
        )
      );
    }
    return star.map((star, index) => {
      return <View>{star}</View>;
    });
  };
  return <View style={styles.container}>{renderStars()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
