import React from "react";
import { View, Text } from "react-native";
import { Input } from "react-native-elements";

export default function InputBottomComponent() {
  return (
    <Input
      placeholder="INPUT WITH ERROR MESSAGE"
      errorStyle={{ color: "red" }}
      errorMessage="ENTER A VALID ERROR HERE"
      inputStyle={{ color: "green" }}
      inputContainerStyle={{
        paddingLeft: 20,
        color: "blue",
        borderBottomColor: "blue",
      }}
      //   InputComponent={{ width: "100%" }}
    />
  );
}
