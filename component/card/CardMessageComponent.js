import React, { useState, useeffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage,
  Platform,
} from "react-native";
import axios from "axios";
import { IOS_URL, ANDROID_URL } from "../../API/API";
//PICTURE
import { GreyDotIcon } from "../../assets/icon/Icon.js";
import { noImage } from "../../assets/image/noImage.png";
//STYLES
import normalize from "react-native-normalize";
import Colors from "../../constant/colors";
import fontStyles from "../../constant/fonts";
import { loadFont } from "../../assets/Autre";
//COMPONENT
import ModalDeleteMessage from "../modal/ModalDeleteMessage";
import NoImageByCategory from "../picture/NoImageByCategory";

export default function CardMessageComponent({
  pictureProduct,
  createdAt,
  message,
  sender,
  titleProduct,
  recieverId,
  deleteMessage,
  category,
}) {
  //STATE
  const [showModalDelete, setShowModalDelete] = useState(false);

  useEffect(() => {
    loadFont();
  });

  const displayHour = () => {
    const hour = createdAt.slice(11, 16);
    return hour;
  };

  const handleModalMessage = async (reciever, type) => {
    const sender = await AsyncStorage.getItem("userId");
    //deleteMessage
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
        })
        .catch((err) => {
          console.log(err, "-----error delete message-----");
        });
    }
  };

  // STYLES
  const {
    container,
    image,
    name_sender,
    title_product,
    _message,
    expand_clickable_area,
  } = styles;
  return (
    <View style={container}>
      <View style={{ flexDirection: "row" }}>
        {pictureProduct ? (
          <Image style={image} source={{ uri: pictureProduct?.uri }} />
        ) : (
          <NoImageByCategory
            icon={category}
            width={normalize(24)}
            height={normalize(18)}
          />
        )}
        <View style={{ marginLeft: 10 }}>
          <Text style={name_sender}>{sender}</Text>
          <Text style={title_product}>{titleProduct}</Text>
          <Text style={_message} numberOfLines={1}>
            {displayHour()} - {message}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={fontStyles.activeOpacity}
        hitSlop={expand_clickable_area}
        onPress={() => setShowModalDelete(!showModalDelete)}
      >
        <GreyDotIcon />
        <GreyDotIcon />
        <GreyDotIcon />
      </TouchableOpacity>
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
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: normalize(26),
  },
  image: {
    width: normalize(84, "width"),
    height: 68, // rendre responsive avec autre que normalize
    borderRadius: normalize(4),
  },
  name_sender: {
    fontSize: normalize(12, "fontSize"),
    fontFamily: "bold",
    lineHeight: normalize(20),
    color: Colors.black.text_description_black,
  },
  title_product: {
    fontSize: normalize(11, "fontSize"),
    fontFamily: "regular",
    lineHeight: normalize(20),
    color: Colors.black.text_description_black,
  },
  _message: {
    fontSize: 11,
    lineHeight: 20,
    fontFamily: "regular",
    width: normalize(216, "width"),
    marginTop: normalize(6),
  },
  expand_clickable_area: { top: 10, bottom: 10, left: 10, right: 10 },
});
