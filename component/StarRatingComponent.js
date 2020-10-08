import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { StarEmptyIcon, StarFullIcon } from "../assets/icon/Icon";

export default function StarRatingComponent({ filled }) {
  const [defaultRating, setDefaultRating] = useState(0);
  const [maxRating, setMaxRating] = useState(4);
  const updateRating = (key) => {
    setDefaultRating(key);
  };
  let stars = [];
  for (let x = 1; x <= maxRating; x++) {
    stars.push(
      <TouchableOpacity
        activeOpacity={0.5}
        key={x}
        onPress={() => updateRating(x)}
      >
        {x <= defaultRating ? (
          <StarFullIcon width={29} height={27} />
        ) : (
          <StarEmptyIcon width={29} height={27} />
        )}
      </TouchableOpacity>
    );
  }
  return (
    <View>
      <View style={{ flexDirection: "row" }}>{stars}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
