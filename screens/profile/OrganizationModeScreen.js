import React from "react";
import { View, Text, SafeAreaView, Button } from "react-native";

export default function OrganizationModeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Button title="goBack" onPress={() => navigation.goBack()} />
      <Text>organization mode screen</Text>
    </SafeAreaView>
  );
}
