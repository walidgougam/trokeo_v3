import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderComponent from "../component/header/HeaderComponent";

export default function WorkInProgress({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation} />
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text style={{ color: "red", fontWeight: "bold", fontSize: 20 }}>
          Page en cours de construction...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
