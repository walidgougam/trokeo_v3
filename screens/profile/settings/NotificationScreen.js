import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Switch,
  StyleSheet,
  AsyncStorage,
} from "react-native";
import colors from "../../../constant/colors";
import normalize from "react-native-normalize";
import fontStyles from "../../../constant/fonts";
import css from "../../../constant/css";
import axios from "axios";
import { IOS_URL, ANDROID_URL } from "../../../API";
import { ActivityIndicator } from "react-native-paper";

import HeaderComponent from "../../../component/header/HeaderComponent";

export default function NotificationScreen({ navigation }) {
  const [updatePush, setUpdatePush] = useState(false);
  const [expiredPush, setExpiredPush] = useState(false);
  const [bookedPush, setBookedPush] = useState(false);
  const [newMessagePush, setNewMessagePush] = useState(false);
  const [updateEmail, setUpdateEmail] = useState(false);
  const [expiredEmail, setExpiredEmail] = useState(false);
  const [bookedEmail, setBookedEmail] = useState(false);
  const [newMessageEmail, setNewMessageEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getNotificationFromDb();
  }, []);

  const onToggleSwitch = (index, type) => {
    if (index === 0 && type === "push") {
      setUpdatePush(!updatePush);
    } else if (index === 1 && type === "push") {
      setExpiredPush(!expiredPush);
    } else if (index === 2 && type === "push") {
      setBookedPush(!bookedPush);
    } else if (index === 3 && type === "push") {
      setNewMessagePush(!newMessagePush);
    } else if (index === 0 && type === "email") {
      setUpdateEmail(!updateEmail);
    } else if (index === 1 && type === "email") {
      setExpiredEmail(!expiredEmail);
    } else if (index === 2 && type === "email") {
      setBookedEmail(!bookedEmail);
    } else if (index === 3 && type === "email") {
      setNewMessageEmail(!newMessageEmail);
    }
  };

  const switchNotification = [
    {
      title: "Mises à jour",
      statePush: updatePush,
      stateEmail: updateEmail,
    },
    {
      title: "Expiration de mes annonces",
      statePush: expiredPush,
      stateEmail: expiredEmail,
    },
    {
      title: "Réservation d’un bien",
      statePush: bookedPush,
      stateEmail: bookedEmail,
    },
    {
      title: "Nouveaux messages sur ma messagerie",
      statePush: newMessagePush,
      stateEmail: newMessageEmail,
    },
  ];

  const getNotificationFromDb = async () => {
    const userId = await AsyncStorage.getItem("userId");
    await axios({
      method: "GET",
      url:
        Platform.OS === "ios"
          ? `${IOS_URL}/user/getnotification/${userId}`
          : `${ANDROID_URL}/user/getnotification/${userId}`,
    })
      .then((res) => {
        setUpdatePush(res?.data?.notification[0]?.updatePush);
        setExpiredPush(res?.data?.notification[0]?.expiredPush);
        setBookedPush(res?.data?.notification[0]?.bookedPush);
        setNewMessagePush(res?.data?.notification[0]?.newMessagePush);
        setUpdateEmail(res?.data?.notification[0]?.updateEmail);
        setExpiredEmail(res?.data?.notification[0]?.expiredEmail);
        setBookedEmail(res?.data?.notification[0]?.bookedEmail);
        setNewMessageEmail(res?.data?.notification[0]?.newMessageEmail);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err, "error on getNotificationFromDB");
      });
  };

  const editNotification = async () => {
    const userId = await AsyncStorage.getItem("userId");
    await axios({
      method: "POST",
      url:
        Platform.OS === "ios"
          ? `${IOS_URL}/user/editnotification`
          : `${ANDROID_URL}/user/editnotification`,
      data: {
        userId,
        updatePush,
        expiredPush,
        bookedPush,
        newMessagePush,
        updateEmail,
        expiredEmail,
        bookedEmail,
        newMessageEmail,
      },
    })
      .then((res) => {
        console.log("result on follow good ");
      })
      .catch((err) => {
        console.log(err, "error on follow good");
      });
  };

  const {
    _container,
    wrapper_title,
    _title,
    _description,
    wrapper_switch_by_line,
    _label,
  } = styles;
  return isLoading ? (
    <ActivityIndicator size="large" style={{ flex: 1 }} />
  ) : (
    <View style={{ flex: 1 }}>
      <HeaderComponent
        navigation={navigation}
        editNotification={editNotification}
      />
      <View style={_container}>
        <View>
          <View style={[wrapper_title, { marginTop: 13 }]}>
            <Text style={_title}>Notifications push</Text>
            <Text style={_description}>
              Sélectionnez les notifications à afficher sur votre téléphone.
            </Text>
          </View>
          <View
            style={{
              paddingBottom: 14,
            }}
          >
            <FlatList
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              // contentContainerStyle={styles.wrapper_list}
              data={switchNotification}
              renderItem={({ item, index }) => {
                return (
                  <View style={wrapper_switch_by_line}>
                    <Text style={_label}>{item?.title}</Text>
                    <Switch
                      trackColor={{ false: "pink", true: "#C4E5FF" }}
                      thumbColor={item?.statePush ? "#0091FF" : "#9E9E9E"}
                      ios_backgroundColor="#D8D8D8"
                      onValueChange={() => onToggleSwitch(index, "push")}
                      value={item?.statePush}
                    />
                  </View>
                );
              }}
              keyExtractor={(item) => item}
            />
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "#979797",
            borderBottomWidth: normalize(1),
            marginHorizontal: normalize(-18),
          }}
        ></View>
        <View>
          <View style={[wrapper_title, { marginTop: normalize(24) }]}>
            <Text style={_title}>Notifications par e-mail</Text>
            <Text style={_description}>
              Sélectionnez les notifications à afficher dans votre boite mail.
            </Text>
          </View>
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
              // contentContainerStyle={styles.wrapper_list}
              data={switchNotification}
              renderItem={({ item, index }) => {
                return (
                  <View style={wrapper_switch_by_line}>
                    <Text style={_label}>{item.title}</Text>
                    <Switch
                      trackColor={{ false: "purple", true: "#C4E5FF" }}
                      thumbColor={item?.stateEmail ? "#0091FF" : "#9E9E9E"}
                      ios_backgroundColor="#D8D8D8"
                      onValueChange={() => onToggleSwitch(index, "email")}
                      value={item?.stateEmail}
                    />
                  </View>
                );
              }}
              keyExtractor={(item) => item}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    marginHorizontal: normalize(18),
  },
  wrapper_title: {
    marginBottom: normalize(26),
  },
  _title: {
    fontSize: normalize(14, "fontSize"),
    // ...fontStyles.semiBold,
    lineHeight: normalize(20),
    color: colors.text_description_black,
  },
  _description: {
    color: colors.text_description_black,
    fontSize: normalize(11, "fontSize"),
    // ...fontStyles.regular,
    lineHeight: normalize(20),
  },
  wrapper_switch_by_line: {
    ...css.row_space_between,
    marginBottom: normalize(21),
    alignItems: "center",
  },
  _label: {
    fontSize: normalize(13, "fontSize"),
    // ...fontStyles.regular,
    lineHeight: normalize(20),
    color: colors.text_description_black,
  },
});
