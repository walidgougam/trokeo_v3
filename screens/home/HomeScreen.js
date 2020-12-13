import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Platform,
  AsyncStorage,
  Text,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";
import * as Location from "expo-location";
import { Context as AuthContext } from "../../context/AuthContext";
//STYLE
import {Colors} from "../../constant/colors";
import normalize from "react-native-normalize";
import { loadFont } from "../../assets/Autre";
//API
import axios from "axios";
import { IOS_URL, ANDROID_URL } from "../../API/API";
import { getProductApi } from "../../API/ProductApi";
//COMPONENT
import HeaderNotification from "../../component/header/HeaderNotification";
import HeaderFilterComponent from "../../component/header/HeaderFilterComponent";
import BtnHomeToggle from "../../component/button/BtnHomeToggle";
import NoGeolocationComponent from "../../component/NoGeolocationComponent";
import ProductFeedComponent from "../../component/ProductFeedComponent";
import NoProductComponent from "../../component/NoProductComponent";

export default function HomeScreen({ navigation }) {
  //STATE
  const [goodTab, setGoodTab] = useState(true);
  const [locationState, setLocationState] = useState(true);
  const [loading, setLoading] = useState(true);

  // CONTEXT
  const { state, getAllProductContext } = useContext(AuthContext);

  //CONTEXT STATE
  const category = state?.search?.category;
  const distance = state?.search?.distance;
  const condition = state?.search?.condition;

  // FOCUS ON SCREEN
  const isFocuser = useIsFocused();

  const getAllProduct = async () => {
    const product = await getProductApi();
    getAllProductContext(product);
    setLoading(false);
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getAllProduct();
      loadFont();
    }
    return () => {
      mounted = false;
    };
  }, [category, distance, condition]);

  const getCurrentLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }
    let location = await Location.getCurrentPositionAsync({});
    if (location) {
      AsyncStorage.setItem("location", JSON.stringify(location));
      setLocationState(location);
    }
  };

  const clickFromChildLike = () => {
    getAllProduct();
  };

  const returnGoodProductSearch = (goodProduct) => {
    if (
      (condition !== undefined && condition.length > 0) ||
      (category !== undefined && category.length > 0) ||
      (distance !== undefined && distance.length > 0)
    ) {
      let allOptionSearch = [].concat(condition, category, distance);
      let data = [];
      for (let i = 0; i < allOptionSearch.length; i++) {
        if (
          allOptionSearch?.includes(goodProduct[i]?.category) ||
          allOptionSearch?.includes(goodProduct[i]?.condition)
        ) {
          data.push(goodProduct[i]);
        }
      }
      return data;
    }
    return goodProduct;
  };

  const renderScreen = () => {
    const serviceProduct = state?.getAllProduct?.filter(
      (e) => e.isServices === true && e.isFromOrganization === false
    );
    const goodProduct = state?.getAllProduct?.filter(
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
          allProduct={serviceProduct}
          clickFromChild={() => clickFromChildLike()}
        />
      );
    }
    // bien dans l'onglet bien
    else if (goodTab && goodProduct?.length > 0) {
      return (
        <ProductFeedComponent
          navigation={navigation}
          allProduct={returnGoodProductSearch(goodProduct)}
          clickFromChild={() => clickFromChildLike()}
        />
      );
    }
  };

  const isProductFilter = () => {
    if (category?.length > 0 || distance?.length > 0 || condition?.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  //STYLE
  const { _container, wrapper_toggle_btn } = styles;
  return loading ? (
    <ActivityIndicator size="large" style={{ flex: 1 }} />
  ) : (
    <View style={_container}>
      <HeaderNotification isLogo navigation={navigation} />
      <View style={wrapper_toggle_btn}>
        <BtnHomeToggle
          fromScreenWithProduct
          title="Biens"
          focus={goodTab}
          changeFocus={() => setGoodTab(true)}
          lengthGoods={
            state?.getAllProduct?.filter((e) => e?.isGoods === true).length
          }
        />
        <BtnHomeToggle
          fromScreenWithProduct
          title="Services"
          focus={!goodTab}
          changeFocus={() => setGoodTab(false)}
          lengthServices={
            state?.getAllProduct?.filter((e) => e.isServices === true).length
          }
        />
      </View>
      {isProductFilter() && <HeaderFilterComponent />}
      <ScrollView>
        {!locationState ? (
          <NoGeolocationComponent getLocation={() => getCurrentLocation()} />
        ) : (
          renderScreen()
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: Colors.white.absolute,
  },
  wrapper_toggle_btn: {
    flexDirection: "row",
    height: normalize(57, "height"),
  },
});
