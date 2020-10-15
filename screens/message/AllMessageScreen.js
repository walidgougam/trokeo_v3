import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import CardMessageComponent from "../../component/card/CardMessageComponent";
import colors from "../../constant/colors";
import normalize from "react-native-normalize";
import { FlatList } from "react-native-gesture-handler";
// import { allMessage } from "../../helpersDataBase";
import fontStyles from "../../constant/fonts";
import axios from "axios";

export default function AllMessageScreen({ navigation }) {
  const [allMessage, setAllMessage] = useState([]);
  const goToChat = (picture) => {
    return navigation.navigate("Chat", {
      picture,
    });
  };

  const getAllRecieverChat = async () => {
    const userid = await AsyncStorage.getItem("userId");
    await axios({
      method: "GET",
      url: `http://localhost:5000/chat/allrecieverchat/${userid}`,
    })
      .then((res) => {
        setAllMessage(res.data.chat);
      })
      .catch((err) => {
        console.log(err, "err on getallrecieverchat");
      });
  };

  useEffect(() => {
    getAllRecieverChat();
  }, []);

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
              onPress={() => goToChat(item.picture)}
            >
              <CardMessageComponent
                sender={item?.reciever?.firstName}
                message={item?.messages[item.messages.length - 1].text}
                picture={item?.reciever?.userPicture}
                createdAt={item?.createdAt}
                titleProduct={item?.subject}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
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
    ...fontStyles.bold,
    lineHeight: 20,
    color: colors.text_white,
    marginLeft: normalize(11),
  },
  wrapper_allmessage: {
    marginHorizontal: normalize(12),
    marginBottom: normalize(97),
  },
});
