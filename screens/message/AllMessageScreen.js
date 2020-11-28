import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  Platform,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { Button, Snackbar } from "react-native-paper";
//API
import { IOS_URL, ANDROID_URL } from "../../API/API";
import axios from "axios";
//STYLES
import colors from "../../constant/colors";
import fontStyles from "../../constant/fonts";
import normalize from "react-native-normalize";
import { loadFont } from "../../assets/Autre";
//COMPONENT
import CardMessageComponent from "../../component/card/CardMessageComponent";

export default function AllMessageScreen({ navigation }) {
  //STATE
  const [isLoading, setIsLoading] = useState(true);
  const [allMessage, setAllMessage] = useState([]);
  const [deletedMessage, setDeletedMessage] = useState(false);

  // FOCUS ON SCREEN
  const isFocuser = useIsFocused();

  useEffect(() => {
    loadFont();
  });

  const goToChat = (recieverId, senderId, product) => {
    return navigation.navigate("Chat", {
      fromAllMessage: { recieverId, senderId, product },
    });
  };
  const onDismissSnackBar = () => setDeletedMessage(false);

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
      setIsLoading(false);
    }

    return () => {
      mounted = false;
    };
  }, [isFocuser]);

  // STYLES
  const { container, _header, text_title, wrapper_allmessage } = styles;

  return isLoading ? (
    <ActivityIndicator size="large" style={{ flex: 1 }} />
  ) : (
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
              activeOpacity={fontStyles.activeOpacity}
              onPress={() => {
                console.log(item, "item");
                goToChat(item?.reciever?._id, item?.sender, item?.product);
              }}
            >
              <CardMessageComponent
                deleteMessage={() => {
                  getAllRecieverChat();
                  setDeletedMessage(true);
                }}
                sender={item?.reciever?.firstName}
                message={item?.messages[item.messages.length - 1]?.text}
                pictureProduct={item?.product?.productPicture[0]}
                createdAt={item?.messages[item.messages.length - 1]?.createdAt}
                titleProduct={item?.product?.title}
                recieverId={item?.reciever?._id}
                category={item?.product?.category}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item?._id}
        />
      </View>
      <>
        <Snackbar
          style={{
            backgroundColor: colors.main_green,
            color: colors.text_white,
          }}
          theme={{ colors: { accent: colors.text_white } }}
          visible={deletedMessage}
          onDismiss={onDismissSnackBar}
          action={{
            label: "Ok",
            onPress: () => {
              // Do something
            },
          }}
        >
          Message supprimé
        </Snackbar>
      </>
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
    fontFamily: "bold",
    lineHeight: 20,
    color: colors.text_white,
    marginLeft: normalize(11),
  },
  wrapper_allmessage: {
    marginHorizontal: normalize(12),
    marginBottom: normalize(97),
  },
});
