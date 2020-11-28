import React from "react";
import { Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { RightIcon, PenEditProfileIcon } from "../../assets/icon/Icon";
import normalize from "react-native-normalize";
import css from "../../constant/css";
import fontStyles from "../../constant/fonts";

export default function CardWithRightIcon({
  title,
  onPress,
  fromSeeProfileCard,
}) {
  const { container, _title } = styles;
  return (
    <TouchableOpacity
      activeOpacity={fontStyles.activeOpacity}
      style={[
        container,
        Platform.OS === "android" && {
          borderBottomColor: "#979797",
          borderBottomWidth: 1,
        },
      ]}
      onPress={onPress}
    >
      <Text style={_title}>{title}</Text>
      {fromSeeProfileCard ? <PenEditProfileIcon /> : <RightIcon />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    ...css.border_bottom,
    justifyContent: "space-between",
    paddingHorizontal: normalize(18),
    paddingVertical: normalize(14),
  },
  _title: {
    fontSize: normalize(14, "fontSize"),
    fontFamily: "semiBold",
  },
});
