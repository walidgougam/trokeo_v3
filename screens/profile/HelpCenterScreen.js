import React from "react";
import { View, Text, SafeAreaView, Button } from "react-native";

export default function HelpCenterScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Button title="goBack" onPress={() => navigation.goBack()} />
      <Text>help center screen</Text>
    </SafeAreaView>
  );
}
