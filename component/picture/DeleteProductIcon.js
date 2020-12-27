import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CrossDeleteProductIcon } from "../../assets/icon/Icon";
import {Colors, BackgroundColors} from "../../constant/colors"

export default function DeleteProductIcon() {
  return (
    <View
      style={{
        backgroundColor: BackgroundColors.white.absolute,
        borderRadius: 50,
        padding: 4,
      }}
    >
      <CrossDeleteProductIcon />
    </View>
  );
}

const styles = StyleSheet.create({});
