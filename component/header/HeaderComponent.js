import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {IOS_URL, ANDROID_URL} from '../../API/constant';
//STYLES
import normalize from 'react-native-normalize';
import {Colors, BackgroundColors} from '../../constant/colors';
import fontStyles from '../../constant/fonts';
//COMPONENENT
import ModalDeleteMessage from '../modal/ModalDeleteMessage';
//PICTURE
import {ArrowLeftIcon, WhiteDotIcon} from '../../assets/icon/Icon';
import {Spacings} from '../../constant/layout';

export default function HeaderComponent({
  navigation,
  title,
  message,
  editNotification,
  deleteMessage,
  recieverId,
  fromChatScreen,
  productId,
}) {
  //STATE
  const [showModalDelete, setShowModalDelete] = useState(false);

  const handleModalMessage = async (reciever, type) => {
    const sender = await AsyncStorage.getItem('userId');
    //DELETE
    if (type === 'delete') {
      await axios({
        method: 'DELETE',
        url:
          Platform.OS === 'ios'
            ? `${IOS_URL}/chat/deletechat/${sender}/${reciever}`
            : `${ANDROID_URL}/chat/deletechat/${sender}/${reciever}`,
      })
        .then((res) => {
          deleteMessage();
          navigation.goBack();
        })
        .catch((err) => {
          console.log(err, '-----error delete message-----');
        });
    }
    //BOOKED
    else if (type === 'booked') {
      await axios({
        method: 'POST',
        url:
          Platform.OS === 'ios'
            ? `${IOS_URL}/product/bookedproduct`
            : `${ANDROID_URL}/product/bookedproduct`,
        data: {productId, bookedProduct: true},
      })
        .then((res) => {
          console.log(res, ' -----error booked product-----');
        })
        .catch((err) => {
          console.log(err, '-----error booked product-----');
        });
    }
  };

  const {
    _header,
    wrapper_header_title,
    text_title,
    expand_clickable_area,
  } = styles;
  return (
    <View style={_header}>
      <View style={wrapper_header_title}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            activeOpacity={fontStyles.activeOpacity}
            onPress={() => {
              navigation.goBack();
              editNotification && editNotification();
            }}
            hitSlop={expand_clickable_area}>
            <ArrowLeftIcon />
          </TouchableOpacity>
          <Text style={text_title}>{title}</Text>
        </View>
        {(message || fromChatScreen) && (
          <TouchableOpacity
            activeOpacity={fontStyles.activeOpacity}
            onPress={() => {
              setShowModalDelete(!showModalDelete);
            }}
            hitSlop={expand_clickable_area}>
            <WhiteDotIcon />
            <WhiteDotIcon />
            <WhiteDotIcon />
          </TouchableOpacity>
        )}
      </View>
      <ModalDeleteMessage
        recieverId={recieverId}
        show={showModalDelete}
        handleShow={() => setShowModalDelete(!showModalDelete)}
        handleModal={(recieverId, type) => {
          handleModalMessage(recieverId, type);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  _header: {
    backgroundColor: BackgroundColors.green.main,
    height: normalize(70, 'height'),
    justifyContent: 'flex-end',
  },
  wrapper_header_title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: normalize(Spacings.S),
    marginHorizontal: normalize(Spacings.XS),
  },
  text_title: {
    fontSize: normalize(18, 'fontSize'),
    // fontFamily: "bold",
    color: Colors.white.absolute,
    marginLeft: normalize(27),
  },
  expand_clickable_area: {top: 10, bottom: 10, left: 10, right: 10},
});
