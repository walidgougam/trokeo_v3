import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
//PICTURE
import {
  ArrowLeftIcon,
  LogoWhiteIcon,
  SearchWhiteIcon,
  NotificationWhiteIcon,
  HeartIcon,
  HeartFullIcon,
} from "../../assets/icon/Icon";
//STYLES
import normalize from "react-native-normalize";
import {Colors} from "../../constant/colors";
import fontStyles from "../../constant/fonts";

export default function HeaderNotification({
  navigation,
  isLogo,
  nothingOnHeader,
  fromDetailsScreen,
}) {
  //STATE
  const [heartFull, setHeartFull] = useState(true);
  //STYLES
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
              activeOpacity={fontStyles.activeOpacity}
              onPress={() => navigation.goBack()}
              hitSlop={expand_clickable_area}
            >
              <ArrowLeftIcon />
            </TouchableOpacity>
          )}
          <View style={wrapper_icon_notification}>
            {fromDetailsScreen ? (
              <TouchableOpacity
                activeOpacity={fontStyles.activeOpacity}
                hitSlop={expand_clickable_area}
                onPress={() => setHeartFull(!heartFull)}
              >
                {heartFull ? (
                  <HeartFullIcon width={normalize(28)} height={normalize(25)} />
                ) : (
                  <HeartIcon />
                )}
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={fontStyles.activeOpacity}
                hitSlop={expand_clickable_area}
                onPress={() =>
                  navigation.navigate("SearchOption", {
                    fromOrganizationScreen: false,
                  })
                }
              >
                <SearchWhiteIcon />
              </TouchableOpacity>
            )}

            <TouchableOpacity
              activeOpacity={fontStyles.activeOpacity}
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
    backgroundColor: Colors.green.main,
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
