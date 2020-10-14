import React from "react";
import { View, Text, StyleSheet } from "react-native";
import GreenLineLoaderLogin from "./GreenLineLoaderLogin";
import HeaderComponent from "./header/HeaderComponent";
import colors from "../constant/colors";
import css from "../constant/css";
import normalize from "react-native-normalize";

export default function BackgroundComponent({
  navigation,
  route,
  children,
  title,
  noGreenLine,
}) {
  return (
    <View style={styles.container}>
      <HeaderComponent title={title} navigation={navigation} />
      {noGreenLine ? null : <GreenLineLoaderLogin focus={route} />}
      <View style={styles.wrapper}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  wrapper: {
    flex: 1,
    justifyContent: "space-between",
    marginVertical: normalize(45),
  },
});
