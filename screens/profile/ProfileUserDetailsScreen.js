import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, AsyncStorage } from "react-native";
import { useRoute, useIsFocused } from "@react-navigation/native";
import normalize from "react-native-normalize";
import { ProfilePictureIcon } from "../../assets/icon/Icon";
import fontStyles from "../../constant/fonts";
import colors from "../../constant/colors";
import moment from "moment";
import { Context as AuthContext } from "../../context/AuthContext";

import HeaderComponent from "../../component/header/HeaderComponent";
import ProductFeedComponent from "../../component/ProductFeedComponent";
import NoProductComponent from "../../component/NoProductComponent";
import StarsComponent from "../../component/StarsComponent";
import BtnRightIcon from "../../component/button/BtnRightIcon";
import BtnHomeToggle from "../../component/button/BtnHomeToggle";

export default function ProfileUserDetailsScreen({ navigation }) {
  // STATE
  const [goodTab, setGoodTab] = useState(true);
  const [productFromApi, setProductFromApi] = useState();
  const [userId, setUserId] = useState();

  // ROUTE
  const route = useRoute();
  const { userData } = route.params;

  // CONTEXT
  const { state, getAllProductContext } = useContext(AuthContext);

  // FOCUS ON SCREEN
  const isFocuser = useIsFocused();

  useEffect(() => {
    (async () => {
      setUserId(await AsyncStorage.getItem("userId"));
    })();
  }, [isFocuser]);

  const renderScreen = () => {
    const serviceProduct = state?.allProduct?.filter(
      (e) => e.isServices === true && e.isFromOrganization === false
    );
    const goodProduct = state?.allProduct?.filter(
      (e) => e.isGoods === true && e.isFromOrganization === false
    );
    if (!goodTab && serviceProduct?.length === 0) {
      return <NoProductComponent />;
    }
    //pas de bien dans longlet bien
    else if (goodTab && goodProduct?.length === 0) {
      return <NoProductComponent />;
    }
    // service dans l'onglet service
    else if (!goodTab && serviceProduct?.length > 0) {
      return (
        <ProductFeedComponent
          navigation={navigation}
          data={serviceProduct}
          clickFromChild={() => clickFromChildLike()}
        />
      );
    }
    // bien dans l'onglet bien
    else if (goodTab && goodProduct?.length > 0) {
      return (
        <ProductFeedComponent
          navigation={navigation}
          data={goodProduct}
          clickFromChild={() => clickFromChildLike()}
        />
      );
    }
  };

  // STYLES
  const {
    container,
    wrapper_profile_info,
    text_profile,
    wrapper_stars,
    _stars,
    break_line,
    wrapper_text,
    text_about,
    text_description,
    wrapper_toggle_btn,
  } = styles;
  return (
    <View style={container}>
      <HeaderComponent navigation={navigation} title={userData?.firstName} />
      <View style={wrapper_profile_info}>
        {userData?.userPicture ? (
          <Image
            // source={{ uri: userData?.userPicture }}
            source={userData?.userPicture}
            style={{
              width: normalize(89),
              height: normalize(86),
              borderRadius: normalize(100),
            }}
          />
        ) : (
          <ProfilePictureIcon width={89} height={86} />
        )}
        <View style={{ marginLeft: 14 }}>
          <Text style={text_profile}>
            {`Membre depuis le ${moment(userData?.createdAt)
              .add(10, "days")
              .calendar()}`}
          </Text>
          <Text style={text_profile}>Haut de seine france</Text>
          <View style={wrapper_stars}>
            <View style={_stars}>
              <StarsComponent
                width={normalize(21, "width")}
                height={normalize(18, "height")}
              />
            </View>
            <BtnRightIcon
              title="Voir les avis"
              disabled={!userData?.review?.length > 0}
              profileId={userData?._id}
              navigation={navigation}
              target={"ProfileUserReview"}
            />
          </View>
        </View>
      </View>
      <View style={break_line}></View>
      {userData?.about && (
        <View style={wrapper_text}>
          <Text style={text_about}>A propos</Text>
          <Text style={text_description}>{userData?.about}</Text>
        </View>
      )}

      <View style={wrapper_toggle_btn}>
        <BtnHomeToggle
          title="Biens"
          focus={goodTab}
          changeFocus={() => setGoodTab(true)}
        />
        <BtnHomeToggle
          title="Services"
          focus={!goodTab}
          changeFocus={() => setGoodTab(false)}
        />
      </View>
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_white,
  },
  wrapper_review: {
    flexDirection: "row",
  },
  wrapper_profile_info: {
    flexDirection: "row",
    marginTop: 17,
    marginBottom: 30,
    marginHorizontal: 23,
  },
  text_profile: {
    fontSize: 11,
    // ...fontStyles.regular,
    lineHeight: 20,
    color: colors.text_description_black,
  },
  wrapper_stars: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 9,
  },
  _stars: {
    marginRight: 10,
  },
  break_line: {
    borderBottomColor: colors.placeholder_grey,
    borderBottomWidth: 1,
    marginHorizontal: 11,
  },
  wrapper_text: {
    marginLeft: 23,
    marginRight: 41,
    marginTop: 19,
  },
  text_about: {
    // ...fontStyles.bold,
    fontSize: 16,
    lineHeight: 20,
    color: colors.text_description_black,
    marginBottom: 25,
  },
  text_description: {
    fontSize: 14,
    // ...fontStyles.regular,
    lineHeight: 20,
    color: colors.text_description_black,
  },
  wrapper_toggle_btn: {
    flexDirection: "row",
    height: normalize(57, "height"),
  },
});
