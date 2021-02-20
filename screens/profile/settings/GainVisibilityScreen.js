import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
//COMPONENT
import HeaderComponent from '../../../component/header/HeaderComponent';
import BtnBluAction from '../../../component/button/BtnBlueAction';
import SwiperGainVisibilityComponent from '../../../component/SwiperGainVisibilityComponent';
//STYLE
import normalize from 'react-native-normalize';
import fontStyles from '../../../constant/fonts';
import {Colors, BackgroundColors} from '../../../constant/colors';
import {loadFont} from '../../../assets/Autre';
import {Spacings} from '../../../constant/layout';

export default function GainVisibilityScreen({navigation}) {
  useEffect(() => {
    loadFont();
  });
  //STYLES
  const {container, wrapper_white_background, _title} = styles;
  return (
    <View style={container}>
      <HeaderComponent navigation={navigation} />
      <View style={wrapper_white_background}>
        <View>
          <Text style={_title}>
            Gagnez en visibilité et multipliez vos chances de troquer !
          </Text>
          <View style={{marginTop: normalize(35)}}>
            <SwiperGainVisibilityComponent />
          </View>
        </View>
        <View style={{marginBottom: normalize(47)}}>
          <BtnBluAction
            title="2,99€/mois"
            color={Colors.white.absolute}
            backgroundColor={BackgroundColors.blue.btn_action}
          />
          <View style={{marginTop: normalize(Spacings.XXS)}}>
            <BtnBluAction
              title="18,99€/an"
              color={Colors.white.absolute}
              backgroundColor={BackgroundColors.blue.btn_action}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BackgroundColors.white.absolute,
  },
  wrapper_white_background: {
    marginHorizontal: normalize(15),
    flex: 1,
    justifyContent: 'space-between',
  },
  _title: {
    marginTop: normalize(13),
    color: Colors.green.title_green,
    fontSize: normalize(16, 'fontSize'),
    // fontFamily: "bold",
  },
});
