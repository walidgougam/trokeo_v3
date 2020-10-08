import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeGeolocationComponent() {
  return (
    <View style={styles.container}>
      <Text>debut</Text>
      <Text>fin</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    justifyContent: "space-between",
  },
});
