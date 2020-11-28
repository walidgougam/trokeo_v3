import React, { useState, useEffect, useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { distance } from "../../helpers";
import { Context as AuthContext } from "../../context/AuthContext";
//COMPONENT
import HeaderComponent from "../../component/header/HeaderComponent";
import CardSelectCategory from "../../component/card/CardSelectCategory";
//STYLE
import colors from "../../constant/colors";

export default function SearchByDistanceScreen({ navigation }) {
  // STATE
  const [distanceSelected, setDistanceSelected] = useState();

  // CONTEXT
  const { state, searchFilterProductContext } = useContext(AuthContext);

  useEffect(() => {
    setDistanceSelected(distance);
  }, []);

  const handleDistance = (km, isSelected) => {
    const changeDistance = distanceSelected.map((el) => {
      return el?.km === km ? Object.assign({}, el, { isSelected }) : el;
    });
    setDistanceSelected(changeDistance);
    registerDistanceOnContext(changeDistance);
  };

  const registerDistanceOnContext = (changeDistance) => {
    let distanceFilter = [];
    for (let i = 0; i < changeDistance?.length; i++) {
      if (changeDistance[i]?.isSelected === true) {
        distanceFilter.push(changeDistance[i]?.km);
      }
      searchFilterProductContext({
        category: state?.search?.category,
        condition: state?.search?.condition,
        distance: distanceFilter,
      });
    }
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
              title={`${item?.km}`}
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
