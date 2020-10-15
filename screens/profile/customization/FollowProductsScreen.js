import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  AsyncStorage,
} from "react-native";
import normalize from "react-native-normalize";
import colors from "../../../constant/colors";
import fontStyles from "../../../constant/fonts";
import { goodCategories, serviceCategories } from "../../../helpers";
import { SearchSmallIcon } from "../../../assets/icon/Icon";
import InputSearch from "../../../component/input/InputSearch";
import { useRoute, useIsFocused } from "@react-navigation/native";
import axios from "axios";

import HeaderComponentForFollow from "../../../component/header/HeaderComponentForFollow";
import BtnBlueAction from "../../../component/button/BtnBlueAction";
import TextCardComponent from "../../../component/card/TextCardComponent";

export default function FollowProductsScreen({ navigation }) {
  //ROUTE
  const route = useRoute();
  const {
    from,
    userId,
    goodCategoryFromDb,
    serviceCategoryFromDb,
  } = route?.params;

  // STATE
  const [goodCategoryState, setGoodCategoryState] = useState(goodCategories);
  const [serviceCategoryState, setServiceCategoryState] = useState(
    serviceCategories
  );
  const [loading, setLoading] = useState(true);

  // FOCUS ON SCREEN
  const isFocuser = useIsFocused();

  const handleFollowProduct = (titleCategory, followByUser) => {
    if (from === "good") {
      const changeFollowState = goodCategoryState.map((el) =>
        el.titleCategory === titleCategory
          ? Object.assign({}, el, { followByUser })
          : el
      );
      setGoodCategoryState(changeFollowState);
    } else {
      const changeFollowState = serviceCategoryState.map((el) =>
        el.titleCategory === titleCategory
          ? Object.assign({}, el, { followByUser })
          : el
      );
      setServiceCategoryState(changeFollowState);
    }
  };

  useEffect(() => {
    if (goodCategoryFromDb || serviceCategoryFromDb) {
      setGoodCategoryState(goodCategoryFromDb);
      setServiceCategoryState(serviceCategoryFromDb);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  //STYLES
  const { container, wrapper_input, _icon, _input } = styles;
  return loading ? (
    <View></View>
  ) : (
    <View style={container}>
      <HeaderComponentForFollow
        title={from === "good" ? "Biens" : "Services"}
        navigation={navigation}
        allFollowRules={
          from === "good" ? goodCategoryState : serviceCategoryState
        }
        from={from}
        userId={userId}
      />
      <ScrollView>
        <>
          <View style={{ marginHorizontal: 18, marginVertical: 9 }}>
            <InputSearch placeholder="Rechercher des catégories" />
          </View>
          <View>
            <FlatList
              data={from === "good" ? goodCategoryState : serviceCategoryState}
              renderItem={({ item }) => (
                <>
                  <TextCardComponent
                    onPress={() =>
                      handleFollowProduct(
                        item?.titleCategory,
                        !item.followByUser
                      )
                    }
                    btn
                    title={item?.titleCategory}
                    btnTitle="Suivre"
                    color={colors.text_white}
                    backgroundColor={colors.btn_action}
                    followByUser={item?.followByUser}
                  />
                </>
              )}
              keyExtractor={(item) => item.titleCategory}
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
