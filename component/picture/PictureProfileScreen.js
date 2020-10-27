import React, { useState, useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ProfilePictureIcon } from "../../assets/icon/Icon";
import normalize from "react-native-normalize";
import colors from "../../constant/colors";
import fontStyles from "../../constant/fonts";
import * as ImagePicker from "expo-image-picker";
import { Context as AuthContext } from "../../context/AuthContext";

export default function PictureProfileScreen({
  firstName,
  lastName,
  userPicture,
  fontSize,
  width,
  height,
  editProfile,
  avatar,
}) {
  //STATE
  const [avatarSource, setAvatarSource] = useState(userPicture);

  // CONTEXT
  const { state, changePictureContext } = useContext(AuthContext);

  const handleChoosePicture = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result, "result");

    if (!result.cancelled) {
      setAvatarSource(result.uri);
      changePictureContext(result.uri);
    }
  };

  const renderName = () => {
    if (firstName && lastName) {
      return `${firstName}.${lastName.substring(0, 1)}`;
    } else if (!firstName && !lastName) {
      return "firstname.lastname";
    } else if (firstName && !lastName) {
      return firstName;
    }
  };

  // STYLES
  const { pseudo, text_change_profile_picture } = styles;
  return (
    <View>
      {userPicture || avatarSource ? (
        <Image
          source={{ uri: avatarSource }}
          style={{
            width: normalize(86),
            height: normalize(86),
            borderRadius: normalize(100),
            alignSelf: "center",
          }}
        />
      ) : (
        <View style={{ alignSelf: "center" }}>
          <ProfilePictureIcon width={width} height={height} />
        </View>
      )}
      {editProfile ? (
        <TouchableOpacity onPress={() => handleChoosePicture()}>
          <Text style={text_change_profile_picture}>
            Changer ma photo de profil
          </Text>
        </TouchableOpacity>
      ) : (
        <Text style={[pseudo, { fontSize }]}>{renderName()}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  pseudo: {
    marginTop: normalize(12),
    color: colors.text_description_black,
    fontSize: normalize(14, "fontSize"),
    lineHeight: normalize(20),
    textAlign: "center",
    // ...fontStyles.medium,
  },
  text_change_profile_picture: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: colors.btn_action,
    color: colors.btn_action,
    fontSize: normalize(13, "fontSize"),
    marginTop: 11,
  },
});
