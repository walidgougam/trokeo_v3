import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  GiftedChat,
  InputToolbar,
  Actions,
  ActionsProps,
} from "react-native-gifted-chat";
import { useRoute } from "@react-navigation/native";
import { UploadPictureIcon, SendMessageIcon } from "../../assets/icon/Icon";

import HeaderComponent from "../../component/header/HeaderComponent";
import CardHeaderChat from "../../component/card/CardHeaderChat";

export default function ChatScreen({ navigation }) {
  // ROUTE
  const route = useRoute();
  const { productPicture, titleProduct } = route.params;

  // STATE
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: "user 1",
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "React Native",
        avatar: "https://placeimg.com/140/140/any",
      },
    },
    {
      _id: 2,
      text: "user 2",
      createdAt: new Date(),
      user: {
        _id: 1,
        name: "React Native",
        avatar: "https://placeimg.com/140/140/any",
      },
    },
  ]);

  const goToReviewScreen = () => {
    return navigation.navigate("Review", { productPicture });
  };

  const renderUploadPictureIcon = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          alignSelf: "center",
          marginLeft: 18,
        }}
      >
        <UploadPictureIcon />
      </TouchableOpacity>
    );
  };

  const customtInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          borderColor: "black",
          alignSelf: "center",
          // justifyContent: "center",
        }}
        placeholder="Ecrire votre message"
      />
    );
  };

  const renderSendMessageIcon = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => goToReviewScreen()}
        style={{
          alignSelf: "center",
          marginRight: 18,
        }}
      >
        <SendMessageIcon />
      </TouchableOpacity>
    );
  };

  const onSend = () => {
    setMessages((previousMessages) => {
      GiftedChat.append(previousMessages, {
        _id: 2,
        text: "new message",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      });
    });
  };

  // STYLES
  const { container } = styles;
  return (
    <View style={container}>
      <HeaderComponent navigation={navigation} title="Marion_b" message />
      <CardHeaderChat picture={productPicture} titleProduct={titleProduct} />
      <GiftedChat
        messages={messages}
        user={messages._id}
        // onSend={onSend}
        renderActions={() => renderUploadPictureIcon()}
        renderInputToolbar={(props) => customtInputToolbar(props)}
        renderSend={() => renderSendMessageIcon()}
        placeholderStyle={{ borderColor: "red" }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  ChatMessageSytemMessageContainer: {
    backgroundColor: "pink",
  },
  ChatMessageSystemMessageText: {
    backgroundColor: "purple",
  },
});
