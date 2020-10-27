import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import normalize from "react-native-normalize";
import colors from "../../constant/colors";
import { PositionIcon } from "../../assets/icon/Icon";
import fontStyles from "../../constant/fonts";

import ModalChat from "../modal/ModalChat";

export default function CardHeaderChat({
  productPicture,
  titleProduct,
  navigation,
  noFinalize,
  userId,
  recieverId,
}) {
  //STATE
  const [show, setShow] = useState(false);

  const handleModalShow = () => {
    setShow(!show);
  };

  // STYLES
  const {
    container,
    _image,
    wrapper_title,
    title_product,
    wrapper_localisation,
    _localisation,
    wrapper_picture,
    wrapper_finalize,
    text_finalize,
    shadow_wrapper,
  } = styles;
  return (
    <View
      style={[
        container,
        Platform.OS === "ios" ? shadow_wrapper : { elevation: 9 },
      ]}
    >
      <View style={wrapper_picture}>
        <Image
          style={_image}
          source={{
            uri: productPicture,
          }}
        />
        <View style={wrapper_title}>
          <Text style={title_product}>{titleProduct}</Text>
          <View style={wrapper_localisation}>
            <PositionIcon />
            <Text style={_localisation}>5.8 km</Text>
          </View>
        </View>
      </View>
      {!noFinalize && (
        <TouchableOpacity
          style={wrapper_finalize}
          onPress={() => handleModalShow()}
        >
          <Text style={text_finalize}>Finaliser l’échange</Text>
        </TouchableOpacity>
      )}

      <ModalChat
        productPicture={productPicture}
        titleProduct={titleProduct}
        navigation={navigation}
        handleModalShow={() => handleModalShow()}
        show={show}
        recieverId={recieverId}
        userId={userId}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.border_color,
    borderBottomWidth: 1,
    height: normalize(60, "height"),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: normalize(17),
    alignItems: "center",
  },
  wrapper_picture: {
    display: "flex",
    flexDirection: "row",
  },
  wrapper_finalize: {
    borderColor: colors.green_btn,
    borderWidth: 1,
    paddingHorizontal: normalize(17),
    paddingVertical: normalize(9),
    borderRadius: normalize(26),
  },
  text_finalize: {
    color: colors.green_btn,
    fontSize: normalize(10, "fontSize"),
    lineHeight: 20,
    // fontFamily:"Open Sans SemiBold"
  },
  shadow_wrapper: {
    shadowColor: "#000",
    backgroundColor: colors.background_white,
    shadowOffset: {
      width: 0,
      height: normalize(1, "height"),
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  _image: {
    width: normalize(53, "width"),
    height: normalize(43, "height"),
    borderRadius: normalize(4),
  },
  wrapper_title: {
    marginLeft: normalize(9),
  },
  title_product: {
    fontSize: normalize(11, "fontSize"),
    // ...fontStyles.regular,
    lineHeight: normalize(20),
    color: colors.background_reservation_grey,
  },
  wrapper_localisation: {
    flexDirection: "row",
    alignItems: "center",
  },
  _localisation: {
    fontSize: normalize(9, "fontSize"),
    // ...fontStyles.regular,
    lineHeight: normalize(20),
    color: colors.likes_grey,
    marginLeft: normalize(4),
  },
});
