import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, ScrollView, Platform } from "react-native";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import colors from "../../constant/colors";
import normalize from "react-native-normalize";
import { getAllProductApi, getUserApi } from "../../API";
import { Context as AuthContext } from "../../context/AuthContext";
import axios from "axios";
import * as Location from "expo-location";

import HeaderNotification from "../../component/header/HeaderNotification";
import BtnHomeToggle from "../../component/button/BtnHomeToggle";
import NoGeolocationComponent from "../../component/NoGeolocationComponent";
import ProductFeedComponent from "../../component/ProductFeedComponent";
import NoProductComponent from "../../component/NoProductComponent";

export default function HomeScreen({ navigation }) {
  //STATE
  const [goodTab, setGoodTab] = useState(true);
  const [location, setLocation] = useState(false);
  const [allProduct, setAllProduct] = useState();

  // CONTEXT
  const { state, getAllProductContext, getUserContext } = useContext(
    AuthContext
  );

  // FOCUS ON SCREEN
  const isFocuser = useIsFocused();

  const getCurrentLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }
    let location = await Location.getCurrentPositionAsync({});
    if (location) {
      setLocation(true);
    }
  };

  const getAllProduct = async () => {
    await axios({
      method: "GET",
      url:
        Platform.OS === "ios"
          ? "http://localhost:5000/product/getproduct"
          : "http://10.1.20.66:5000/product/getproduct",
    })
      .then((res) => {
        setAllProduct(res?.data?.product);
        getAllProductContext(res?.data?.product);
      })
      .catch((err) => {
        console.log(err, "error on getallproductapi");
      });
  };

  const clickFromChildLike = () => {
    getAllProduct();
  };

  const renderScreen = () => {
    const serviceProduct = allProduct?.filter(
      (e) => e.isServices === true && e.isFromOrganization === false
    );
    const goodProduct = allProduct?.filter(
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

  useEffect(() => {
    getAllProduct();
    // getUserContext();
  }, [isFocuser]);

  //STYLE
  const { container, wrapper_toggle_btn } = styles;
  return (
    <View style={container}>
      <HeaderNotification isLogo navigation={navigation} />
      <View style={wrapper_toggle_btn}>
        <BtnHomeToggle
          fromScreenWithProduct
          title="Biens"
          focus={goodTab}
          changeFocus={() => setGoodTab(true)}
          lengthGoods={allProduct?.filter((e) => e.isGoods === true).length}
        />
        <BtnHomeToggle
          fromScreenWithProduct
          title="Services"
          focus={!goodTab}
          changeFocus={() => setGoodTab(false)}
          lengthServices={
            allProduct?.filter((e) => e.isServices === true).length
          }
        />
      </View>
      <ScrollView>
        {!location ? (
          <NoGeolocationComponent getLocation={() => getCurrentLocation()} />
        ) : (
          renderScreen()
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_white,
  },
  wrapper_toggle_btn: {
    flexDirection: "row",
    height: normalize(57, "height"),
  },
});
