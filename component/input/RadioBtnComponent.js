import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';
import css from '../../constant/css';
import {loadFont} from '../../assets/Autre';

export default function RadioBtnComponent({title, status, value, onPress}) {
  useEffect(() => {
    loadFont();
  });
  //STYLES
  const {_btn, text_description} = styles;
  return (
    <View style={_btn}>
      <RadioButton value={value} status={status} onPress={onPress} />
      <View>
        <Text style={text_description}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  _btn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text_description: {
    ...css.text_description,
    // fontFamily: 'roman',
    marginBottom: 0,
  },
});
