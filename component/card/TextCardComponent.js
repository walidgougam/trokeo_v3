import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../constant/colors';
import normalize from 'react-native-normalize';
import fontStyles from '../../constant/fonts';

export default function TextCardComponent({title, btn, followByUser, onPress}) {
  const {wrapper_text, _text, _btn, _title} = styles;
  return (
    <View style={wrapper_text}>
      <Text style={_text}>{title}</Text>
      {btn ? (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={fontStyles.activeOpacity}
          style={[
            _btn,
            {
              backgroundColor: followByUser
                ? Colors.btn_action
                : Colors.white.absolute,
            },
          ]}>
          <Text
            style={[
              _title,
              {color: followByUser ? Colors.white.absolute : Colors.btn_action},
            ]}>
            Suivre
          </Text>
        </TouchableOpacity>
      ) : (
        <Text>h</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper_text: {
    borderBottomColor: Colors.grey.placeholder_grey,
    borderBottomWidth: 1,
    height: normalize(50),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(25),
    flexDirection: 'row',
  },
  _text: {
    color: Colors.black.text_description_black,
    fontSize: normalize(14, 'fontSize'),
    // fontFamily: "heavy",
    lineHeight: normalize(20),
  },
  _btn: {
    marginBottom: 0,
    // height: normalize(29, "height"),
    // width: normalize(78, "width"),
    paddingVertical: 4,
    paddingHorizontal: 23,

    borderRadius: normalize(5),
    borderWidth: 1,
    borderColor: Colors.btn_action,
    justifyContent: 'center',
  },
  _title: {
    fontSize: normalize(11, 'fontSize'),
    // ...fontStyles.book,
    lineHeight: normalize(20),
    textAlign: 'center',
  },
});
