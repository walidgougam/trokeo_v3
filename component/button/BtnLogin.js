import React, { useEffect } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
//STYLES
import normalize from "react-native-normalize";
import {Colors} from "../../constant/colors";
import css from "../../constant/css";
import fontStyles from "../../constant/fonts";
import { loadFont } from "../../assets/Autre";
import { Spacings } from "../../constant/layout";

export default function BtnLogin({
  backgroundColor,
  color,
  title,
  icon,
  press,
}) {
  useEffect(() => {
    loadFont();
  });
  //STYLES
  const { btn, text_btn } = styles;
  return (
    <TouchableOpacity
      onPress={press}
      activeOpacity={fontStyles.activeOpacity}
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
    fontFamily: "regular",
    marginLeft: normalize(Spacings.S),
    color: Colors.grey.text_google_grey,
  },
});
