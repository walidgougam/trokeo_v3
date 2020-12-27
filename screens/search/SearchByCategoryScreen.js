import React, { useState, useEffect, useContext } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Context as AuthContext } from "../../context/AuthContext";
//API
import { goodCategories, serviceCategories } from "../../helpers";
//COMPONENT
import HeaderComponent from "../../component/header/HeaderComponent";
import CardSelectCategory from "../../component/card/CardSelectCategory";
import InputSearch from "../../component/input/InputSearch";
//STYLE
import {Colors, BackgroundColors} from "../../constant/colors";
import { Spacings } from "../../constant/layout";

export default function SearchByCategoryScreen({ navigation }) {
  // Route
  const route = useRoute();
  const { goods } = route.params;

  // STATE
  const [categorySelected, setCategorySelected] = useState();

  // CONTEXT
  const { state, searchFilterProductContext } = useContext(AuthContext);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setCategorySelected(goodCategories);
    }
    return () => {
      mounted = false;
    };
  }, []);

  const handleCategory = (isValue, followByUser) => {
    const changeCategory = categorySelected.map((el) => {
      return el?.isValue === isValue
        ? Object.assign({}, el, { followByUser })
        : el;
    });
    setCategorySelected(changeCategory);
    registerCategoryOnContext(changeCategory);
  };

  const registerCategoryOnContext = (changeCategory) => {
    let categoryFilter = [];
    for (let i = 0; i < changeCategory?.length; i++) {
      if (changeCategory[i]?.followByUser === true) {
        categoryFilter.push(changeCategory[i]?.titleCategory);
      }
      console.log("catgeory filter", categoryFilter);
      searchFilterProductContext({
        category: categoryFilter,
        condition: state?.search?.condition,
        distance: state?.search?.distance,
      });
    }
  };

  return (
    <View style={styles.container}>
      <HeaderComponent
        title="Catégorie"
        navigation={navigation}
        search
        action={() => registerCategorySelectedOnContext()}
      />
      <View style={{ marginHorizontal: Spacings.L, marginVertical: Spacings.XXS }}>
        <InputSearch placeholder="Rechercher des catégories" />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={styles.wrapper_list}
        // data={goods ? categorySelected : serviceCategories}
        data={categorySelected}
        renderItem={({ item }) => {
          return (
            <CardSelectCategory
              title={item?.titleCategory}
              value={item?.followByUser}
              onPress={() => handleCategory(item?.isValue, !item?.followByUser)}
            />
          );
        }}
        keyExtractor={(item) => item?.titleCategory}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BackgroundColors.white.absolute,
    flex: 1,
  },
});
