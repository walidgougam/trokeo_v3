import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import css from "../../constant/css";

export default function RadioBtnComponent({ title, status, value, onPress }) {
  return (
    <View style={styles.btn}>
      <RadioButton value={value} status={status} onPress={onPress} />
      <View>
        <Text style={styles.text_description}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    alignItems: "center",
  },
  text_description: {
    ...css.text_description,
    marginBottom: 0,
  },
});
