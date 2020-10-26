import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { GreyDotIcon } from "../../assets/icon/Icon.js";
import normalize from "react-native-normalize";
import colors from "../../constant/colors";
import fontStyles from "../../constant/fonts";

export default function CardMessageComponent({
  picture,
  createdAt,
  message,
  sender,
  titleProduct,
}) {
  const displayHour = () => {
    console.log(createdAt, "createdAt message");
    const hour = createdAt.slice(11, 16);
    return hour;
  };

  // STYLES
  const {
    container,
    image,
    name_sender,
    title_product,
    _message,
    expand_clickable_area,
  } = styles;
  return (
    <View style={container}>
      <View style={{ flexDirection: "row" }}>
        <Image style={image} source={{ uri: picture }} />
        <View style={{ marginLeft: 10 }}>
          <Text style={name_sender}>{sender}</Text>
          <Text style={title_product}>{titleProduct}</Text>
          <Text style={_message} numberOfLines={1}>
            {displayHour()} - {message}
          </Text>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.6} hitSlop={expand_clickable_area}>
        <GreyDotIcon />
        <GreyDotIcon />
        <GreyDotIcon />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: normalize(26),
  },
  image: {
    width: normalize(84, "width"),
    height: normalize(68, "height"),
    borderRadius: normalize(4),
  },
  name_sender: {
    fontSize: normalize(12, "fontSize"),
    ...fontStyles.bold,
    lineHeight: normalize(20),
    color: colors.text_description_black,
  },
  title_product: {
    fontSize: normalize(11, "fontSize"),
    ...fontStyles.regular,
    lineHeight: normalize(20),
    color: colors.text_description_black,
  },
  _message: {
    fontSize: 11,
    lineHeight: 20,
    ...fontStyles.regular,
    width: normalize(216, "width"),
    marginTop: normalize(6),
  },
  expand_clickable_area: { top: 10, bottom: 10, left: 10, right: 10 },
});
