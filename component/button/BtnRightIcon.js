import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
//STYLES
import normalize from "react-native-normalize";
import fontStyles from "../../constant/fonts";
//PICTURE
import { RightIcon } from "../../assets/icon/Icon";
import { Spacings } from "../../constant/layout";

export default function BtnRightIcon({
  navigation,
  title,
  target,
  userData,
  profileId,
  disabled,
}) {
  const goProfileDetails = (target, data) => {
    return navigation.navigate(target, { userData: data, profileId });
  };
  //STYLES
  const { wrapper_product_inline, text_product_inline } = styles;
  return disabled ? (
    <View opacity={0.3} style={[wrapper_product_inline]}>
      <Text style={text_product_inline}>{title}</Text>
      <View style={{ marginRight: Spacings.XS }}>
        <RightIcon />
      </View>
    </View>
  ) : (
    <TouchableOpacity
      activeOpacity={fontStyles.activeOpacity}
      style={[wrapper_product_inline]}
      onPress={() => goProfileDetails(target, userData)}
    >
      <Text style={text_product_inline}>{title}</Text>
      <View style={{ marginRight: Spacings.XS }}>
        <RightIcon />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper_product_inline: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: normalize(50, "borderRadius"),
    width: normalize(128, "width"),
    height: normalize(30, "height"),
    justifyContent: "space-around",
    alignItems: "center",
  },
  text_product_inline: {
    fontSize: normalize(10, "fontSize"),
    textAlign: "center",
    width: "100%",
    // en attente de plus d'elements sur le css de marion
  },
});
