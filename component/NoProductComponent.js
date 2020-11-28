import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
//STYLE
import colors from "../constant/colors";
import normalize from "react-native-normalize";
import css from "../constant/css";
import { loadFont } from "../assets/Autre";
//PICTURE
import { NoProductImage } from "../assets/image/images";
//COMPONENT
import BtnBlueAction from "./button/BtnBlueAction";
import HeaderFilterComponent from "../component/header/HeaderFilterComponent";

export default function NoProductComponent() {
  useEffect(() => {
    loadFont();
  });
  //STYLES
  const { _container } = styles;
  return (
    <View style={_container}>
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
    fontFamily: "regular",
    color: colors.text_description_black,
  },
});
