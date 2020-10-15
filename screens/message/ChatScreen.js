import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
} from "react-native";
import {
  GiftedChat,
  InputToolbar,
  Actions,
  ActionsProps,
  Bubble,
  Send,
} from "react-native-gifted-chat";
import { useRoute, useIsFocused } from "@react-navigation/native";
import io from "socket.io-client";
import axios from "axios";
import { UploadPictureIcon, SendMessageIcon } from "../../assets/icon/Icon";

import HeaderComponent from "../../component/header/HeaderComponent";
import CardHeaderChat from "../../component/card/CardHeaderChat";

export default function ChatScreen({ navigation }) {
  // ROUTE
  const route = useRoute();
  const { productPicture, titleProduct } = route.params;

  // STATE
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [recieverId, setRecieverId] = useState("");
  const [recieverName, setRecieverName] = useState("");

  // SOCKET
  const socket = io("http://localhost:5000", {});

  // FOCUS ON SCREEN
  const isFocuser = useIsFocused();

  // get user info from local storage
  useEffect(() => {
    let mounted = true;

    if (mounted) {
      (async () => {
        const userid = await AsyncStorage.getItem("userId");
        const username = await AsyncStorage.getItem("userName");
        setUser({
          id: userid,
          name: username,
        });
      })();

      // set params on state
      setRecieverId(route?.params?.recieverId);
      setRecieverName(route?.params?.recieverName);
    }

    return () => {
      mounted = false;
    };
  }, [isFocuser]);

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
        style={{
          alignSelf: "center",
          marginRight: 18,
        }}
      >
        <SendMessageIcon />
      </TouchableOpacity>
    );
  };

  const onSend = async (msg) => {
    setMessages((prevState) => GiftedChat.append(prevState, msg));
    socket.emit("newMessage", "sent");

    await axios({
      method: "POST",
      url: "http://localhost:5000/chat/postchat",
      data: {
        sender: user?.id,
        reciever: recieverId,
        subject: titleProduct,
        messages: msg,
      },
    })
      .then((res) => {
        console.log(res, "res on post chat");
      })
      .catch((err) => {
        console.log(err, "err on post chat");
      });

    // if (response.status === 200) {
    //   console.log(response.data);
    //   this.socket.emit("newMessage", "sent");
    // }
  };

  const getMessage = async () => {
    const userId = await AsyncStorage.getItem("userId");
    try {
      let response = await axios.get(
        `http://localhost:5000/chat/getChat/${userId}/${route?.params?.recieverId}`
      );
      if (response) {
        setMessages(() => GiftedChat.append([], response.data).reverse());
        setLoading(false);
      }
    } catch (error) {
      console.log(error, "error on get message");
    }
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getMessage();
    }
    return () => {
      mounted = false;
    };
  }, [isFocuser]);

  // STYLES
  const { container } = styles;
  return loading ? (
    <ActivityIndicator
      size="small"
      color="#0000ff"
      style={{ marginTop: 100 }}
    />
  ) : (
    <View style={container}>
      <HeaderComponent navigation={navigation} title={recieverName} message />
      <CardHeaderChat
        productPicture={productPicture}
        titleProduct={titleProduct}
      />
      <GiftedChat
        messages={messages}
        user={{
          _id: user?.id,
          name: user?.name,
        }}
        onSend={(msg) => onSend(msg)}
        alwaysShowSend={true}
        renderActions={() => renderUploadPictureIcon()}
        renderInputToolbar={(props) => customtInputToolbar(props)}
        // renderSend={() => renderSendMessageIcon()}
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
