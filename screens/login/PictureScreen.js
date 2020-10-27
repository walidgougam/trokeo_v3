import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Alert, Platform } from "react-native";
import normalize from "react-native-normalize";
import { useRoute } from "@react-navigation/native";
import colors from "../../constant/colors";
import fontStyles from "../../constant/fonts";
import css from "../../constant/css";
import * as ImagePicker from "expo-image-picker";
import { ProfilePictureIcon } from "../../assets/icon/Icon";

import BtnBlueAction from "../../component/button/BtnBlueAction";
import BackgroundComponent from "../../component/BackgroundComponent";

export default function PictureScreen({ navigation }) {
  // ROUTE
  const route = useRoute();
  const { email, password, firstName, lastName } = route.params;

  // STATE
  const [profilePicture, setProfilePicture] = useState(null);

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

  const handleChoosePicture = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result, "result picture screen");

    if (!result.cancelled) {
      setProfilePicture(result.uri);
    }
  };

  const goNextScreen = () => {
    console.log(profilePicture, "userPicture");
    if (profilePicture) {
      return navigation.navigate("Gender", {
        email,
        password,
        firstName,
        lastName,
        userPicture: profilePicture,
      });
    } else {
      Alert.alert("vous devez avoir une photo de profil");
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
  const { container_white, _title, text_description, pseudo } = styles;

  return (
    <BackgroundComponent navigation={navigation} route={route}>
      <View style={container_white}>
        <Text style={_title}>Choisir ma photo</Text>
        <Text style={text_description}>
          Vous aurez plus de chance d’échanger avec votre photo !
        </Text>
        {profilePicture ? ( // ancienement avatarSource
          <Image
            source={{ uri: profilePicture }}
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
          {renderName()}
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
          title={profilePicture ? "Suivant" : "Passer"}
          backgroundColor={colors.background_white}
          color={colors.btn_action}
          onPress={() => goNextScreen()}
        />
      </View>
    </BackgroundComponent>
  );
}

const styles = StyleSheet.create({
  _container: {
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
    // ...fontStyles.medium,
  },
});
