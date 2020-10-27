import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { goodCategories, serviceCategories } from "../../helpers";
import { useRoute } from "@react-navigation/native";

import HeaderComponent from "../../component/header/HeaderComponent";
import CardSelectCategory from "../../component/card/CardSelectCategory";
import InputSearch from "../../component/input/InputSearch";
import colors from "../../constant/colors";

export default function SearchByCategoryScreen({ navigation }) {
  // Route
  const route = useRoute();
  const { goods } = route.params;

  // STATE
  const [categorySelected, setCategorySelected] = useState();

  useEffect(() => {
    setCategorySelected(goodCategories);
  }, []);

  const handleCategory = (isValue, followByUser) => {
    const changeCategory = categorySelected.map((el) => {
      return el?.isValue === isValue
        ? Object.assign({}, el, { followByUser })
        : el;
    });
    setCategorySelected(changeCategory);
  };

  return (
    <View style={styles.container}>
      <HeaderComponent title="Catégorie" navigation={navigation} />
      <View style={{ marginHorizontal: 18, marginVertical: 9 }}>
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
    backgroundColor: colors.text_white,
    flex: 1,
  },
});
