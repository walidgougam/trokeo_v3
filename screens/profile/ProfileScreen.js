import React, { useEffect, useState, useContext } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  AsyncStorage,
  Text,
  Image,
  Platform,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import colors from "../../constant/colors";
import normalize from "react-native-normalize";
import { profileOptions } from "../../helpers";
import axios from "axios";
import { Context as AuthContext } from "../../context/AuthContext";
import { ProfilePictureIcon } from "../../assets/icon/Icon";
import fontStyles from "../../constant/fonts";
import { IOS_URL, ANDROID_URL } from "../../API";

import HeaderNotification from "../../component/header/HeaderNotification";
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
      url:
        Platform.OS === "ios"
          ? `${IOS_URL}/user/${id}`
          : `${ANDROID_URL}/user/${id}`,
    })
      .then((res) => {
        setUserData(res.data.user);
      })
      .catch((err) => {
        console.log(err, "error on get user api");
      });
  };

  useEffect(() => {
    getUserOnDB();
  }, [isFocuser]);

  const renderName = () => {
    if (userData?.firstName && userData?.lastName) {
      return `${userData?.firstName}.${userData?.lastName.substring(0, 1)}`;
    } else if (!userData?.firstName && !userData?.lastName) {
      return "firstname.lastname";
    } else if (userData?.firstName && !userData?.lastName) {
      return userData?.firstName;
    }
  };

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
          {console.log(userData, "useruseruser")}
          {userData?.userPicture ? (
            <Image
              source={userData?.userPicture}
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
            {renderName()}
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
    // ...fontStyles.medium,
  },
});
