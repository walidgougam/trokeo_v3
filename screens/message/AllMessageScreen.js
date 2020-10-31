import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  Platform,
  FlatList,
} from "react-native";
import colors from "../../constant/colors";
import normalize from "react-native-normalize";
// import { allMessage } from "../../helpersDataBase";
import fontStyles from "../../constant/fonts";
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";
import { IOS_URL, ANDROID_URL } from "../../API";
// import ModalDeleteMessage from "../../component/modal/ModalDeleteMessage";
// import { MenuProvider } from "react-native-popup-menu";

import CardMessageComponent from "../../component/card/CardMessageComponent";

export default function AllMessageScreen({ navigation }) {
  //STATE
  const [allMessage, setAllMessage] = useState([]);

  // FOCUS ON SCREEN
  const isFocuser = useIsFocused();

  const goToChat = (productPicture, recieverId, titleProduct) => {
    return navigation.navigate("Chat", {
      productPicture,
      recieverId,
      titleProduct,
    });
  };
  // productPicture: imageProduct[0].uri,
  // titleProduct,
  // recieverId: userData._id,
  // recieverName: userData.firstName,

  const getAllRecieverChat = async () => {
    const userid = await AsyncStorage.getItem("userId");
    await axios({
      method: "GET",
      url:
        Platform.OS === "ios"
          ? `${IOS_URL}/chat/allrecieverchat/${userid}`
          : `${ANDROID_URL}/chat/allrecieverchat/${userid}`,
    })
      .then((res) => {
        setAllMessage(res?.data?.chat);
      })
      .catch((err) => {
        console.log(err, "err on getallrecieverchat");
      });
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getAllRecieverChat();
    }

    return () => {
      mounted = false;
    };
  }, [isFocuser]);

  // STYLES
  const { container, _header, text_title, wrapper_allmessage } = styles;
  return (
    <View style={container}>
      <View style={_header}>
        <Text style={text_title}>Messages</Text>
      </View>
      <View style={wrapper_allmessage}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={allMessage}
          // contentContainerStyle={}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() =>
                goToChat(
                  item?.pictureProduct,
                  item?.reciever?._id,
                  item?.titleProduct
                )
              }
            >
              {console.log(item._id, "-------wwwwidwwww------")}
              <CardMessageComponent
                sender={item?.reciever?.firstName}
                message={item?.messages[item.messages.length - 1]?.text}
                picture={item?.reciever?.userPicture}
                createdAt={item?.messages[item.messages.length - 1]?.createdAt}
                titleProduct={item?.titleProduct}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item?._id}
        />
      </View>
      {/* <MenuProvider>
        <ModalDeleteMessage />
      </MenuProvider> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background_white,
    flex: 1,
  },
  _header: {
    backgroundColor: colors.main_green,
    height: normalize(70, "height"),
    justifyContent: "flex-end",
  },
  text_title: {
    marginBottom: normalize(13),
    fontSize: normalize(18, "fontSize"),
    // ...fontStyles.bold,
    lineHeight: 20,
    color: colors.text_white,
    marginLeft: normalize(11),
  },
  wrapper_allmessage: {
    marginHorizontal: normalize(12),
    marginBottom: normalize(97),
  },
});
