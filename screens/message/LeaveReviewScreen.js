import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
//STYLE
import { loadFont } from "../../assets/Autre";
import {Colors, BackgroundColors} from "../../constant/colors";
import css from "../../constant/css";
import normalize from "react-native-normalize";
//API
import { createReviewApi } from "../../API/API";
//COMPONENT
import StarRatingComponent from "../../component/StarRatingComponent";
import CardHeaderChat from "../../component/card/CardHeaderChat";
import HeaderComponent from "../../component/header/HeaderComponent";
import BtnBlueAction from "../../component/button/BtnBlueAction";

export default function LeaveReviewScreen({ navigation }) {
  //ROUTE
  const route = useRoute();
  const { fromModalChat } = route?.params;
  const product = fromModalChat.product;
  const userId = fromModalChat.userId;
  const recieverId = fromModalChat.recieverId;

  //STATE
  const [stars, setStars] = useState();
  const [textReview, setTextReview] = useState();

  useEffect(() => {
    loadFont();
  });

  const starsFromChild = (e) => {
    setStars(e);
  };

  const handleLeaveReview = () => {
    createReviewApi(userId, recieverId, stars, textReview, () => {
      navigation.navigate("HomeBottomTab");
    });
  };

  //STYLES
  const {
    _container,
    text_evaluation,
    star_component,
    text_experience,
    text_area,
    wrapper_btn,
    container_review,
  } = styles;
  return (
    <View style={_container}>
      <HeaderComponent navigation={navigation} title="Laisser un avis" />
      <CardHeaderChat noFinalize product={product} />
      <View style={container_review}>
        <View>
          <View>
            <Text style={text_evaluation}>Evaluation</Text>
            <View style={star_component}>
              <StarRatingComponent starsFromChild={(e) => starsFromChild(e)} />
            </View>
          </View>
          <View>
            <Text style={text_experience}>Décrivez votre expérience</Text>
            <TextInput
              style={text_area}
              numberOfLines={7}
              multiline={true}
              onChangeText={(e) => setTextReview(e)}
            />
          </View>
        </View>
        <View style={wrapper_btn}>
          <BtnBlueAction
            onPress={() => handleLeaveReview()}
            color={Colors.white.absolute}
            backgroundColor={Colors.btn_action}
            title="Continuer"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: BackgroundColors.white.absolute
  },
  container_review: {
    flex: 1,
    marginHorizontal: 16,
    justifyContent: "space-between",
  },
  text_evaluation: {
    ...css.text_input,
    marginTop: normalize(20),
  },
  star_component: {
    marginTop: normalize(20),
  },
  text_experience: {
    ...css.text_input,
    fontFamily: "regular",
    marginTop: normalize(42),
  },
  text_area: {
    borderColor: Colors.grey.icon_profile_grey,
    borderWidth: 1,
    height: normalize(142, "height"),
    marginTop: normalize(20),
  },
  wrapper_btn: {
    marginHorizontal: 54,
    marginBottom: 48,
  },
});
