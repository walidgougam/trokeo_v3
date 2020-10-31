import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
  Platform,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import images from "../../assets/image/images";
import fontStyles from "../../constant/fonts";
import colors from "../../constant/colors";
import { IconGoogle, IconFacebook } from "../../assets/icon/Icon";
import normalize from "react-native-normalize";
import * as Google from "expo-google-app-auth";
import * as AppleAuthentication from "expo-apple-authentication";
import { registerGoogleApi } from "../../API";

import BtnLogin from "../../component/button/BtnLogin";

const LoginScreen = ({ navigation }) => {
  //STATE
  const [isLoading, setIsLoading] = useState(true);

  // FOCUS ON SCREEN
  const isFocuser = useIsFocused();

  const configAndroid = {
    iosClientId: `365734703180-rafl6rvpv6e194e14c75tk734cfh0vos.apps.googleusercontent.com`,
    androidClientId: `365734703180-o5m1hbcnssrlrfi8ui79efkkacp0nuvp.apps.googleusercontent.com`,
    androidStandaloneAppClientId: `<YOUR_ANDROID_CLIENT_ID>`,
  };

  const configIos = {
    iosClientId: `365734703180-rafl6rvpv6e194e14c75tk734cfh0vos.apps.googleusercontent.com`,
    androidClientId: `365734703180-o5m1hbcnssrlrfi8ui79efkkacp0nuvp.apps.googleusercontent.com`,
    iosStandaloneAppClientId: `<YOUR_IOS_CLIENT_ID>`,
  };

  const userAlreadyConnected = async () => {
    const userId = await AsyncStorage.getItem("userId");
    if (userId) {
      return navigation.navigate("HomeBottomTab");
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      userAlreadyConnected();
    }
    return () => {
      mounted = false;
    };
  }, [isFocuser]);

  const auth = async () => {
    try {
      const { user, type } = await Google.logInAsync(
        Platform.OS === "android" ? configAndroid : configIos
      );

      //STOCKER L'UTILISATEUR DANS LA BASE DE DONNEE
      if (type === "success") {
        const { email, familyName, givenName, id, photoUrl } = user;
        registerGoogleApi(email, givenName, familyName, photoUrl, () => {
          navigation.navigate("HomeBottomTab");
        });
      }
    } catch (e) {
      console.error("error", e);
    }
  };

  const handleLoginGoogle = () => {
    auth();
    // navigation.navigate("EmailRegister");
  };

  //STYLES
  const {
    container,
    container_image,
    _image,
    wrapper_text_image,
    title_image,
    text_image,
    container_green,
    wrapper_btn,
    btn,
    text_btn,
    btn_connect,
    text_connect,
  } = styles;
  return isLoading ? (
    <ActivityIndicator size="large" style={{ flex: 1 }} />
  ) : (
    <View style={container}>
      <View style={container_image}>
        <Image source={images.hands} style={_image} />
        <View style={wrapper_text_image}>
          <Text style={title_image}>Bienvenue</Text>
          <Text style={text_image}>
            L’application éco-responsable et solidaire de troc d’objets et de
            services entre particuliers !
          </Text>
        </View>
      </View>
      <View style={container_green}>
        <View style={wrapper_btn}>
          {Platform.OS === "ios" ? (
            <View>
              <AppleAuthentication.AppleAuthenticationButton
                buttonType={
                  AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN
                }
                buttonStyle={
                  AppleAuthentication.AppleAuthenticationButtonStyle.BLACK
                }
                cornerRadius={25}
                style={{
                  height: normalize(52, "height"),
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: normalize(68),
                  marginBottom: normalize(25),
                }}
                onPress={async () => {
                  try {
                    const credential = await AppleAuthentication.signInAsync({
                      requestedScopes: [
                        AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                        AppleAuthentication.AppleAuthenticationScope.EMAIL,
                      ],
                    });
                    console.log(credential, "credential");
                  } catch (e) {
                    if (e.code === "ERR_CANCELED") {
                      console.log(1, e);
                    } else {
                      console.log(2, e);
                    }
                  }
                }}
              />
            </View>
          ) : (
            <BtnLogin
              title="Login avec Google"
              backgroundColor={colors.background_white}
              color={colors.text_google_grey}
              press={() => handleLoginGoogle()}
              icon={<IconGoogle />}
            />
          )}
          <BtnLogin
            title="Login avec Facebook"
            backgroundColor={colors.background_facebook_blue}
            color={colors.text_white}
            icon={<IconFacebook />}
          />
          <View>
            <TouchableOpacity
              activeOpacity={0.6}
              style={[
                btn,
                {
                  backgroundColor: "transparent",
                  borderWidth: 1,
                  borderColor: colors.background_white,
                },
              ]}
              onPress={() => navigation.navigate("EmailLogin")}
            >
              <Text style={[text_btn, { color: colors.text_white }]}>
                Login avec mon mail
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableHighlight
          style={btn_connect}
          onPress={() => navigation.navigate("EmailRegister")}
        >
          <Text style={text_connect}>S'inscrire</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  container_image: {
    height: "48.7%",
  },
  _image: {
    width: "100%",
    height: "100%",
  },
  wrapper_text_image: {
    position: "absolute",
    marginHorizontal: normalize(17),
    marginVertical: normalize(29),
    bottom: 0,
  },
  title_image: {
    color: colors.text_white,
    fontSize: normalize(20, "fontSize"),
    marginBottom: normalize(17),
    // ...fontStyles.heavy,
  },
  text_image: {
    color: colors.text_white,
    fontSize: normalize(15, "fontSize"),
    // ...fontStyles.medium,
  },
  container_green: {
    backgroundColor: colors.main_green,
    height: "51.3%",
  },
  wrapper_btn: {
    marginVertical: "6%",
  },
  btn: {
    height: normalize(52, "height"),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: normalize(68),
    borderRadius: normalize(26),
  },
  text_btn: {
    fontSize: normalize(16, "fontSize"),
    marginLeft: normalize(13),
    // ...fontStyles.book,
  },
  icon_google: {
    width: normalize(10, "width"),
    height: normalize(10, "height"),
  },
  btn_connect: {
    alignSelf: "center",
  },
  text_connect: {
    fontSize: normalize(16, "fontSize"),
    color: colors.text_white,
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
