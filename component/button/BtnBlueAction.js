import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../constant/colors";
import normalize from "react-native-normalize";
import css from "../../constant/css";

export default function BtnBlueAction({
  onPress,
  color,
  title,
  backgroundColor,
  marginBottom,
  width,
}) {
  const { _btn, _title } = styles;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        _btn,
        {
          backgroundColor,
          width,
        },
      ]}
      onPress={onPress}
    >
      <Text style={[_title, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  _btn: {
    height: normalize(42, "height"),
    justifyContent: "center",
    borderRadius: normalize(26, "borderRadius"),
  },
  _title: {
    ...css.btn_login, ////// "open sans semi bold " if from  gainvisibilityscreen
    textAlign: "center",
  },
});
