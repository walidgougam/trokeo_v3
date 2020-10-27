import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import { useRoute } from "@react-navigation/native";
import colors from "../../constant/colors";
import css from "../../constant/css";
import { registerApi } from "../../API";

import BtnBlueAction from "../../component/button/BtnBlueAction";
import RadioButton from "../../component/input/RadioBtnComponent";
import BackgroundComponent from "../../component/BackgroundComponent";

export default function GenderScreen({ navigation }) {
  //ROUTE
  const route = useRoute();
  const { email, password, firstName, lastName, userPicture } = route.params;

  // STATE
  const [female, setFemale] = useState(false);

  useEffect(() => {
    // console.log({ email, password, firstName, lastName, picture, female });
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
          backgroundColor={colors.btn_action}
          onPress={() => {
            goNextScreen();
          }}
          color={colors.text_white}
        />
      </View>
    </BackgroundComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  container_white: {
    marginHorizontal: normalize(16),
  },
  _title: {
    ...css.title,
  },
  text_description: {
    ...css.text_description,
  },
});
