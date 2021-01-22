import React from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";
import AsyncStorage from '@react-native-community/async-storage'
import normalize from "react-native-normalize";
import { settingOptions } from "../../../helpers";
import {Colors, BackgroundColors} from "../../../constant/colors";

import CardWithRightIcon from "../../../component/card/CardWithRightIcon";
import HeaderComponent from "../../../component/header/HeaderComponent";

export default function SettingDetailScreen({ navigation }) {
  navigation.setOptions({ tabBarVisible: () => false });

  const handleSettingOption = async (optionClicked) => {
    if (optionClicked === "disconnected") {
      await AsyncStorage.removeItem("userId");
      Alert.alert(
        "Voulez-vous vraiment vous déconnecter?",
        "",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          ,
          { text: "OK", onPress: () => navigation.navigate("Login") },
        ],
        { cancelable: false }
      );
    } else if (optionClicked === "notification") {
      navigation.navigate("Notification");
    } else if (optionClicked === "paymentVisibility") {
      navigation.navigate("PaymentVisibility");
    }
  };

  const { _container } = styles;
  return (
    <View style={_container}>
      <HeaderComponent navigation={navigation} />
      <FlatList
        data={settingOptions}
        renderItem={({ item }) => (
          <CardWithRightIcon
            title={item?.title}
            onPress={() => handleSettingOption(item?.onClick)}
          />
        )}
        keyExtractor={(item) => item?.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: BackgroundColors.white.absolute
  },
  container_section: {
    height: "100%",
    marginTop: normalize(72),
    marginBottom: normalize(54),
  },
});
