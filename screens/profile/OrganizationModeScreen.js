import React from "react";
import { View, Text, SafeAreaView, Button, ScrollView } from "react-native";

export default function OrganizationModeScreen({ navigation }) {
  return (
    // <SafeAreaView>
    <>
      <Button title="goBack" onPress={() => navigation.goBack()} />
    </>
  );
}
