import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AddPictureIcon } from "../../assets/icon/Icon";
import colors from "../../constant/colors";
import normalize from "react-native-normalize";

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
    borderWidth: normalize(1),
    width: normalize(56),
    height: normalize(56),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: normalize(4),
  },
});
