import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import colors from "../../../constant/colors";
import { goodCategories, serviceCategories } from "../../../helpers";
import InputSearch from "../../../component/input/InputSearch";
import { useRoute } from "@react-navigation/native";

import HeaderComponentForFollow from "../../../component/header/HeaderComponentForFollow";
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

  const handleFollowProduct = (titleCategory, followByUser) => {
    if (from === "good") {
      const changeFollowState = goodCategoryState.map((el) =>
        el?.titleCategory === titleCategory
          ? Object.assign({}, el, { followByUser })
          : el
      );
      setGoodCategoryState(changeFollowState);
    } else {
      const changeFollowState = serviceCategoryState.map((el) =>
        el?.titleCategory === titleCategory
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
  const { _container } = styles;
  return loading ? (
    <ActivityIndicator size="large" style={{ flex: 1 }} />
  ) : (
    <View style={_container}>
      <HeaderComponentForFollow
        title={from === "good" ? "Biens" : "Services"}
        navigation={navigation}
        allFollowRules={
          from === "good" ? goodCategoryState : serviceCategoryState
        }
        from={from}
        userId={userId}
      />
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
                  handleFollowProduct(item?.titleCategory, !item?.followByUser)
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
          keyExtractor={(item) => item?.titleCategory}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: colors.background_white,
  },
});
