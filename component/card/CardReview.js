import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
//STYLES
import {Colors, BackgroundColors} from "../../constant/colors";
import fontStyles from "../../constant/fonts";
import normalize from "react-native-normalize";
import { loadFont } from "../../assets/Autre";
//COMPONENT
import StarsComponent from "../StarsComponent";
import PictureProfileComponent from "../../component/picture/PictureProfileComponent";
import { Spacings } from "../../constant/layout";

export default function CardReview({
  review,
  profileName,
  stars,
  profilePicture,
}) {
  useEffect(() => {
    loadFont();
  });
  //STYLES
  const { container, wrapper_comment, _date, text_name, text_review } = styles;
  return (
    <View style={container}>
      <View style={{ flexDirection: "row" }}>
        <View>
          <PictureProfileComponent
            width={51}
            height={54}
            isProductDetail
            userPicture={profilePicture}
          />
        </View>
        <View style={wrapper_comment}>
          <Text style={text_name}>{profileName}</Text>
          <StarsComponent width={21} height={Spacings.L} starsNumber={stars} />
          <Text style={text_review}>{review}</Text>
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
    backgroundColor: BackgroundColors.white.absolute,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: Colors.grey.placeholder_grey,
    borderBottomWidth: 1,
  },
  wrapper_comment: {
    marginLeft: normalize(Spacings.L),
  },
  _date: {
    fontSize: normalize(9, "fontSize"),
    fontFamily: "regular",
    lineHeight: normalize(20),
    color: Colors.grey.icon_profile_grey,
  },
  text_name: {
    fontSize: normalize(11, "fontSize"),
    fontFamily: "semiBold",
    lineHeight: normalize(20),
    color: Colors.black.text_description_black,
  },
  text_review: {
    fontSize: normalize(11, "fontSize"),
    fontFamily: "regular",
    lineHeight: normalize(20),
    color: Colors.grey.placeholder_grey,
  },
});
