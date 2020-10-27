import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { PictureIcon, WrongEmailIcon } from "../../assets/icon/Icon";
import colors from "../../constant/colors";
import normalize from "react-native-normalize";

export default function CardPictureIcon({ image }) {
  return (
    <View style={styles.container}>
      {image ? (
        <>
          <View style={{ position: "absolute", left: 52, bottom: 50 }}>
            <WrongEmailIcon />
          </View>

          <Image
            source={image}
            style={{ width: 56, height: 56, borderRadius: 4 }}
          />
        </>
      ) : (
        <PictureIcon />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.placeholder_grey,
    borderStyle: "solid",
    borderWidth: 1,
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});
