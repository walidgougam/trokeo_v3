import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";
import normalize from "react-native-normalize";

const SwiperPictureComponent = ({ imageProduct }) => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        dotColor="grey"
        activeDotColor="white"
      >
        <View style={styles.slide}>
          <Image source={imageProduct[0]} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={imageProduct[1]} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={imageProduct[2]} style={styles.image} />
        </View>
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
  },
});
export default SwiperPictureComponent;
