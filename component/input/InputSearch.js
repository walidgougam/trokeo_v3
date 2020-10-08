import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { SearchSmallIcon } from "../../assets/icon/Icon";
import colors from "../../constant/colors";
import normalize from "react-native-normalize";

export default function InputSearch({ placeholder }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <SearchSmallIcon />
      </View>
      <View style={{ marginLeft: normalize(25) }}>
        <TextInput
          placeholder={placeholder}
          style={styles.placeholder}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background_input_grey,
    width: "100%",
    flexDirection: "row",
    height: normalize(45),
    borderRadius: 2,
    alignItems: "center",
  },
  logo: {
    marginLeft: normalize(13),
  },
  placeholder: {
    fontSize: normalize(14, "fontSize"),
  },
});
