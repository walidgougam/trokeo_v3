import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import normalize from "react-native-normalize";
import colors from "../../../constant/colors";
import fontStyles from "../../../constant/fonts";
import { goodCategories, serviceCategories } from "../../../helpers";
import { SearchSmallIcon } from "../../../assets/icon/Icon";
import InputSearch from "../../../component/input/InputSearch";
import { useRoute } from "@react-navigation/native";

import HeaderComponent from "../../../component/header/HeaderComponent";
import BtnBlueAction from "../../../component/button/BtnBlueAction";
import TextCardComponent from "../../../component/card/TextCardComponent";

export default function FollowProductsScreen({ navigation }) {
  //ROUTE
  const route = useRoute();
  const { from } = route?.params;

  // STATE
  const [goodCategoryState, setGoodCategoryState] = useState(goodCategories);
  const [serviceCategoryState, setServiceCategoryState] = useState(
    serviceCategories
  );

  const handleFollowProduct = (title, followByUser) => {
    if (from === "good") {
      const changeFollowState = goodCategoryState.map((el) =>
        el.title === title ? Object.assign({}, el, { followByUser }) : el
      );
      setGoodCategoryState(changeFollowState);
    } else {
      const changeFollowState = serviceCategoryState.map((el) =>
        el.title === title ? Object.assign({}, el, { followByUser }) : el
      );
      setServiceCategoryState(changeFollowState);
    }
  };

  //STYLES
  const { container, wrapper_input, _icon, _input } = styles;
  return (
    <View style={container}>
      <HeaderComponent title="Biens" navigation={navigation} />
      <ScrollView>
        <>
          <View style={{ marginHorizontal: 18, marginVertical: 9 }}>
            <InputSearch placeholder="Rechercher des catégories" />
          </View>
          <View>
            <FlatList
              data={from === "good" ? goodCategoryState : serviceCategoryState}
              renderItem={({ item }) => (
                <TextCardComponent
                  onPress={() =>
                    handleFollowProduct(item?.title, !item.followByUser)
                  }
                  btn
                  title={item?.title}
                  btnTitle="Suivre"
                  color={colors.text_white}
                  backgroundColor={colors.btn_action}
                  followByUser={item?.followByUser}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_white,
  },
  wrapper_input: {
    marginHorizontal: normalize(13),
    height: normalize(45, "height"),
    backgroundColor: colors.background_input_grey,
    marginTop: normalize(9),
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: normalize(13),
    marginRight: normalize(25),
  },
  input: {
    fontSize: normalize(14, "fontSize"),
    ...fontStyles.roman,
    lineHeight: normalize(20),
  },
  wrapper_section: {
    flexDirection: "row",
  },
});
