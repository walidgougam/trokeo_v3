import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { PictureIcon, WrongEmailIcon } from "../../assets/icon/Icon";
import {Colors} from "../../constant/colors";
import normalize from "react-native-normalize";

import DeleteProductIcon from "./DeleteProductIcon";

export default function CardPictureIcon({ image }) {
  const renderCard = () => {
    if (image) {
      return (
        <View style={styles.container_image}>
          <View style={{ position: "absolute", right: 2, top: 2, zIndex: 1 }}>
            <DeleteProductIcon />
          </View>
          <Image
            source={image}
            style={{ width: 96, height: 77, borderRadius: 4 }}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container_without_image}>
          <PictureIcon />
        </View>
      );
    }
  };
  return renderCard();
}

const styles = StyleSheet.create({
  container_image: {
    borderColor: Colors.grey.placeholder_grey,
    borderStyle: "solid",
    borderWidth: 1,
    width: 96,
    height: 77,
    // justifyContent: "center",
    // alignItems: "center",
    borderRadius: 4,
  },
  container_without_image: {
    borderColor: Colors.grey.placeholder_grey,
    borderStyle: "solid",
    borderWidth: 1,
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});
