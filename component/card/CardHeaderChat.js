import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
//STYLES
import normalize from 'react-native-normalize';
import {Colors, BackgroundColors} from '../../constant/colors';
import fontStyles from '../../constant/fonts';
import {loadFont} from '../../assets/Autre';
//PICTURE
import {PositionIcon} from '../../assets/icon/Icon';
//COMPONENT
import ModalChat from '../modal/ModalChat';
import NoImageByCategory from '../picture/NoImageByCategory';
import {Spacings} from '../../constant/layout';

export default function CardHeaderChat({
  product,
  navigation,
  noFinalize,
  userId,
  recieverId,
}) {
  //STATE
  const [show, setShow] = useState(false);

  useEffect(() => {
    loadFont();
  });

  const handleModalShow = () => {
    setShow(!show);
  };

  // STYLES
  const {
    container,
    _image,
    wrapper_title,
    title_product,
    wrapper_localisation,
    _localisation,
    wrapper_picture,
    wrapper_finalize,
    text_finalize,
    shadow_wrapper,
  } = styles;
  return (
    <View
      style={[
        container,
        Platform.OS === 'ios' ? shadow_wrapper : {elevation: 9},
      ]}>
      <View style={wrapper_picture}>
        {product?.productPicture[0] ? (
          <Image
            style={_image}
            source={{uri: product?.productPicture[0]?.uri}}
          />
        ) : (
          <>
            <NoImageByCategory
              icon={product?.category}
              width={normalize(53, 'width')}
              height={normalize(43, 'height')}
              widthIcon={normalize(13, 'width')}
              heightIcon={normalize(13, 'height')}
            />
          </>
        )}

        <View style={wrapper_title}>
          <Text style={title_product}>{product?.title}</Text>
          <View style={wrapper_localisation}>
            <PositionIcon />
            <Text style={_localisation}>5.8 km</Text>
          </View>
        </View>
      </View>
      {!noFinalize && (
        <TouchableOpacity
          style={wrapper_finalize}
          onPress={() => handleModalShow()}>
          <Text style={text_finalize}>Finaliser l’échange</Text>
        </TouchableOpacity>
      )}

      <ModalChat
        product={product}
        navigation={navigation}
        handleModalShow={() => handleModalShow()}
        show={show}
        recieverId={recieverId}
        userId={userId}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderBottomColor: Colors.border_color,
    borderBottomWidth: 1,
    height: normalize(60, 'height'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(17),
    alignItems: 'center',
  },
  wrapper_picture: {
    display: 'flex',
    flexDirection: 'row',
  },
  wrapper_finalize: {
    borderColor: Colors.green.green_btn,
    borderWidth: 1,
    paddingHorizontal: normalize(17),
    paddingVertical: normalize(9),
    borderRadius: normalize(26),
  },
  text_finalize: {
    color: Colors.green.green_btn,
    fontSize: normalize(10, 'fontSize'),
    lineHeight: 20,
    // fontFamily: "semiBold",
  },
  shadow_wrapper: {
    shadowColor: '#000',
    backgroundColor: BackgroundColors.white.absolute,
    shadowOffset: {
      width: 0,
      height: normalize(1, 'height'),
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  _image: {
    width: normalize(53, 'width'),
    height: normalize(43, 'height'),
    borderRadius: normalize(4),
  },
  wrapper_title: {
    marginLeft: normalize(Spacings.XXS),
  },
  title_product: {
    fontSize: normalize(11, 'fontSize'),
    // fontFamily: 'regular',
    lineHeight: normalize(20),
    color: Colors.grey.background_reservation_grey,
  },
  wrapper_localisation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  _localisation: {
    fontSize: normalize(9, 'fontSize'),
    // fontFamily: 'regular',
    lineHeight: normalize(20),
    color: Colors.grey.likes_grey,
    marginLeft: normalize(4),
  },
});
