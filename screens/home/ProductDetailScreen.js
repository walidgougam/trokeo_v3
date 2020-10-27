import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import normalize from "react-native-normalize";
import colors from "../../constant/colors";
import { PositionIcon } from "../../assets/icon/Icon";
import { useRoute } from "@react-navigation/native";
import fontStyles from "../../constant/fonts";
import { ProfilePictureIcon } from "../../assets/icon/Icon";

import HeaderNotification from "../../component/header/HeaderNotification";
import MapComponent from "../../component/MapComponent";
import StarsComponent from "../../component/StarsComponent";
import PictureSwiperComponent from "../../component/picture/PictureSwiperComponent";
import BtnBlueAction from "../../component/button/BtnBlueAction";
import BtnRightIcon from "../../component/button/BtnRightIcon";

export default function ProductDetailScreen({ navigation }) {
  // ROUTE
  const route = useRoute();
  const {
    userData,
    imageProduct,
    titleProduct,
    descriptionProduct,
    distanceOwner,
    categoriesProduct,
    conditionProduct,
  } = route.params;
  navigation.setOptions({ tabBarVisible: () => false });

  const goToChat = (userData) => {
    return navigation.navigate("Chat", {
      productPicture: imageProduct[0].uri,
      titleProduct,
      recieverId: userData._id,
      recieverName: userData.firstName,
    });
  };

  // STYLES
  const {
    _container,
    wrapper_booked,
    text_booked,
    _title,
    text_title,
    text_description,
    wrapper_characteristic,
    wrapper_product_owner,
    wrapper_stars,
    container_product_owner,
    wrapper_btn,
    expand_clickable_area,
  } = styles;
  return (
    <View style={_container}>
      {console.log(imageProduct[0].uri, "image product")}
      <HeaderNotification
        navigation={navigation}
        isLogo={false}
        fromDetailsScreen
      />
      <ScrollView>
        <PictureSwiperComponent imageProduct={imageProduct} />
        <View style={wrapper_booked}>
          <Text style={text_booked}>Réservé</Text>
        </View>
        <Text style={_title}>{titleProduct}</Text>
        <View style={{ marginHorizontal: normalize(18) }}>
          <View style={wrapper_characteristic}>
            <Text style={text_title}>Etat</Text>
            <Text style={text_description}>{conditionProduct}</Text>
          </View>
          <View style={wrapper_characteristic}>
            <Text style={text_title}>Categorie</Text>
            <Text style={text_description}>{categoriesProduct}</Text>
          </View>
          <View style={wrapper_characteristic}>
            <Text style={text_title}>Description</Text>
            <Text style={text_description}>{descriptionProduct}</Text>
          </View>
          <View style={{ marginBottom: normalize(20) }}>
            <Text style={text_title}>Localisation</Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <PositionIcon />
              <Text
                style={[
                  text_description,
                  {
                    marginLeft: normalize(8),
                  },
                ]}
              >
                {`${distanceOwner} km`}
              </Text>
            </View>
          </View>
        </View>
        <MapComponent height={normalize(241, "height")} />
        <View style={container_product_owner}>
          <View style={wrapper_product_owner}>
            <TouchableOpacity
              activeOpacity={0.6}
              hitSlop={expand_clickable_area}
              onPress={() =>
                navigation.navigate("ProfileUserDetails", { userData })
              }
            >
              {userData?.userPicture ? (
                <Image
                  source={{ uri: userData?.userPicture }}
                  style={{
                    width: normalize(49),
                    height: normalize(49),
                    borderRadius: normalize(100),
                  }}
                />
              ) : (
                <ProfilePictureIcon width={49} height={49} />
              )}
            </TouchableOpacity>
            <View style={wrapper_stars}>
              <Text>{`${userData?.firstName}_${userData?.lastName?.charAt(
                0
              )}`}</Text>
              <StarsComponent width={16} height={15} />
            </View>
          </View>
          <View>
            <BtnRightIcon
              navigation={navigation}
              title="8 annonces en ligne"
              target="ProfileUserDetails"
              userData={userData}
            />
          </View>
        </View>
      </ScrollView>
      <View style={wrapper_btn}>
        {console.log(userData, "userData")}
        <BtnBlueAction
          title="Contacter le trokeur"
          onPress={() => goToChat(userData)}
          backgroundColor={colors.btn_action}
          color={colors.text_white}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: colors.background_white,
  },
  wrapper_img: {
    height: normalize(200, "height"),
    backgroundColor: "grey",
  },
  wrapper_booked: {
    backgroundColor: colors.background_reservation_grey,
    height: normalize(40, "height"),
    justifyContent: "center",
  },
  text_booked: {
    textAlign: "center",
    color: colors.text_white,
    fontSize: normalize(14, "fontSize"),
    // ...fontStyles.medium,
    lineHeight: normalize(20),
  },
  _title: {
    paddingTop: normalize(20),
    textAlign: "center",
    fontSize: normalize(20, "fontSize"),
    lineHeight: normalize(20),
    color: colors.text_description_black,
    // ...fontStyles.heavy,
  },
  wrapper_characteristic: {
    marginBottom: normalize(27),
  },
  text_title: {
    fontSize: normalize(16, "fontSize"),
    lineHeight: normalize(20),
    color: colors.text_description_black,
    marginBottom: normalize(11),
    // ...fontStyles.heavy,
  },
  text_description: {
    fontSize: normalize(14, "fontSize"),
    lineHeight: normalize(20),
    color: colors.text_description_black,
    marginBottom: normalize(11),
    // ...fontStyles.medium,
  },
  container_product_owner: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 17,
    alignItems: "center",
    marginTop: normalize(17),
    marginBottom: normalize(117),
    marginLeft: normalize(28),
    marginRight: 36,
  },
  expand_clickable_area: { top: 10, bottom: 10, left: 10, right: 10 },
  wrapper_product_owner: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrapper_stars: {
    marginLeft: normalize(10),
  },
  wrapper_btn: {
    position: "absolute",
    bottom: normalize(50),
    width: normalize(318, "width"),
    backgroundColor: "transparent",
    alignSelf: "center",
  },
});
