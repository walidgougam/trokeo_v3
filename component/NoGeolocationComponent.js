import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
//STYLES
import {Colors} from "../constant/colors";
import normalize from "react-native-normalize";
import css from "../constant/css";
import fontStyles from "../constant/fonts";
import { loadFont } from "../assets/Autre";
//COMPONENT
import BtnBlueAction from "./button/BtnBlueAction";
//PICTURE
import { MapGeolocation } from "../assets/image/images";

export default function NoGeolocationComponent({ getLocation }) {
  useEffect(() => {
    loadFont();
  });
  //STYLES
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
          onPress={getLocation}
          backgroundColor={Colors.btn_action}
          color={Colors.white.absolute}
          title="Activer la géolocalisation"
        />
      </View>
      <TouchableOpacity
        style={wrapper_city}
        activeOpacity={fontStyles.activeOpacity}
      >
        <Text style={text_city}>Saisir une ville</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: normalize(480),
    alignItems: "center",
    justifyContent: "center",
  },
  _text: {
    ...css.text_title,
    fontFamily: "regular",
    marginBottom: normalize(32),
  },
  _map: {
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
    fontFamily: "regular",
    textDecorationLine: "underline",
    color: Colors.btn_action,
  },
});
