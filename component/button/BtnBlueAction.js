import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
//STYLE
import normalize from 'react-native-normalize';
import css from '../../constant/css';
import fontStyles from '../../constant/fonts';
import {loadFont} from '../../assets/Autre';

export default function BtnBlueAction({
  onPress,
  color,
  title,
  backgroundColor,
  marginBottom,
  width,
}) {
  useEffect(() => {
    loadFont();
  });
  //STYLES
  const {_btn, _title} = styles;
  return (
    <TouchableOpacity
      activeOpacity={fontStyles.activeOpacity}
      style={[
        _btn,
        {
          backgroundColor,
          width,
        },
      ]}
      onPress={onPress}>
      <Text style={[_title, {color}]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  _btn: {
    height: normalize(42, 'height'),
    justifyContent: 'center',
    borderRadius: normalize(26, 'borderRadius'),
  },
  _title: {
    ...css.btn_login, ////// "open sans semi bold " if from  gainvisibilityscreen
    // fontFamily: "regular",
    textAlign: 'center',
  },
});
