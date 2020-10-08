import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ArrowLeftIcon } from "../../assets/icon/Icon";
import normalize from "react-native-normalize";
import colors from "../../constant/colors";
import { WhiteDotIcon } from "../../assets/icon/Icon";
import fontStyles from "../../constant/fonts";

export default function HeaderComponent({ navigation, title, message, data }) {
  const {
    _header,
    wrapper_header_title,
    text_title,
    expand_clickable_area,
  } = styles;
  return (
    <View style={_header}>
      <View style={wrapper_header_title}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.goBack()}
            hitSlop={expand_clickable_area}
          >
            <ArrowLeftIcon />
          </TouchableOpacity>
          <Text style={text_title}>{title}</Text>
        </View>
        {message && (
          <TouchableOpacity activeOpacity={0.6}>
            <WhiteDotIcon />
            <WhiteDotIcon />
            <WhiteDotIcon />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  _header: {
    backgroundColor: colors.main_green,
    height: normalize(70, "height"),
    justifyContent: "flex-end",
  },
  wrapper_header_title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: normalize(13),
    marginHorizontal: normalize(11),
  },
  text_title: {
    fontSize: normalize(18, "fontSize"),
    ...fontStyles.bold,
    color: colors.text_white,
    marginLeft: normalize(27),
  },
  expand_clickable_area: { top: 10, bottom: 10, left: 10, right: 10 },
});
