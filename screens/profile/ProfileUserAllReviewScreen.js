import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../constant/colors";

import HeaderComponent from "../../component/header/HeaderComponent";
import CardReview from "../../component/card/CardReview";
import { FlatList } from "react-native-gesture-handler";

export default function ProfileUserAllReviewScreen({ navigation }) {
  const array1 = [1, 4, 9, 16, 32, 3, 23, 9, 16, 32, 3, 23, 44];

  // STYLES
  const { container } = styles;
  return (
    <View style={container}>
      <HeaderComponent navigation={navigation} title="Avis" />
      <FlatList
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={styles.wrapper_list}
        data={array1.map((x) => x * 2)}
        renderItem={({ item, index }) => {
          return <CardReview item={item} />;
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_white,
  },
});
