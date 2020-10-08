import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import normalize from "react-native-normalize";
import { useRoute } from "@react-navigation/native";
import colors from "../../constant/colors";
import fontStyles from "../../constant/fonts";
import css from "../../constant/css";
// import ImagePicker from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { addImageApi } from "../../API";
import { ProfilePictureIcon } from "../../assets/icon/Icon";

import GreenLineLoaderLogin from "../../component/GreenLineLoaderLogin";
import HeaderComponent from "../../component/header/HeaderComponent";
import BtnBlueAction from "../../component/button/BtnBlueAction";
import PictureProfileComponent from "../../component/picture/PictureProfileComponent";
import BackgroundComponent from "../../component/BackgroundComponent";

export default function PictureScreen({ navigation }) {
  // ROUTE
  const route = useRoute();
  const { email, password, firstName, lastName } = route.params;

  // STATE
  // const [picture, setPicture] = useState("");
  // const [avatarSource, setAvatarSource] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

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
  //         response?.uri?.substr(response.uri.lastIndexOf("/") + 1);

  //       if (response.didCancel) {
  //         console.log("User cancelled image picker");
  //       } else if (response.error) {
  //         console.log("Image Picker Error: ", response.error);
  //       } else {
  //         let source = { uri: response.uri };
  //         addImageApi(response.data, fileName);

  //         setAvatarSource(source);
  //         setPicture(response.data);
  //       }
  //     });
  //   } catch (err) {
  //     console.log(err, "error on handle choose photo");
  //   }
  // };

  const handleChoosePicture = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const goNextScreen = () => {
    return navigation.navigate("Gender", {
      email,
      password,
      firstName,
      lastName,
      userPicture: avatarSource.uri,
    });
  };

  // STYLES
  const { container_white, _title, text_description, pseudo } = styles;

  return (
    <BackgroundComponent
      navigation={navigation}
      route={route}
      // title="Créer mon compte"
    >
      <View style={container_white}>
        <Text style={_title}>Choisir ma photo</Text>
        <Text style={text_description}>
          Vous aurez plus de chance d’échanger avec votre photo !
        </Text>
        {image ? ( // ancienement avatarSource
          <Image
            // source={avatarSource}
            source={{ uri: image }}
            style={{
              width: 133,
              height: 133,
              borderRadius: normalize(100),
              alignSelf: "center",
            }}
          />
        ) : (
          <View style={{ alignSelf: "center" }}>
            <ProfilePictureIcon
              width={normalize(133, "width")}
              height={normalize(133, "height")}
            />
          </View>
        )}
        <Text style={[pseudo, { fontSize: normalize(14) }]}>
          {firstName && lastName
            ? `${firstName}.${lastName.substring(0, 1)}`
            : "marion.b"}
        </Text>
      </View>
      <View style={{ marginHorizontal: normalize(70) }}>
        <View style={{ marginBottom: normalize(18) }}>
          <BtnBlueAction
            title="Ajouter une photo"
            backgroundColor={colors.btn_action}
            color={colors.text_white}
            onPress={() => handleChoosePicture()}
          />
        </View>

        <BtnBlueAction
          // title={picture ? "Suivant" : "Passer"}
          title={image ? "Suivant" : "Passer"}
          backgroundColor={colors.background_white}
          color={colors.btn_action}
          onPress={() => goNextScreen()}
        />
      </View>
    </BackgroundComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_white,
  },
  container_white: {
    marginHorizontal: normalize(16),
  },
  _title: {
    ...css.title,
  },
  text_description: {
    ...css.text_description,
    marginBottom: normalize(62),
  },
  pseudo: {
    marginTop: normalize(12),
    color: colors.text_description_black,
    fontSize: normalize(14, "fontSize"),
    lineHeight: normalize(20),
    textAlign: "center",
    ...fontStyles.medium,
  },
});
