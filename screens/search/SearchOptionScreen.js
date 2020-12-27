import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Context as AuthContext } from "../../context/AuthContext";
//STYLE
import normalize from "react-native-normalize";
import {Colors, BackgroundColors} from "../../constant/colors";
//COMPONENT
import HeaderComponent from "../../component/header/HeaderComponent";
import InputSearch from "../../component/input/InputSearch";
import BtnHomeToggle from "../../component/button/BtnHomeToggle";
import CardWithRightIcon from "../../component/card/CardWithRightIcon";
import BtnBlueAction from "../../component/button/BtnBlueAction";
import { Spacings } from "../../constant/layout";

export default function SearchOptionScreen({ navigation }) {
  //STATE
  const [goods, setGoods] = useState();

  //ROUTE
  const route = useRoute();
  const { fromOrganizationScreen } = route.params;

  // CONTEXT
  const { state } = useContext(AuthContext);

  const goHomeResult = () => {
    fromOrganizationScreen
      ? navigation.navigate("OrganizationStack")
      : navigation.navigate("HomeStack");
  };

  const arrayData = [
    { title: "Catégorie", navigation: "CategoryList" },
    { title: "Etat", navigation: "ConditionList" },
    { title: "Distance Maximum", navigation: "SearchByDistance" },
  ];

  const { container, _input, wrapper_toggle_btn } = styles;
  return (
    <View style={container}>
      <HeaderComponent title="Rechercher" navigation={navigation} />
      <View style={_input}>
        <InputSearch placeholder="Rechercher des mots clés" />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <View>
          <View style={wrapper_toggle_btn}>
            <BtnHomeToggle
              title="Biens"
              focus={goods}
              changeFocus={() => setGoods(true)}
            />
            <BtnHomeToggle
              title="Services"
              focus={!goods}
              changeFocus={() => setGoods(false)}
            />
          </View>
          {arrayData.map((option, index) => {
            return (
              <CardWithRightIcon
                key={index}
                title={option?.title}
                onPress={() =>
                  navigation.navigate(option?.navigation, { goods })
                }
              />
            );
          })}
        </View>
        <View
          style={{
            marginHorizontal: normalize(70),
            marginBottom: normalize(47),
          }}
        >
          <BtnBlueAction
            title="Rechercher"
            backgroundColor={BackgroundColors.blue.btn_action}
            color={Colors.white.absolute}
            onPress={() => goHomeResult()}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BackgroundColors.white.absolute,
    flex: 1,
  },
  _input: {
    marginHorizontal: normalize(14),
    marginTop: normalize(Spacings.XXS),
  },
  wrapper_toggle_btn: {
    flexDirection: "row",
    height: normalize(57, "height"),
    marginTop: normalize(Spacings.XXS),
    marginBottom: normalize(21),
  },
});
