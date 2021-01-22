import React, { useEffect, useState, useContext } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Text,
  Image,
  Platform,
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage'
import { useIsFocused } from "@react-navigation/native";
import { Context as AuthContext } from "../../context/AuthContext";
//API
import axios from "axios";
import { IOS_URL, ANDROID_URL } from "../../API/API";
import { profileOptions } from "../../helpers";
//COMPONENT
import HeaderNotification from "../../component/header/HeaderNotification";
import StarsComponent from "../../component/StarsComponent";
import CardWithRightIcon from "../../component/card/CardWithRightIcon";
//PICTURE
import { ProfilePictureIcon } from "../../assets/icon/Icon";
//STYLE
import {Colors, BackgroundColors} from "../../constant/colors";
import normalize from "react-native-normalize";
import fontStyles from "../../constant/fonts";
import { loadFont } from "../../assets/Autre";

export default function ProfileScreen({ navigation }) {
  // STATE
  const [data, setData] = useState();

  // CONTEXT
  const { state, getSpecificUserContext } = useContext(AuthContext);

  //CONTEXT STATE
  let specificUser = state?.specificUser;

  // FOCUS ON SCREEN
  const isFocuser = useIsFocused();

  useEffect(() => {
    loadFont();
  });

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
        getSpecificUserContext(res?.data?.user);
      })
      .catch((err) => {
        console.log(err, "error on get user api");
      });
  };

  useEffect(() => {
    getUserOnDB();
  }, [isFocuser]);

  const renderName = () => {
    if (specificUser?.firstName && specificUser?.lastName) {
      return `${specificUser?.firstName}.${specificUser?.lastName.substring(
        0,
        1
      )}`;
    } else if (!specificUser?.firstName && !specificUser?.lastName) {
      return "firstname.lastname";
    } else if (specificUser?.firstName && !specificUser?.lastName) {
      return specificUser?.firstName;
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
          {specificUser?.userPicture ? (
            <Image
              source={
                Platform.OS === "ios"
                  ? { uri: specificUser?.userPicture?.uri }
                  : specificUser?.userPicture
              }
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
                    userData: specificUser,
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
    backgroundColor: BackgroundColors.white.absolute
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
    color: Colors.black.text_description_black,
    fontSize: normalize(14, "fontSize"),
    lineHeight: normalize(20),
    textAlign: "center",
    fontFamily: "medium",
  },
});
