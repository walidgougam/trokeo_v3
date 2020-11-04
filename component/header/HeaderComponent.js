import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  Platform,
} from "react-native";
import { ArrowLeftIcon, WhiteDotIcon } from "../../assets/icon/Icon";
import normalize from "react-native-normalize";
import colors from "../../constant/colors";
import ModalDeleteMessage from "../modal/ModalDeleteMessage";
import axios from "axios";
import { IOS_URL, ANDROID_URL } from "../../API";

export default function HeaderComponent({
  navigation,
  title,
  message,
  editNotification,
  deleteMessage,
  recieverId,
  fromChatScreen,
}) {
  //STATE
  const [showModalDelete, setShowModalDelete] = useState(false);

  const handleModalMessage = async (reciever, type) => {
    const sender = await AsyncStorage.getItem("userId");
    console.log(sender, "sendeer");
    console.log(reciever, "reciever");
    //DELETE
    if (type === "delete") {
      await axios({
        method: "DELETE",
        url:
          Platform.OS === "ios"
            ? `${IOS_URL}/chat/deletechat/${sender}/${reciever}`
            : `${ANDROID_URL}/chat/deletechat/${sender}/${reciever}`,
      })
        .then((res) => {
          deleteMessage();
          navigation.goBack();
        })
        .catch((err) => {
          console.log(err, "-----error delete message-----");
        });
    }
    //BOOKED
    else if (type === "booked") {
      await axios({
        method: "POST",
        url:
          Platform.OS === "ios"
            ? `${IOS_URL}/product/bookedproduct`
            : `${ANDROID_URL}/product/bookedproduct`,
      })
        .then((res) => {
          deleteMessage();
          navigation.goBack();
        })
        .catch((err) => {
          console.log(err, "-----error delete message-----");
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
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              navigation.goBack();
              editNotification && editNotification();
            }}
            hitSlop={expand_clickable_area}
          >
            <ArrowLeftIcon />
          </TouchableOpacity>
          <Text style={text_title}>{title}</Text>
        </View>
        {(message || fromChatScreen) && (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              setShowModalDelete(!showModalDelete);
            }}
            hitSlop={expand_clickable_area}
          >
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
    backgroundColor: colors.main_green,
    height: normalize(70, "height"),
    justifyContent: "flex-end",
  },
  wrapper_header_title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: normalize(13),
    marginHorizontal: normalize(11),
  },
  text_title: {
    fontSize: normalize(18, "fontSize"),
    // ...fontStyles.bold,
    color: colors.text_white,
    marginLeft: normalize(27),
  },
  expand_clickable_area: { top: 10, bottom: 10, left: 10, right: 10 },
});
