import React, { useState, useEffect } from "react";
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

  // STATE
  const [conditionSelected, setConditionSelected] = useState();

  useEffect(() => {
    setConditionSelected(goodsCondition);
  }, []);

  const handleCondition = (titleCondition, isSelected) => {
    const changeConditon = conditionSelected.map((el) => {
      return el?.titleCondition === titleCondition
        ? Object.assign({}, el, { isSelected })
        : el;
    });
    setConditionSelected(changeConditon);
  };

  return (
    <View style={styles.container}>
      {console.log(goodsCondition, "goodcondition")}
      <HeaderComponent title="Etat" navigation={navigation} />
      <FlatList
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={styles.wrapper_list}
        data={conditionSelected}
        renderItem={({ item }) => {
          return (
            <CardSelectCategory
              title={item?.titleCondition}
              value={item?.isSelected}
              onPress={() =>
                handleCondition(item?.titleCondition, !item?.isSelected)
              }
            />
          );
        }}
        keyExtractor={(item) => item?.titleCondition}
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
