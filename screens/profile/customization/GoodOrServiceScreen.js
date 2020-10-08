import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CardWithRightIcon from "../../../component/card/CardWithRightIcon";
import HeaderComponent from "../../../component/header/HeaderComponent";

export default function GoodOrServiceScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation} />
      <CardWithRightIcon
        title="Biens"
        onPress={() => navigation.navigate("Follow", { from: "good" })}
      />
      <CardWithRightIcon
        title="Services"
        onPress={() => navigation.navigate("Follow", { from: "service" })}
      />
    </View>
  );
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
