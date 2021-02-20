import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
//STYLES
import {Colors} from '../../constant/colors';
import css from '../../constant/css';
import fontStyles from '../../constant/fonts';
import normalize from 'react-native-normalize';

export default function CardSelectCategory({title, value, onPress}) {
  //STYLES
  const {wrapper_card, text_category} = styles;
  return (
    <TouchableOpacity
      activeOpacity={fontStyles.activeOpacity}
      onPress={onPress}>
      <View style={wrapper_card}>
        <Text style={text_category}>{title}</Text>
        <RadioButton value={title} status={value ? 'checked' : 'unchecked'} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper_card: {
    ...css.row_space_between,
    ...css.border_bottom,
    alignItems: 'center',
    paddingVertical: normalize(5),
    paddingHorizontal: normalize(18),
  },
  text_category: {
    fontSize: normalize(14, 'fontSize'),
    // fontFamily: "semiBold",
    lineHeight: normalize(20),
    color: Colors.black.text_description_black,
  },
});
