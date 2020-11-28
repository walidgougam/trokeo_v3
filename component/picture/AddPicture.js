import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
//STYLES
import fontStyles from "../../constant/fonts";
import normalize from "react-native-normalize";
import css from "../../constant/css";
//PICTURE
import CardPictureIcon from "../../component/picture/CardPictureIcon";
import CardAddPictureIcon from "../../component/picture/CardAddPictureIcon";

export default function AddPicture({ onPress, avatar, onChoosePicture }) {
  //STYLES
  const { wrapper_camera_picture } = styles;
  const arrayAddPicture = [0, 1, 2];
  return (
    <View
      style={[
        wrapper_camera_picture,
        {
          paddingHorizontal: avatar.length > 0 ? normalize(0) : normalize(50),
        },
      ]}
    >
      {arrayAddPicture.map((img, index) => {
        return (
          <TouchableOpacity
            activeOpacity={fontStyles.activeOpacity}
            onPress={() => onPress(img)}
          >
            <CardPictureIcon image={avatar[img]} />
          </TouchableOpacity>
        );
      })}
      <TouchableOpacity
        activeOpacity={fontStyles.activeOpacity}
        onPress={onChoosePicture}
      >
        <CardAddPictureIcon />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper_camera_picture: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...css.border_bottom,
    paddingVertical: normalize(17),
  },
});
