import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
//PICTURE
import {LogoTrokeo} from '../../assets/image/images';
import {ArrowLeftIcon} from '../../assets/icon/Icon';
//STYLE
import normalize from 'react-native-normalize';
import {Colors, BackgroundColors} from '../../constant/colors';
import fontStyles from '../../constant/fonts';
import {loadFont} from '../../assets/Autre';
import {Spacings} from '../../constant/layout';
import {data} from '../../constant/content';

export default function EcoCitizenScreen({navigation}) {
  useEffect(() => {
    loadFont();
  });
  // STYLES
  const {
    wrapper_header,
    arrow_left,
    _logo,
    _image,
    _title,
    _description,
    wrapper_description,
    expand_clickable_area,
  } = styles;
  return (
    <ScrollView style={{backgroundColor: BackgroundColors.white.absolute}}>
      <View style={wrapper_header}>
        <TouchableOpacity
          activeOpacity={fontStyles.activeOpacity}
          hitSlop={{expand_clickable_area}}
          style={arrow_left}
          onPress={() => navigation.goBack()}>
          <ArrowLeftIcon />
        </TouchableOpacity>
        <View style={_logo}>
          <LogoTrokeo
            width={normalize(266, 'width')}
            height={normalize(99, 'height')}
          />
        </View>
      </View>
      {data.map((info, index) => {
        return (
          <>
            <View style={[_image, index === 0 && {marginTop: normalize(29)}]}>
              {info.image}
            </View>
            <View style={wrapper_description}>
              <Text style={_title}>{info.title}</Text>
              <Text style={_description}>{info.description}</Text>
            </View>
          </>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper_header: {
    backgroundColor: BackgroundColors.green.main,
    height: normalize(230),
    alignItems: 'center',
  },
  arrow_left: {
    position: 'absolute',
    top: normalize(31),
    left: normalize(11),
  },
  _logo: {
    marginTop: normalize(79),
  },
  _image: {
    alignItems: 'center',
    marginBottom: normalize(37),
  },
  wrapper_description: {
    marginHorizontal: normalize(22),
  },
  _title: {
    fontSize: normalize(20, 'fontSize'),
    lineHeight: normalize(20),
    marginBottom: normalize(Spacings.L),
    color: Colors.title_eco_citizen,
    // fontFamily: 'semiBold',
  },
  _description: {
    fontSize: normalize(15, 'fontSize'),
    color: Colors.title_eco_citizen,
    lineHeight: normalize(20),
    marginBottom: normalize(20),
    // fontFamily: 'regular',
  },
  expand_clickable_area: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
});
