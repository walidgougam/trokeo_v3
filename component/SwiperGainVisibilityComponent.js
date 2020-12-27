import React, { Component, useEffect } from "react";
import { Text, View, StyleSheet, Image, Platform } from "react-native";
import Swiper from "react-native-swiper";
//PICTURE
import imageNoAdvertising from "../assets/noAdvertising.png";
import {
  PhoneNotificationImage,
  AddPictureImage,
} from "../assets/image/images";
//STYLE
import { loadFont } from "../assets/Autre";
import {Colors, BackgroundColors} from "../constant/colors";
import fontStyles from "../constant/fonts";
import normalize from "react-native-normalize";

const ImagePhone = () => {
  return (
    <View
      style={[
        styles.border_picture,
        Platform.OS === "ios" ? styles.shadow_wrapper : { elevation: 9 },
      ]}
    >
      <Text
        style={[
          styles.title,
          {
            marginTop: normalize(23),
            marginBottom: normalize(27),
            textAlign: "center",
          },
        ]}
      >
        Ne rien louper
      </Text>
      <View style={{ alignSelf: "center" }}>
        <PhoneNotificationImage />
      </View>

      <View
        style={{
          marginTop: normalize(15),
          marginBottom: normalize(56),
        }}
      >
        <Text style={[styles.text, { textAlign: "center" }]}>
          Suivre des annonces, être alerter
        </Text>
        <Text style={[styles.text, { textAlign: "center" }]}>
          pour une recherche
        </Text>
      </View>
    </View>
  );
};

const ImagePicture = () => {
  return (
    <View
      style={[
        styles.border_picture,
        Platform.OS === "ios" ? styles.shadow_wrapper : { elevation: 9 },
      ]}
    >
      <Text
        style={[
          styles.title,
          {
            marginTop: normalize(23),
            marginBottom: normalize(44),
            textAlign: "center",
          },
        ]}
      >
        Ajouter plus des photos
      </Text>
      <View style={{ alignSelf: "center" }}>
        <AddPictureImage />
      </View>
      <View style={{ marginTop: normalize(31), marginBottom: normalize(56) }}>
        <Text style={[styles.text, { textAlign: "center" }]}>
          Mettez en valeur votre annonce pour
        </Text>
        <Text style={[styles.text, { textAlign: "center" }]}>
          une annonce optimale !
        </Text>
      </View>
    </View>
  );
};

const ImageNoAdvertising = () => {
  return (
    <View
      style={[
        styles.border_picture,
        Platform.OS === "ios" ? styles.shadow_wrapper : { elevation: 9 },
      ]}
    >
      <Text
        style={[
          styles.title,
          {
            marginTop: normalize(23),
            marginBottom: normalize(26),
            textAlign: "center",
          },
        ]}
      >
        Supprimer les publicités
      </Text>
      <View style={{ alignSelf: "center" }}>
        <Image
          source={imageNoAdvertising}
          style={{ width: 194, height: 194 }} // normalize ne fonction pas mettre autre chose
        />
      </View>

      <Text
        style={[
          styles.text,
          { textAlign: "center" },
          { marginTop: normalize(24), marginBottom: normalize(77) },
        ]}
      >
        Pour un meilleur confort de navigation
      </Text>
    </View>
  );
};

const SwiperGainVisibilityComponent = () => {
  useEffect(() => {
    loadFont();
  });
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        dotColor="#D4CBBA"
        activeDotColor="#B3AEA9"
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 100,
        }}
        activeDotStyle={{
          width: 10,
          height: 10,
          borderRadius: 100,
        }}
      >
        <ImagePicture />
        <ImagePhone />
        <ImageNoAdvertising />
      </Swiper>
    </View>
  );
};

var styles = StyleSheet.create({
  container: {
    height: normalize(387, "height"),
  },
  shadow_wrapper: {
    shadowColor: "#000",
    backgroundColor: BackgroundColors.white.absolute,
    shadowOffset: {
      width: 0,
      height: normalize(1, "height"),
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  border_picture: {
    borderColor: "rgba(183,183,183,0.5)",
    borderWidth: 1,
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: normalize(20, "fontSize"),
    fontFamily: "semiBold",
    // lineHeight: normalize(20),
    // marginHorizontal: 50,
  },
  text: {
    fontSize: normalize(14, "fontSize"),
    color: Colors.black.text_description_black,
    fontFamily: "regular",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default SwiperGainVisibilityComponent;
