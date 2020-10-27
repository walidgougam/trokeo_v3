import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NoProductImage } from "../assets/image/images";
import colors from "../constant/colors";
import normalize from "react-native-normalize";
import css from "../constant/css";

import BtnBlueAction from "./button/BtnBlueAction";
import HeaderFilterComponent from "../component/header/HeaderFilterComponent";

export default function NoProductComponent() {
  //STYLES
  const { _container } = styles;
  return (
    <View style={_container}>
      <HeaderFilterComponent />
      <View style={{ marginTop: 77 }}>
        <NoProductImage />
      </View>
      <View
        style={{ marginTop: 18, paddingHorizontal: 45, alignItems: "center" }}
      >
        <Text>Désolé, pour le moment, aucune demande</Text>
        <Text>n’a été mise en ligne</Text>
        <View style={{ marginTop: normalize(25) }}>
          <BtnBlueAction
            color={colors.text_white}
            backgroundColor={colors.btn_action}
            title="Relancer"
            width={normalize(142, "width")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    alignItems: "center",
    // paddingTop: normalize(61),
  },
  text: {
    ...css.text_title,
    color: colors.text_description_black,
  },
});
