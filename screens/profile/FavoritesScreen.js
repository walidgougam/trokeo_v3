import React from "react";
import { View, Text, SafeAreaView, Button } from "react-native";

export default function FavoritesScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Button title="goBack" onPress={() => navigation.goBack()} />
      <Text>FavoritesScreen</Text>
    </SafeAreaView>
  );
}
