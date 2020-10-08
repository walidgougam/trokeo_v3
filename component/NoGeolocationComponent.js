import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MapGeolocation } from "../assets/image/images";
import colors from "../constant/colors";
import normalize from "react-native-normalize";
import fontStyles from "../constant/fonts";

import BtnBlueAction from "./button/BtnBlueAction";
import css from "../constant/css";

export default function NoGeolocationComponent() {
  const {
    container,
    _text,
    _map,
    wrapper_btn,
    wrapper_city,
    text_city,
  } = styles;
  return (
    <View style={container}>
      <Text style={_text}>Trouvez des annonces près de chez vous </Text>
      <View style={_map}>
        <MapGeolocation />
      </View>
      <View style={wrapper_btn}>
        <BtnBlueAction
          backgroundColor={colors.btn_action}
          color={colors.text_white}
          title="Activer la géolocalisation"
        />
      </View>
      <TouchableOpacity style={wrapper_city} activeOpacity={0.7}>
        <Text style={text_city}>Saisir une ville</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    ...css.text_title,
    marginTop: normalize(111),
    marginBottom: normalize(32),
  },
  map: {
    marginBottom: normalize(31),
  },
  wrapper_btn: {
    width: normalize(236, "width"),
  },
  wrapper_city: {
    marginTop: normalize(26),
  },
  text_city: {
    ...css.text_title,
    textDecorationLine: "underline",
    color: colors.btn_action,
  },
});
