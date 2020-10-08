import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  ArrowLeftIcon,
  LogoWhiteIcon,
  SearchWhiteIcon,
  NotificationWhiteIcon,
  HeartIcon,
} from "../../assets/icon/Icon";
import normalize from "react-native-normalize";
import colors from "../../constant/colors";

export default function HeaderNotification({
  navigation,
  isLogo,
  nothingOnHeader,
  fromDetailsScreen,
}) {
  const {
    _header,
    wrapper_header_title,
    wrapper_icon_notification,
    expand_clickable_area,
  } = styles;
  return (
    <View style={_header}>
      {!nothingOnHeader && (
        <View style={wrapper_header_title}>
          {isLogo ? (
            <LogoWhiteIcon width={normalize(84)} height={normalize(31)} />
          ) : (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.goBack()}
              hitSlop={expand_clickable_area}
            >
              <ArrowLeftIcon />
            </TouchableOpacity>
          )}
          <View style={wrapper_icon_notification}>
            <TouchableOpacity
              activeOpacity={0.6}
              hitSlop={expand_clickable_area}
              onPress={() =>
                fromDetailsScreen
                  ? console.log("coeur")
                  : navigation.navigate("SearchOption", {
                      fromOrganizationScreen: false,
                    })
              }
            >
              {fromDetailsScreen ? <HeartIcon /> : <SearchWhiteIcon />}
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              hitSlop={expand_clickable_area}
              style={{ marginLeft: normalize(20) }}
            >
              <NotificationWhiteIcon />
            </TouchableOpacity>
          </View>
        </View>
      )}
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
    marginBottom: normalize(13),
    marginHorizontal: normalize(21),
    justifyContent: "space-between",
  },
  wrapper_icon_notification: {
    flexDirection: "row",
  },
  expand_clickable_area: { top: 10, bottom: 10, left: 10, right: 10 },
});
