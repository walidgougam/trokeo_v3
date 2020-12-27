import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
  Platform,
  Modal,
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
// a supprumer
import io from "socket.io-client";
import axios from "axios";
import { IOS_URL, ANDROID_URL } from "../../API/API";
import { Button, Snackbar } from "react-native-paper";
//PICTURE
import { UploadPictureIcon, SendMessageIcon } from "../../assets/icon/Icon";
//STYLES
import {Colors, BackgroundColors} from "../../constant/colors";
import fontStyles from "../../constant/fonts";
//COMPONENT
import HeaderComponent from "../../component/header/HeaderComponent";
import CardHeaderChat from "../../component/card/CardHeaderChat";
import { Spacings } from "../../constant/layout";

export default function ChatScreen({ navigation }) {
  // ROUTE
  const route = useRoute();
  const { fromAllMessage, fromProductDetail } = route?.params;
  const product = fromAllMessage.product;
  const senderId = fromAllMessage.senderId;
  const recieverId = fromAllMessage.recieverId;
  const recieverName = fromProductDetail?.recieverName;

  // STATE
  const [deletedMessage, setDeletedMessage] = useState(false);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [recieverNameState, setRecieverNameState] = useState("");

  // SOCKET
  const socket = io(`${ANDROID_URL}`, {});

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
      setRecieverNameState(recieverName);
      setLoading(false);
    }

    return () => {
      mounted = false;
    };
  }, [isFocuser]);

  const goToReviewScreen = () => {
    return navigation.navigate("Review", { product: product });
  };

  const renderUploadPictureIcon = () => {
    return (
      <TouchableOpacity
        activeOpacity={fontStyles.activeOpacity}
        style={{
          alignSelf: "center",
          marginLeft: Spacings.L,
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
        activeOpacity={fontStyles.activeOpacity}
        style={{
          alignSelf: "center",
          marginRight: Spacings.L,
        }}
      >
        <SendMessageIcon />
      </TouchableOpacity>
    );
  };

  const onSend = async (msg) => {
    const userId = await AsyncStorage.getItem("userId");
    setMessages((prevState) => GiftedChat.append(prevState, msg));
    socket.emit("newMessage", "sent");
    console.log(userId, senderId, "blabla");

    await axios({
      method: "POST",
      url:
        Platform.OS === "ios"
          ? `${IOS_URL}/chat/postchat`
          : `${ANDROID_URL}/chat/postchat`,
      data: {
        sender: userId,
        reciever: senderId !== userId ? senderId : recieverId,
        product: product?._id,
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
        Platform.OS === "ios"
          ? `${IOS_URL}/chat/getChat/${senderId}/${recieverId}`
          : `${ANDROID_URL}/chat/getChat/${senderId}/${recieverId}`
      );
      if (response) {
        setMessages(() => GiftedChat.append([], response.data).reverse());
        setLoading(false);
      }
    } catch (error) {
      console.log(error, "error on get message");
    }
  };

  const onDismissSnackBar = () => setDeletedMessage(false);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getMessage();
    }
    return () => {
      mounted = false;
    };
  }, []);

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
      <HeaderComponent
        navigation={navigation}
        title={recieverNameState}
        message
        productId={product?._id}
        recieverId={recieverId}
        fromChatScreen={true}
        deleteMessage={() => {
          getMessage();
          setDeletedMessage(true);
        }}
      />
      <CardHeaderChat
        navigation={navigation}
        product={product}
        userId={user?.id}
        recieverId={recieverId}
      />
      {console.log(user, "useruser")}
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
      <>
        <Snackbar
          style={{
            backgroundColor: BackgroundColors.green.main,
            color: Colors.white.absolute,
          }}
          theme={{ colors: { accent: Colors.white.absolute} }}
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
    flex: 1,
    backgroundColor: BackgroundColors.white.absolute,
  },
  ChatMessageSytemMessageContainer: {
    backgroundColor: "pink",
  },
  ChatMessageSystemMessageText: {
    backgroundColor: "purple",
  },
});
