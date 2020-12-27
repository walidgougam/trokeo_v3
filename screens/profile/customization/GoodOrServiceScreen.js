import React, { useEffect, useState, useContext } from "react";
import {
  View,
  StyleSheet,
  AsyncStorage,
  Platform,
  ActivityIndicator,
} from "react-native";
import { Context as AuthContext } from "../../../context/AuthContext";
import { useIsFocused } from "@react-navigation/native";
//API
import axios from "axios";
import { IOS_URL, ANDROID_URL } from "../../../API/API";
//COMPONENT
import CardWithRightIcon from "../../../component/card/CardWithRightIcon";
import HeaderComponent from "../../../component/header/HeaderComponent";

export default function GoodOrServiceScreen({ navigation }) {
  //STATE
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);

  // CONTEXT
  const { state, getSpecificUserContext } = useContext(AuthContext);

  // FOCUS ON SCREEN
  const isFocuser = useIsFocused();

  useEffect(() => {
    (async () => {
      const userid = await AsyncStorage.getItem("userId");
      setUserId(userid);
      await axios({
        method: "GET",
        url:
          Platform.OS === "ios"
            ? `${IOS_URL}/user/${userid}`
            : `${ANDROID_URL}/user/${userid}`,
      })
        .then((res) => {
          response = res?.data?.user;
          getSpecificUserContext(res?.data?.user);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err, "error on  on get user category");
        });
    })();
  }, []);

  //STYLES
  const { _container } = styles;
  return loading ? (
    <ActivityIndicator size="large" style={{ flex: 1 }} />
  ) : (
    <View style={_container}>
      <HeaderComponent navigation={navigation} />
      <CardWithRightIcon
        title="Biens"
        onPress={() =>
          navigation.navigate("Follow", {
            from: "good",
            userId,
          })
        }
      />
      <CardWithRightIcon
        title="Services"
        onPress={() =>
          navigation.navigate("Follow", {
            from: "service",
            userId,
          })
        }
      />
    </View>
  );
}
var styles = StyleSheet.create({
  _container: {
    flex: 1,
  },
});
