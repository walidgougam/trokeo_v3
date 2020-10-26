import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
import colors from "../../constant/colors";
import css from "../../constant/css";
import fontStyles from "../../constant/fonts";
import normalize from "react-native-normalize";

export default function CardSelectCategory({ title, value, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.wrapper_card}>
        <Text style={styles.text_category}>{title}</Text>
        <RadioButton value={title} status={value ? "checked" : "unchecked"} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper_card: {
    ...css.row_space_between,
    ...css.border_bottom,
    alignItems: "center",
    paddingVertical: normalize(5),
    paddingHorizontal: normalize(18),
  },
  text_category: {
    fontSize: normalize(14, "fontSize"),
    ...fontStyles.semiBold,
    lineHeight: normalize(20),
    color: colors.text_description_black,
  },
});
