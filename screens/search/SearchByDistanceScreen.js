import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { goodsCondition } from "../../helpers";
import { useRoute } from "@react-navigation/native";

import HeaderComponent from "../../component/header/HeaderComponent";
import CardSelectCategory from "../../component/card/CardSelectCategory";
import InputSearch from "../../component/input/InputSearch";
import colors from "../../constant/colors";

export default function SearchByDistanceScreen({ navigation }) {
  // const route = useRoute();
  // const { goods } = route.params;

  const distance = ["5km", "10km", "15km", "20km", "25km"];
  return (
    <View style={styles.container}>
      <HeaderComponent title="Etat" navigation={navigation} />
      <FlatList
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={styles.wrapper_list}
        data={distance}
        renderItem={({ item }) => {
          return <CardSelectCategory title={`<  ${item}`} />;
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
