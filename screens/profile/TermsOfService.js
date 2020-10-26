import React from "react";
import { View, Text, SafeAreaView, Button } from "react-native";

export default function TermsOfService({ navigation }) {
  return (
    <SafeAreaView>
      <Button onPress={() => navigation.goBack()} title="goBack" />
      <Text>Mentions légales</Text>
      <Text>Conditions générales d'utilisation</Text>
    </SafeAreaView>
  );
}
