import React, { useEffect, useState, useContext } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { Context as AuthContext } from "../../../context/AuthContext";
//API
import { goodCategories, serviceCategories } from "../../../helpers";
//STYLE
import colors from "../../../constant/colors";
//COMPONENT
import InputSearch from "../../../component/input/InputSearch";
import HeaderComponentForFollow from "../../../component/header/HeaderComponentForFollow";
import TextCardComponent from "../../../component/card/TextCardComponent";

export default function FollowProductsScreen({ navigation }) {
  //ROUTE
  const route = useRoute();
  const { from, userId } = route?.params;

  // STATE
  const [goodCategoryState, setGoodCategoryState] = useState(goodCategories);
  const [serviceCategoryState, setServiceCategoryState] = useState(
    serviceCategories
  );
  const [loading, setLoading] = useState(true);

  // CONTEXT
  const { state } = useContext(AuthContext);

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
    const category = state?.specificUser?.categoryGoodsFollow;
    const service = state?.specificUser?.categoryServicesFollow;
    if (category?.length > 0 || service?.length > 0) {
      setGoodCategoryState(category);
      setServiceCategoryState(service);
      setLoading(false);
    }
    setLoading(false);
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
        {console.log(from, "frooooom")}
        <FlatList
          data={from === "good" ? goodCategoryState : serviceCategoryState}
          renderItem={({ item }) => (
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
