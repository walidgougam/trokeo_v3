import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CrossWhiteIcon } from "../../assets/icon/Icon";
import colors from "../../constant/colors";
import normalize from "react-native-normalize";
import fontStyles from "../../constant/fonts";

export default function HeaderFilterComponent() {
  const tab = [{ title: "Animaux" }, { title: "< 5km" }, { title: "neuf" }];

  //STYLES
  const {
    container,
    wrapper_text_filter,
    text_filter,
    expand_clickable_area,
  } = styles;
  return (
    <View style={container}>
      {tab.map((e, index) => {
        return (
          <View style={wrapper_text_filter}>
            <Text style={text_filter}>{e.title}</Text>
            <TouchableOpacity
              hitSlop={expand_clickable_area}
              style={{ marginLeft: 7 }}
            >
              <CrossWhiteIcon />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.placeholder_grey,
    borderBottomWidth: 1,
    height: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  wrapper_text_filter: {
    borderColor: colors.placeholder_grey,
    borderWidth: 1,
    marginLeft: 10,
    flexDirection: "row",
    height: 27,
    borderRadius: 13,
    paddingHorizontal: 7,
    alignItems: "center",
  },
  text_filter: {
    fontSize: normalize(14, "fontSize"),
    ...fontStyles.semiBold,
    lineHeight: 20,
    color: colors.text_description_black,
  },
  expand_clickable_area: { top: 10, bottom: 10, left: 10, right: 10 },
});
