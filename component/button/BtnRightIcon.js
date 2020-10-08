import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import normalize from "react-native-normalize";
import { RightIcon } from "../../assets/icon/Icon";

export default function BtnRightIcon({ navigation, title, target, userData }) {
  const goProfileDetails = (target, data) => {
    return navigation.navigate(target, { userData: data });
  };
  const { wrapper_product_inline, text_product_inline } = styles;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={wrapper_product_inline}
      onPress={() => goProfileDetails(target, userData)}
    >
      <Text style={text_product_inline}>{title}</Text>
      <View style={{ marginRight: 10 }}>
        <RightIcon />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper_product_inline: {
    flexDirection: "row",
    borderWidth: normalize(1),
    borderColor: "black",
    borderRadius: normalize(50, "borderRadius"),
    width: normalize(128, "width"),
    height: normalize(30, "height"),
    justifyContent: "space-around",
    alignItems: "center",
  },
  text_product_inline: {
    fontSize: normalize(8, "fontSize"),
    textAlign: "center",
    width: "100%",
    // en attente de plus d'elements sur le css de marion
  },
});
