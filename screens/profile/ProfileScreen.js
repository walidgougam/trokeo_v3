import React, { useEffect, useState, useContext } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  AsyncStorage,
  Text,
  Image,
} from "react-native";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import colors from "../../constant/colors";
import normalize from "react-native-normalize";
import { profileOptions } from "../../helpers";
import { user } from "../../helpersDataBase"; // remplacer par la vraier data base
import axios from "axios";
import { Context as AuthContext } from "../../context/AuthContext";
import { ProfilePictureIcon } from "../../assets/icon/Icon";
import fontStyles from "../../constant/fonts";

import HeaderNotification from "../../component/header/HeaderNotification";
import PictureProfileComponent from "../../component/picture/PictureProfileComponent";
import PictureProfileScreen from "../../component/picture/PictureProfileScreen";
import StarsComponent from "../../component/StarsComponent";
import CardWithRightIcon from "../../component/card/CardWithRightIcon";

export default function ProfileScreen({ navigation }) {
  // STATE
  const [data, setData] = useState();
  const [userData, setUserData] = useState();

  // CONTEXT
  const { state, editProfileContext, getUserContext } = useContext(AuthContext);

  // FOCUS ON SCREEN
  const isFocuser = useIsFocused();

  const getUserOnDB = async () => {
    let id = await AsyncStorage.getItem("userId");
    axios({
      method: "GET",
      url: `http://localhost:5000/user/${id}`,
    })
      .then((res) => {
        setUserData(res.data.user);
        console.log(res, "get user api from profile screen");
      })
      .catch((err) => {
        console.log(err, "error on get user api");
      });
  };

  useEffect(() => {
    getUserOnDB();
  }, [isFocuser]);

  // STYLES
  const {
    container,
    wrapper_profile_info,
    wrapper_star,
    container_section,
    pseudo,
  } = styles;
  return (
    <View style={container}>
      <HeaderNotification navigation={navigation} nothingOnHeader />
      <ScrollView>
        <View style={wrapper_profile_info}>
          {userData?.userPicture ? (
            <Image
              source={{ uri: userData?.userPicture }}
              style={{
                width: normalize(86),
                height: normalize(86),
                borderRadius: normalize(100),
                alignSelf: "center",
              }}
            />
          ) : (
            <View style={{ alignSelf: "center" }}>
              <ProfilePictureIcon
                width={normalize(86)}
                height={normalize(86)}
              />
            </View>
          )}
          <Text style={[pseudo, { fontSize: normalize(11, "fontSize") }]}>
            {userData?.firstName && userData?.lastName
              ? `${userData?.firstName}.${userData?.lastName?.substring(0, 1)}`
              : "marion.b"}
          </Text>
          <View style={wrapper_star}>
            <StarsComponent width={21} height={18} />
          </View>
        </View>
        <View style={container_section}>
          <FlatList
            data={profileOptions}
            renderItem={({ item, index }) => (
              <CardWithRightIcon
                title={item?.title}
                onPress={() =>
                  navigation.navigate(item?.onClick, {
                    data,
                    userData: userData,
                  })
                }
                fromSeeProfileCard={index === 0 ? true : false}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_white,
  },
  wrapper_profile_info: {
    alignItems: "center",
    marginTop: normalize(34),
  },
  wrapper_star: {
    flexDirection: "row",
    // justifyContent: "center",
  },
  container_section: {
    height: "100%",
    marginTop: normalize(72),
    marginBottom: normalize(54),
  },
  pseudo: {
    marginTop: normalize(12),
    color: colors.text_description_black,
    fontSize: normalize(14, "fontSize"),
    lineHeight: normalize(20),
    textAlign: "center",
    ...fontStyles.medium,
  },
});
