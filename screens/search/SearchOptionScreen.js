import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import HeaderComponent from "../../component/header/HeaderComponent";
import InputSearch from "../../component/input/InputSearch";
import normalize from "react-native-normalize";
import BtnHomeToggle from "../../component/button/BtnHomeToggle";
import CardWithRightIcon from "../../component/card/CardWithRightIcon";
import BtnBlueAction from "../../component/button/BtnBlueAction";
import colors from "../../constant/colors";
import { useRoute } from "@react-navigation/native";

export default function SearchOptionScreen({ navigation }) {
  const [goods, setGoods] = useState();
  const route = useRoute();
  const { fromOrganizationScreen } = route.params;

  const goHomeResult = () => {
    fromOrganizationScreen
      ? navigation.navigate("OrganizationStack")
      : navigation.navigate("HomeStack");
  };

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
          <CardWithRightIcon
            title="Catégorie"
            onPress={() => navigation.navigate("CategoryList", { goods })}
          />
          <CardWithRightIcon
            title="Etat"
            onPress={() => navigation.navigate("ConditionList", { goods })}
          />
          <CardWithRightIcon
            title="Distance Maximum"
            onPress={() => navigation.navigate("SearchByDistance")}
          />
        </View>
        <View
          style={{
            marginHorizontal: normalize(70),
            marginBottom: normalize(47),
          }}
        >
          <BtnBlueAction
            title="Rechercher"
            backgroundColor={colors.btn_action}
            color={colors.text_white}
            onPress={() => goHomeResult()}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  _input: {
    marginHorizontal: normalize(14),
    marginTop: normalize(9),
  },
  wrapper_toggle_btn: {
    flexDirection: "row",
    height: normalize(57, "height"),
    marginTop: normalize(9),
    marginBottom: normalize(21),
  },
});
