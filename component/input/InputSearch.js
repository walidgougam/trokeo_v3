import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { SearchSmallIcon } from "../../assets/icon/Icon";
//STYLES
import {Colors, BackgroundColors} from "../../constant/colors";
import normalize from "react-native-normalize";

export default function InputSearch({ placeholder }) {
  //STYLES
  const { _container, _logo, _placeholder } = styles;
  return (
    <View style={_container}>
      <View style={_logo}>
        <SearchSmallIcon />
      </View>
      <View style={{ marginLeft: normalize(25) }}>
        <TextInput
          placeholder={placeholder}
          style={_placeholder}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  _container: {
    backgroundColor: BackgroundColors.grey.input,
    width: "100%",
    flexDirection: "row",
    height: normalize(45),
    borderRadius: 2,
    alignItems: "center",
  },
  _logo: {
    marginLeft: normalize(13),
  },
  _placeholder: {
    fontSize: normalize(14, "fontSize"),
  },
});
