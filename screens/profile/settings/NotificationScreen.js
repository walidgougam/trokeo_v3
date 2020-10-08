import React, { useState } from "react";
import { View, Text, FlatList, Switch, StyleSheet } from "react-native";
import colors from "../../../constant/colors";
import normalize from "react-native-normalize";
import fontStyles from "../../../constant/fonts";
import css from "../../../constant/css";

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

  const {
    container,
    wrapper_title,
    _title,
    _description,
    wrapper_switch_by_line,
    _label,
  } = styles;
  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent navigation={navigation} />
      <View style={container}>
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
                      trackColor={{ false: "#0091FF", true: "#C4E5FF" }}
                      thumbColor={item?.statePush ? "#D8D8D8" : "#9E9E9E"}
                      ios_backgroundColor="#D8D8D8"
                      // color={colors.switch_btn_blue}
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
            borderBottomColor: "black",
            borderBottomWidth: normalize(1),
            marginHorizontal: normalize(-18),
          }}
        ></View>
        <View>
          <View style={[wrapper_title, { marginTop: 24 }]}>
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
                      trackColor={{ false: "#0091FF", true: "#C4E5FF" }}
                      thumbColor={item.stateEmail ? "#D8D8D8" : "#9E9E9E"}
                      ios_backgroundColor="#D8D8D8"
                      // color={colors.switch_btn_blue}
                      onValueChange={() => onToggleSwitch(index, "email")}
                      value={item.stateEmail}
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
  container: {
    flex: 1,
    marginHorizontal: normalize(18),
  },
  wrapper_title: {
    marginBottom: normalize(26),
  },
  _title: {
    fontSize: normalize(14, "fontSize"),
    ...fontStyles.semiBold,
    lineHeight: normalize(20),
    color: colors.text_description_black,
  },
  _description: {
    color: colors.text_description_black,
    fontSize: normalize(11, "fontSize"),
    ...fontStyles.regular,
    lineHeight: normalize(20),
  },
  wrapper_switch_by_line: {
    ...css.row_space_between,
    marginBottom: normalize(21),
    alignItems: "center",
  },
  _label: {
    fontSize: normalize(13, "fontSize"),
    ...fontStyles.regular,
    lineHeight: normalize(20),
    color: colors.text_description_black,
  },
});
