import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";
//STYLES
import normalize from "react-native-normalize";
import {Colors} from "../../constant/colors"

const SwiperPictureComponent = ({ imageProduct }) => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        dotColor="grey"
        activeDotColor={Colors.white.absolute}
      >
        {imageProduct.map((image, index) => {
          return (
            <View style={styles.slide} key={index}>
              <Image source={image} style={styles.image} />
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

var styles = StyleSheet.create({
  container: {
    height: normalize(200),
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    color: "#fff",
    fontSize: normalize(30, "fontSize"),
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "100%",
    transform: [{ scale: 1 }],
    aspectRatio: 1,
    resizeMode: "cover",
  },
});
export default SwiperPictureComponent;
