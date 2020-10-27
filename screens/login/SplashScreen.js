import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../constant/colors";
import { LogoTrokeo } from "../../assets/image/images";
import normalize from "react-native-normalize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);
  });

  // STYLES
  const { container, _logo, _text } = styles;
  return (
    <View style={container}>
      <View style={_logo}>
        <LogoTrokeo width={normalize("266")} height={normalize("101")} />
        <Text style={_text}>Le troc participatif et solidaire</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main_green,
    alignItems: "center",
  },
  _logo: {
    marginTop: hp("29.8%"),
  },
  _text: {
    fontSize: normalize(22, "fontSize"),
    lineHeight: normalize(28),
    color: colors.text_white,
    marginTop: normalize(41),
  },
});
