import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../constant/colors";
import normalize from "react-native-normalize";
import fontStyles from "../../constant/fonts";

export default function BtnHomeToggle({
  changeFocus,
  focus,
  title,
  lengthGoods,
  lengthServices,
  fromScreenWithProduct,
}) {
  const { btn, text_btn } = styles;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={changeFocus}
      style={[
        btn,
        {
          borderBottomWidth: focus ? 2 : null,
          borderBottomColor: focus ? colors.main_green : null,
        },
      ]}
    >
      <Text
        style={[
          text_btn,
          {
            color: focus ? colors.main_green : colors.icon_profile_grey,
          },
        ]}
      >
        {!fromScreenWithProduct
          ? title
          : `${title} ${
              title === "Biens"
                ? lengthGoods
                  ? `(${lengthGoods})`
                  : ""
                : lengthServices
                ? `(${lengthServices})`
                : ""
            }`}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "50%",
    justifyContent: "center",
  },
  text_btn: {
    textAlign: "center",
    fontSize: normalize(16, "fontSize"),
    lineHeight: normalize(20),
    // ...fontStyles.bold,
  },
});
