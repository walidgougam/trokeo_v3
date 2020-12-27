import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Context as AuthContext } from "../../context/AuthContext";
import { useIsFocused } from "@react-navigation/native";
//API
import axios from "axios";
import { IOS_URL, ANDROID_URL } from "../../API/API";
import {
  followGoodsCategoryApi,
  followServicesCategoryApi,
} from "../../API/ProductApi";
//STYLE
import normalize from "react-native-normalize";
import {Colors, BackgroundColors} from "../../constant/colors";
import fontStyles from "../../constant/fonts";
import { loadFont } from "../../assets/Autre";
//PICTURE
import { WhiteDotIcon, ArrowLeftIcon } from "../../assets/icon/Icon";
import { Spacings } from "../../constant/layout";

export default function HeaderComponentForFollow({
  navigation,
  title,
  message,
  data,
  allFollowRules,
  from,
  userId,
}) {
  // CONTEXT
  const { state, getSpecificUserContext } = useContext(AuthContext);
  // FOCUS ON SCREEN
  const isFocuser = useIsFocused();

  useEffect(() => {
    loadFont();
  });

  useEffect(() => {
    (async () => {
      let followGoodsCategory = await followGoodsCategoryApi();
      if (followGoodsCategory) {
        console.log(followGoodsCategory, "bien sur que je follow");
      }
    })();
  }, []);

  const goBackFunction = async () => {
    navigation.goBack();
    if (from === "good") {
      return followGoodsCategoryApi(
        userId,
        (categoryGoodsFollow = allFollowRules)
      );
    } else {
      return followServicesCategoryApi(
        userId,
        (categoryServicesFollow = allFollowRules)
      );
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
            activeOpacity={fontStyles.activeOpacity}
            onPress={() => goBackFunction()}
            hitSlop={expand_clickable_area}
          >
            <ArrowLeftIcon />
          </TouchableOpacity>
          <Text style={text_title}>{title}</Text>
        </View>
        {message && (
          <TouchableOpacity activeOpacity={fontStyles.activeOpacity}>
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
    backgroundColor: BackgroundColors.green.main,
    height: normalize(70, "height"),
    justifyContent: "flex-end",
  },
  wrapper_header_title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: normalize(Spacings.S),
    marginHorizontal: normalize(Spacings.XS),
  },
  text_title: {
    fontSize: normalize(18, "fontSize"),
    fontFamily: "bold",
    color: Colors.white.absolute,
    marginLeft: normalize(27),
  },
  expand_clickable_area: { top: 10, bottom: 10, left: 10, right: 10 },
});
