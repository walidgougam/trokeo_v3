import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StarsComponent from "../StarsComponent";
import PictureProfileComponent from "../../component/picture/PictureProfileComponent";
import colors from "../../constant/colors";
import fontStyles from "../../constant/fonts";
import normalize from "react-native-normalize";

export default function CardReview() {
  const { container, wrapper_comment, _date, text_name, text_review } = styles;
  return (
    <View style={container}>
      <View style={{ flexDirection: "row" }}>
        <View>
          <PictureProfileComponent width={51} height={54} isProductDetail />
        </View>
        <View style={wrapper_comment}>
          <Text style={text_name}>name</Text>
          <StarsComponent width={21} height={18} />
          <Text style={text_review}>Review</Text>
        </View>
      </View>
      <Text style={_date}>`il y a createdAt`</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: normalize(16),
    marginRight: normalize(12),
    paddingVertical: normalize(20),
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: colors.placeholder_grey,
    borderBottomWidth: 1,
  },
  wrapper_comment: {
    marginLeft: normalize(18),
  },
  _date: {
    fontSize: normalize(9, "fontSize"),
    ...fontStyles.regular,
    lineHeight: normalize(20),
    color: colors.icon_profile_grey,
  },
  text_name: {
    fontSize: normalize(11, "fontSize"),
    ...fontStyles.semiBold,
    lineHeight: normalize(20),
    color: colors.text_description_black,
  },
  text_review: {
    fontSize: normalize(11, "fontSize"),
    ...fontStyles.regular,
    lineHeight: normalize(20),
    color: colors.placeholder_grey,
  },
});
