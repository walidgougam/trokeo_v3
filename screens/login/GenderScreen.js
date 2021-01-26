import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
//API
import { registerApi } from "../../API/API";
//STYLE
import {Colors, BackgroundColors} from "../../constant/colors";
import css from "../../constant/css";
import { loadFont } from "../../assets/Autre";
import normalize from "react-native-normalize";
//COMPONENT
import BtnBlueAction from "../../component/button/BtnBlueAction";
import RadioButton from "../../component/input/RadioBtnComponent";
import BackgroundComponent from "../../component/BackgroundComponent";

export default function GenderScreen({ navigation }) {
  //ROUTE
  const route = useRoute();
  const { fromRegisterPicture } = route.params;
  const email = fromRegisterPicture.email;
  const password = fromRegisterPicture.password;
  const firstName = fromRegisterPicture.firstName;
  const lastName = fromRegisterPicture.lastName;
  const userPicture = fromRegisterPicture.userPicture;

  // STATE
  const [female, setFemale] = useState(false);

  useEffect(() => {
    loadFont();
  });

  const goNextScreen = () => {
    registerApi(
      email,
      password,
      firstName,
      lastName,
      userPicture,
      female,
      () => {
        navigation.navigate("HomeBottomTab");
      }
    );
  };

  //STYLES
  const { container_white, _title, text_description } = styles;
  return (
    <BackgroundComponent
      navigation={navigation}
      route={route}
      // title="Créer mon compte"
    >
      <View style={container_white}>
        <Text style={_title}>Pour finir !</Text>
        <Text style={text_description}>Vous êtes</Text>
        <View>
          <RadioButton
            title="un trokeur"
            value={!female}
            status={!female ? "checked" : "unchecked"}
            onPress={() => setFemale(false)}
          />
          <RadioButton
            title="une trokeuse"
            value={female}
            status={female ? "checked" : "unchecked"}
            onPress={() => setFemale(true)}
          />
        </View>
      </View>
      <View style={{ marginHorizontal: normalize(70) }}>
        <BtnBlueAction
          title="Terminer"
          backgroundColor={Colors.btn_action}
          onPress={() => {
            goNextScreen();
          }}
          color={Colors.white.absolute}
        />
      </View>
    </BackgroundComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BackgroundColors.white.absolute
  },
  container_white: {
    marginHorizontal: normalize(16),
  },
  _title: {
    ...css.title,
    fontFamily: "heavy",
  },
  text_description: {
    ...css.text_description,
    fontFamily: "roman",
  },
});
