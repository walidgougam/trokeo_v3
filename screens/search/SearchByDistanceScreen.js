import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import { distance } from "../../helpers";
import HeaderComponent from "../../component/header/HeaderComponent";
import CardSelectCategory from "../../component/card/CardSelectCategory";
import colors from "../../constant/colors";

export default function SearchByDistanceScreen({ navigation }) {
  // STATE
  const [distanceSelected, setDistanceSelected] = useState();

  useEffect(() => {
    setDistanceSelected(distance);
  }, []);

  const handleDistance = (km, isSelected) => {
    console.log(km, "km");
    console.log(isSelected, "isselected");
    const changeDistance = distanceSelected.map((el) => {
      return el?.km === km ? Object.assign({}, el, { isSelected }) : el;
    });
    setDistanceSelected(changeDistance);
  };

  return (
    <View style={styles.container}>
      <HeaderComponent title="Etat" navigation={navigation} />
      <FlatList
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={styles.wrapper_list}
        data={distanceSelected}
        renderItem={({ item }) => {
          return (
            <CardSelectCategory
              title={`<  ${item?.km}`}
              value={item?.isSelected}
              onPress={() => handleDistance(item?.km, !item?.isSelected)}
            />
          );
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
