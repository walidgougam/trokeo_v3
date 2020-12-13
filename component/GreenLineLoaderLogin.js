import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {Colors} from "../constant/colors";
import normalize from "react-native-normalize";
import css from "../constant/css";
import { Spacings } from "../constant/layout";

const GreenLineLoaderLogin = (props) => {
  const isFocus = () => {
    switch (props.focus.name) {
      case "Email":
        return 1;
      case "Name":
        return 2;
      case "Picture":
        return 3;
      case "Gender":
        return 4;
    }
  };

  return (
    <View style={styles.wrapper_green_line}>
      <View style={[styles.green_line, { height: 4 }]}></View>
      <View
        style={[
          styles.green_line,
          {
            height: isFocus() == 3 || isFocus() == 4 || isFocus() == 2 ? 4 : 2,
          },
        ]}
      ></View>
      <View
        style={[
          styles.green_line,
          {
            height: isFocus() == 3 || isFocus() == 4 ? 4 : 2,
          },
        ]}
      ></View>
      <View
        style={[
          styles.green_line,
          {
            height: isFocus() == 4 ? 4 : 2,
          },
        ]}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper_green_line: {
    ...css.row_space_between,
    alignItems: "center",
  },
  green_line: {
    backgroundColor: Colors.green.main,
    width: normalize(90, "width"),
    marginTop: normalize(Spacings.XS),
  },
});

export default GreenLineLoaderLogin;
