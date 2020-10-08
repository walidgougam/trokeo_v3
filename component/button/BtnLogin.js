import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import colors from "../../constant/colors";
import css from "../../constant/css";

export default function BtnLogin({
  backgroundColor,
  color,
  title,
  icon,
  press,
}) {
  const { btn, text_btn } = styles;
  return (
    <TouchableOpacity
      onPress={press}
      activeOpacity={0.6}
      style={[btn, { backgroundColor: backgroundColor }]}
    >
      {icon}
      <Text style={[text_btn, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: normalize(52, "height"),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: normalize(68),
    borderRadius: normalize(26),
    marginBottom: normalize(25),
  },
  text_btn: {
    ...css.Btn_login,
    marginLeft: normalize(13),
    color: colors.text_google_grey,
  },
});
