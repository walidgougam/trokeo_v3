import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ProfilePictureIcon } from "../../assets/icon/Icon";
import normalize from "react-native-normalize";
import colors from "../../constant/colors";
import fontStyles from "../../constant/fonts";
// import ImagePicker from "react-native-image-picker";

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
  const [avatarSource, setAvatarSource] = useState({ uri: userPicture });
  const [picture, setPicture] = useState();

  // const handleChoosePicture = async () => {
  //   try {
  //     const options = {
  //       title: "my pic app",
  //       takePhotoButtonTitle: "Take photo with your camera",
  //       chooseFromLibraryButtonTitle: "Choose photo from library",
  //     };

  //     ImagePicker.showImagePicker(options, (response) => {
  //       let fileName =
  //         response.fileName ||
  //         response.uri.substr(response.uri.lastIndexOf("/") + 1);

  //       if (response.didCancel) {
  //         console.log("User cancelled image picker");
  //       } else if (response.error) {
  //         console.log("Image Picker Error: ", response.error);
  //       } else {
  //         let source = { uri: response.uri };
  //         // addImageApi(response.data, fileName);

  //         setAvatarSource(source);
  //         avatar(source.uri);
  //         //   setPicture(response.data);
  //       }
  //     });
  //   } catch (err) {
  //     console.log(err, "error on handle choose photo");
  //   }
  // };

  const handleChoosePicture = () => {
    console.log("handle choose");
  };

  // STYLES
  const { pseudo, text_change_profile_picture } = styles;
  return (
    <View>
      {userPicture || avatarSource ? (
        <Image
          source={avatarSource}
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
        <Text style={[pseudo, { fontSize }]}>
          {firstName && lastName
            ? `${firstName}.${lastName.substring(0, 1)}`
            : "marion.b"}
        </Text>
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
    ...fontStyles.medium,
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
