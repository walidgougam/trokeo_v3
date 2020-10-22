import React, { useState } from "react";
import { View, Text, Picker } from "react-native";

export default function PickerSelect({ handleSelect, selectedLabel, data }) {
  return (
    <View>
      <Picker
        onValueChange={handleSelect}
        selectedValue={selectedLabel}
        style={{ borderWidth: 1, borderColor: "green" }}
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
