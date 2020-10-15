import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import colors from "../../constant/colors";
import { renderForHome } from "../../helpers";
import normalize from "react-native-normalize";
import { getAllProductApi, getUserApi } from "../../API";
import { Context as AuthContext } from "../../context/AuthContext";
import axios from "axios";

import HeaderNotification from "../../component/header/HeaderNotification";
import BtnHomeToggle from "../../component/button/BtnHomeToggle";
import NoGeolocationComponent from "../../component/NoGeolocationComponent";

export default function HomeScreen({ navigation }) {
  //STATE
  const [goodTab, setGoodTab] = useState(true);
  const [localisation, setLocalisation] = useState(false);
  const [allProduct, setAllProduct] = useState();

  // CONTEXT
  const { state, getAllProductContext, getUserContext } = useContext(
    AuthContext
  );

  // FOCUS ON SCREEN
  const isFocuser = useIsFocused();

  const getAllProduct = async () => {
    await axios({
      method: "GET",
      url: "http://localhost:5000/product/getproduct",
    })
      .then((res) => {
        setAllProduct(res?.data?.product);
        getAllProductContext(res?.data?.product);
      })
      .catch((err) => {
        console.log(err, "error on getallproductapi");
      });
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
        {localisation ? (
          <NoGeolocationComponent />
        ) : (
          renderForHome(goodTab, allProduct, navigation)
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
