import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
//STYLE
import {Colors} from '../constant/colors';
import normalize from 'react-native-normalize';
import css from '../constant/css';
import {loadFont} from '../assets/Autre';
import {Spacings} from '../constant/layout';
//PICTURE
import {NoProductImage} from '../assets/image/images';
//COMPONENT
import BtnBlueAction from './button/BtnBlueAction';
import HeaderFilterComponent from '../component/header/HeaderFilterComponent';

export default function NoProductComponent({onPress}) {
  useEffect(() => {
    loadFont();
  });
  //STYLES
  const {_container} = styles;
  return (
    <View style={_container}>
      <View style={{marginTop: 77}}>
        <NoProductImage />
      </View>
      <View
        style={{
          marginTop: Spacings.L,
          paddingHorizontal: 45,
          alignItems: 'center',
        }}>
        <Text>Désolé, pour le moment, aucune demande</Text>
        <Text>n’a été mise en ligne</Text>
        <View style={{marginTop: normalize(25)}}>
          <BtnBlueAction
            color={Colors.white.absolute}
            backgroundColor={Colors.btn_action}
            title="Relancer"
            width={normalize(142, 'width')}
            onPress={() => onPress}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    alignItems: 'center',
    // paddingTop: normalize(61),
  },
  text: {
    ...css.text_title,
    // fontFamily: "regular",
    color: Colors.black.text_description_black,
  },
});
