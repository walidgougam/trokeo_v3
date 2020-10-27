import React, { useState, useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { serviceCategories, goodCategories } from "../../helpers";
import { useRoute } from "@react-navigation/native";
import { Context as AuthContext } from "../../context/AuthContext";
import colors from "../../constant/colors";

import HeaderComponent from "../../component/header/HeaderComponent";
import CardSelectCategory from "../../component/card/CardSelectCategory";

export default function SelectCategoryScreen({ navigation }) {
  //ROUTE
  const route = useRoute();
  const { goods } = route.params;
  // STATE
  const [checked, setChecked] = useState();
  // CONTEXT
  const { state, categoryProductContext } = useContext(AuthContext);

  const handleCategory = (item) => {
    console.log(item, "item is value");
    setChecked(item.isValue);
    categoryProductContext(item.titleCategory);
  };

  //STYLES
  const { _container } = styles;
  return (
    <View style={_container}>
      <HeaderComponent title="Catégorie" navigation={navigation} />
      <FlatList
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={styles.wrapper_list}
        data={goods ? goodCategories : serviceCategories}
        renderItem={({ item }) => {
          return (
            <CardSelectCategory
              title={item?.titleCategory}
              value={checked === item?.isValue}
              onPress={() => handleCategory(item)}
            />
          );
        }}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  _container: {
    backgroundColor: colors.text_white,
    flex: 1,
  },
});
