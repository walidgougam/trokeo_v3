import React, { useState } from "react";
import { View, Text, Picker, Platform } from "react-native";

export default function PickerSelect({ handleSelect, selectedLabel, data }) {
  return (
    <View>
      <Picker
        onValueChange={handleSelect}
        selectedValue={selectedLabel}
        itemStyle={
          Platform.OS === "ios" && {
            fontSize: 12,
            position: "relative",
            top: -100,
            backgroundColor: "transparent",
            color: "#3A3A3A",
          }
        }
        style={{
          height: 30,
          padding: 10,
        }}
      >
        {data.map((condition, index) => {
          return (
            <Picker.item
              label={condition}
              value={condition}
              color="#3A3A3A"
            ></Picker.item>
          );
        })}
      </Picker>
    </View>
  );
}
