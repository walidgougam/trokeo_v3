import React, {useEffect} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../constant/colors';
import normalize from 'react-native-normalize';
import fontStyles from '../../constant/fonts';
import {loadFont} from '../../assets/Autre';

export default function BtnHomeToggle({
  changeFocus,
  focus,
  title,
  lengthGoods,
  lengthServices,
  fromScreenWithProduct,
}) {
  useEffect(() => {
    loadFont();
  });

  //STYLES
  const {btn, text_btn} = styles;
  return (
    <TouchableOpacity
      activeOpacity={fontStyles.activeOpacity}
      onPress={changeFocus}
      style={[
        btn,
        {
          borderBottomWidth: focus ? 2 : null,
          borderBottomColor: focus ? Colors.green.main : null,
        },
      ]}>
      <Text
        style={[
          text_btn,
          {
            color: focus ? Colors.green.main : Colors.grey.icon_profile_grey,
          },
        ]}>
        {!fromScreenWithProduct
          ? title
          : `${title} ${
              title === 'Biens'
                ? lengthGoods
                  ? `(${lengthGoods})`
                  : ''
                : lengthServices
                ? `(${lengthServices})`
                : ''
            }`}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: '50%',
    justifyContent: 'center',
  },
  text_btn: {
    textAlign: 'center',
    fontSize: normalize(16, 'fontSize'),
    lineHeight: normalize(20),
    // fontFamily: "bold",
  },
});
