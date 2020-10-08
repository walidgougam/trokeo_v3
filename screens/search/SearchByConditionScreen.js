import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { goodsCondition } from "../../helpers";
import { useRoute } from "@react-navigation/native";
import colors from "../../constant/colors";

import HeaderComponent from "../../component/header/HeaderComponent";
import CardSelectCategory from "../../component/card/CardSelectCategory";

export default function SearchByConditionScreen({ navigation }) {
  // Route
  const route = useRoute();
  const { goods } = route.params;
  return (
    <View style={styles.container}>
      <HeaderComponent title="Etat" navigation={navigation} />
      <FlatList
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={styles.wrapper_list}
        data={goodsCondition}
        renderItem={({ item }) => {
          return <CardSelectCategory title={item} />;
        }}
        keyExtractor={(item) => item}
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
