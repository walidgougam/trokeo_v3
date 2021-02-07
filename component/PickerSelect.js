import React, {useState} from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';

export default function PickerSelect({handleSelect, selectedLabel, data}) {
  return (
    <View>
      <Picker
        onValueChange={handleSelect}
        selectedValue={selectedLabel}
        itemStyle={Platform.OS === 'ios' && styles.item_style}
        style={styles.picker_style}>
        {data.map((condition, index) => {
          return (
            <Picker.item
              label={condition}
              value={condition}
              color="#3A3A3A"></Picker.item>
          );
        })}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  item_style: {
    fontSize: 12,
    position: 'relative',
    top: -100,
    backgroundColor: 'transparent',
    color: '#3A3A3A',
  },
  picker_style: {
    height: 30,
    padding: 10,
  },
});
