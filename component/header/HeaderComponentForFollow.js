import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import normalize from "react-native-normalize";
import colors from "../../constant/colors";
import { WhiteDotIcon, ArrowLeftIcon } from "../../assets/icon/Icon";
import fontStyles from "../../constant/fonts";
import axios from "axios";
import { IOS_URL, ANDROID_URL } from "../../API";

export default function HeaderComponentForFollow({
  navigation,
  title,
  message,
  data,
  allFollowRules,
  from,
  userId,
}) {
  const goBackFunction = async () => {
    navigation.goBack();
    if (from === "good") {
      await axios({
        method: "POST",
        url:
          Platform.OS === "ios"
            ? `${IOS_URL}/user/editcategorygoodfollow`
            : `${ANDROID_URL}/user/editcategorygoodfollow`,
        data: { userId, categoryGoodsFollow: allFollowRules },
      })
        .then((res) => {
          console.log("result on follow good ");
        })
        .catch((err) => {
          console.log(err, "error on follow good");
        });
    } else {
      await axios({
        method: "POST",
        url:
          Platform.OS === "ios"
            ? `${IOS_URL}/user/editcategoryservicefollow`
            : `${ANDROID_URL}/user/editcategoryservicefollow`,
        data: { userId, categoryServicesFollow: allFollowRules },
      })
        .then((res) => {
          console.log("result follow service ");
        })
        .catch((err) => {
          console.log(err, "error on follow service");
        });
    }
  };

  //STYLES
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
            onPress={() => goBackFunction()}
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
    // ...fontStyles.bold,
    color: colors.text_white,
    marginLeft: normalize(27),
  },
  expand_clickable_area: { top: 10, bottom: 10, left: 10, right: 10 },
});
