import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StarEmptyIcon, StarFullIcon } from "../assets/icon/Icon";

export default function StarsComponent({ width, height }) {
  return (
    <View style={styles.container}>
      <StarFullIcon width={width} height={height} />
      <StarFullIcon width={width} height={height} />
      <StarFullIcon width={width} height={height} />
      <StarFullIcon width={width} height={height} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
