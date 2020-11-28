import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
//PICTURE
import {
  ArrowLeftIcon,
  LogoGreenIcon,
  SearchGreyIcon,
  NotificationGreyIcon,
} from "../../assets/icon/Icon";
//STYLES
import normalize from "react-native-normalize";
import colors from "../../constant/colors";
import fontStyles from "../../constant/fonts";

export default function HeaderOrganization({ navigation, isLogo }) {
  const goSearchProduct = () => {
    return navigation.navigate("SearchOption", {
      fromOrganizationScreen: true,
    });
  };
  //STYLES
  const {
    _header,
    wrapper_header_title,
    wrapper_icon_notification,
    expand_clickable_area,
  } = styles;
  return (
    <View style={_header}>
      <View style={wrapper_header_title}>
        {isLogo ? (
          <LogoGreenIcon
            width={normalize(84, "width")}
            height={normalize(31, "height")}
          />
        ) : (
          <TouchableOpacity
            activeOpacity={fontStyles.activeOpacity}
            hitSlop={expand_clickable_area}
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon />
          </TouchableOpacity>
        )}
        <View style={wrapper_icon_notification}>
          <TouchableOpacity
            activeOpacity={fontStyles.activeOpacity}
            hitSlop={expand_clickable_area}
            onPress={() => goSearchProduct()}
          >
            <SearchGreyIcon />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={fontStyles.activeOpacity}
            hitSlop={expand_clickable_area}
            style={{ marginLeft: normalize(20) }}
          >
            <NotificationGreyIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  _header: {
    backgroundColor: colors.background_white,
    height: normalize(70, "height"),
    justifyContent: "flex-end",
  },
  wrapper_header_title: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: normalize(13),
    marginHorizontal: normalize(21),
    justifyContent: "space-between",
  },
  wrapper_icon_notification: {
    flexDirection: "row",
  },
  expand_clickable_area: { top: 10, bottom: 10, left: 10, right: 10 },
});
