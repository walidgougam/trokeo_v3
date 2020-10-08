import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderComponent from "../../../component/header/HeaderComponent";
// import {
//   PhoneNotificationImage,
//   AddPictureImage,
// } from "../../assets/image/images";
import normalize from "react-native-normalize";
import SwiperGainVisibilityComponent from "../../../component/SwiperGainVisibilityComponent";
import colors from "../../../constant/colors";
import BtnBluAction from "../../../component/button/BtnBlueAction";
import fontStyles from "../../../constant/fonts";

export default function GainVisibilityScreen({ navigation }) {
  const { container, wrapper_white_background, _title } = styles;
  return (
    <View style={container}>
      <HeaderComponent navigation={navigation} />
      <View style={wrapper_white_background}>
        <View>
          <Text style={_title}>
            Gagnez en visibilité et multipliez vos chances de troquer !
          </Text>
          <View style={{ marginTop: normalize(35) }}>
            <SwiperGainVisibilityComponent />
          </View>
        </View>
        <View style={{ marginBottom: normalize(47) }}>
          <BtnBluAction
            title="2,99€/mois"
            color={colors.text_white}
            backgroundColor={colors.btn_action}
          />
          <View style={{ marginTop: normalize(9) }}>
            <BtnBluAction
              title="18,99€/an"
              color={colors.text_white}
              backgroundColor={colors.btn_action}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  wrapper_white_background: {
    marginHorizontal: normalize(15),
    flex: 1,
    justifyContent: "space-between",
  },
  _title: {
    marginTop: normalize(13),
    color: colors.title_green,
    fontSize: normalize(16, "fontSize"),
    // lineHeight: normalize(20),
    // marginBottom: normalize(37)
    ...fontStyles.bold,
  },
});
