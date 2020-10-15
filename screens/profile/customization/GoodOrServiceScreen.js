import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import CardWithRightIcon from "../../../component/card/CardWithRightIcon";
import HeaderComponent from "../../../component/header/HeaderComponent";
import axios from "axios";
import { useRoute, useIsFocused } from "@react-navigation/native";

export default function GoodOrServiceScreen({ navigation, route }) {
  const [userId, setUserId] = useState("");
  const [goodCategoryState, setGoodCategoryState] = useState();
  const [serviceCategoryState, setServiceCategoryState] = useState();
  const [loading, setLoading] = useState(true);

  // FOCUS ON SCREEN
  const isFocuser = useIsFocused();

  const getUserCategory = async () => {
    const userid = await AsyncStorage.getItem("userId");
    axios({
      method: "GET",
      url: `http://localhost:5000/user/${userid}`,
    })
      .then((res) => {
        setGoodCategoryState(res?.data?.user?.categoryGoodsFollow);
        setServiceCategoryState(res?.data?.user?.categoryServicesFollow);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err, "error on  on get user category");
      });
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getUserCategory();
    }

    return () => {
      mounted = false;
    };
  }, [isFocuser]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      (async () => {
        setUserId(await AsyncStorage.getItem("userId"));
      })();
    }

    return () => {
      mounted = false;
    };
  });
  return loading ? (
    <View></View>
  ) : (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation} />
      <CardWithRightIcon
        title="Biens"
        onPress={() =>
          navigation.navigate("Follow", {
            from: "good",
            userId,
            goodCategoryFromDb: goodCategoryState,
          })
        }
      />
      <CardWithRightIcon
        title="Services"
        onPress={() =>
          navigation.navigate("Follow", {
            from: "service",
            userId,
            serviceCategoryFromDb: serviceCategoryState,
          })
        }
      />
    </View>
  );
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
