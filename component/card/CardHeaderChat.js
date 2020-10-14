import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import colors from "../../constant/colors";
import { PositionIcon } from "../../assets/icon/Icon";
import fontStyles from "../../constant/fonts";

export default function CardHeaderChat({ productPicture, titleProduct }) {
  // STYLES
  const {
    container,
    _image,
    wrapper_title,
    title_product,
    wrapper_localisation,
    _localisation,
  } = styles;
  return (
    <View style={container}>
      {console.log(
        productPicture,
        "-----------product picture------------------"
      )}
      <Image
        style={_image}
        source={{
          uri: productPicture,
        }}
      />
      <View style={wrapper_title}>
        <Text style={title_product}>{titleProduct}</Text>
        <View style={wrapper_localisation}>
          <PositionIcon />
          <Text style={_localisation}>5.8 km</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: normalize(60, "height"),
    flexDirection: "row",
    borderBottomColor: colors.border_color,
    borderBottomWidth: 1,
    alignItems: "center",
    paddingHorizontal: 17,
  },
  _image: {
    width: normalize(53, "width"),
    height: normalize(43, "height"),
    borderRadius: normalize(4),
  },
  wrapper_title: {
    marginLeft: normalize(9),
  },
  title_product: {
    fontSize: normalize(11, "fontSize"),
    ...fontStyles.regular,
    lineHeight: normalize(20),
    color: colors.background_reservation_grey,
  },
  wrapper_localisation: {
    flexDirection: "row",
    alignItems: "center",
  },
  _localisation: {
    fontSize: normalize(9, "fontSize"),
    ...fontStyles.regular,
    lineHeight: normalize(20),
    color: colors.likes_grey,
    marginLeft: normalize(4),
  },
});
