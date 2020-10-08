import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AddPictureIcon } from "../../assets/icon/Icon";
import colors from "../../constant/colors";

export default function CardAddPictureIcon() {
  return (
    <View style={styles.container}>
      <AddPictureIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.btn_action,
    borderStyle: "solid",
    borderWidth: 1,
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});
