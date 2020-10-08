import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../../constant/colors";
import normalize from "react-native-normalize";
import fontStyles from "../../constant/fonts";
import { Context as AuthContext } from "../../context/AuthContext";

import { ProfilePictureIcon } from "../../assets/icon/Icon";

export default function PictureProfileComponent({
  width,
  height,
  fontSize,
  image,
  firstName,
  lastName,
  isProductDetail,
  editProfile,
  userPicture,
  onChange,
}) {
  //CONTEXT
  const { state, editProfileContext } = useContext(AuthContext);

  // useEffect(() => {     // processus devant se declencher en cas d'edition du profile
  //   if (onChange) {
  //     onChange(avatarSource);
  //   }
  // }, [avatarSource]);

  const renderPictureCircle = () => {
    console.log(userPicture, "alors user picture");
    if (userPicture) {
      return (
        <Image
          source={{ uri: userPicture }}
          style={{ width: 49, height: 49, borderRadius: normalize(100) }}
        />
      );
    } else {
      return <ProfilePictureIcon width={width} height={height} />;
    }
  };

  const displayNameOrNot = () => {
    if (isProductDetail) {
      return null;
    } else if (editProfile) {
      return (
        <TouchableOpacity>
          <Text style={text_change_profile_picture}>
            Changer ma photo de profil
          </Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <Text style={[pseudo, { fontSize }]}>
          {firstName && lastName
            ? `${firstName}.${lastName.substring(0, 1)}`
            : "marion.b"}
        </Text>
      );
    }
  };

  // STYLES
  const { text_change_profile_picture, pseudo, wrapper_profile_icon } = styles;

  return (
    <View style={wrapper_profile_icon}>
      {renderPictureCircle()}
      {displayNameOrNot()}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper_profile_icon: {
    alignItems: "center",
  },
  pseudo: {
    marginTop: normalize(12),
    color: colors.text_description_black,
    fontSize: normalize(14, "fontSize"),
    lineHeight: normalize(20),
    textAlign: "center",
    ...fontStyles.medium,
  },
  text_change_profile_picture: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: colors.btn_action,
    color: colors.btn_action,
    fontSize: normalize(13, "fontSize"),
  },
});
