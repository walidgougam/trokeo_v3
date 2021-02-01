import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage'
//API
import { handleLikeApi } from "../../API/API";
//PICTURE
import NoImageByCategory from "../picture/NoImageByCategory";
import {
  HeartMiniIcon,
  HeartFullIcon,
  PositionIcon,
} from "../../assets/icon/Icon";
//STYLES
import normalize from "react-native-normalize";
import {Colors, BackgroundColor }from "../../constant/colors";
import css from "../../constant/css";
import fontStyles from "../../constant/fonts";
import { loadFont } from "../../assets/Autre";

export default function CardProductComponent({
  userData,
  distanceOwner,
  navigation,
  productId,
  titleProduct,
  likesProduct,
  imageProduct,
  descriptionProduct,
  bookedProduct,
  categoriesProduct,
  conditionProduct,
  clickFromChild,
}) {
  //STATE
  const [heartFull, setHeartFull] = useState(false);

  useEffect(() => {
    loadFont();
  });

  useEffect(() => {
    for (let i = 0; i < likesProduct?.length; i++) {
      if (likesProduct[i] === userData._id) {
        setHeartFull(true);
      } else {
        setHeartFull(false);
      }
    }
  }, [heartFull]);

  const goProductDetailScreen = () => {
    navigation.navigate("ProductDetail", {
      fromCardProduct: {
        userData,
        imageProduct,
        titleProduct,
        descriptionProduct,
        likesProduct,
        distanceOwner,
        bookedProduct,
        categoriesProduct,
        conditionProduct,
        productId,
      },
    });
  };

  const handleHeart = async () => {
    const userid = await AsyncStorage.getItem("userId");
    await handleLikeApi(userid, productId);
    clickFromChild();
  };

  // STYLES
  const {
    container,
    container_image,
    image_product,
    wrapper_booked,
    text_booked,
    text_description,
    container_icon,
    wrapper_icon,
    text_icon,
  } = styles;
  return (
    <View style={container}>
      <TouchableOpacity
        activeOpacity={fontStyles.activeOpacity}
        onPress={() => goProductDetailScreen(imageProduct)}
        style={[
          container_image,
          Platform.OS === "ios"
            ? {
                shadowColor: "#000",
                shadowOffset: {
                  width: 2,
                  height: 2,
                },
                shadowOpacity: 0.4,
                shadowRadius: 2,
              }
            : { elevation: 9 },
        ]}
      >
        {imageProduct?.length > 0 ? (
          <Image
            source={imageProduct}
            // source={imageProduct}
            style={[image_product]}
            // resizeMode="cover"
          />
        ) : (
          <NoImageByCategory
            icon={categoriesProduct}
            width={normalize(159)}
            height={normalize(128, "height")}
            widthIcon={20}
            heightIcon={20}
            fromCardProduct
          />
        )}
        {bookedProduct ? (
          <View style={wrapper_booked}>
            <Text style={text_booked}>Reservé</Text>
          </View>
        ) : null}
      </TouchableOpacity>
      <View style={{ marginHorizontal: 4 }}>
        <Text style={text_description} numberOfLines={1}>
          {titleProduct}
        </Text>
        <View style={container_icon}>
          <View style={wrapper_icon}>
            <PositionIcon />
            <Text style={text_icon}>{distanceOwner} km</Text>
          </View>
          <View style={wrapper_icon}>
            <TouchableOpacity
              activeOpacity={fontStyles.activeOpacity}
              onPress={() => handleHeart()}
            >
              {likesProduct?.some((el) => userData?._id.includes(el)) ? (
                <HeartFullIcon width={normalize(14)} height={normalize(13)} />
              ) : (
                <HeartMiniIcon />
              )}
            </TouchableOpacity>
            <Text style={text_icon}>{likesProduct?.length}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: normalize(30),
  },
  container_image: {
    alignSelf: "center",
  },
  image_product: {
    width: normalize(159),
    height: normalize(128, "height"),
    borderRadius: normalize(5),
  },
  wrapper_booked: {
    height: normalize(26, "height"),
    width: normalize(159, "width"),
    backgroundColor: BackgroundColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: normalize(5),
    position: "absolute",
    bottom: 0,
  },
  text_booked: {
    color: Colors.white.absolute,
    fontSize: normalize(11, "fontSize"),
  },
  text_description: {
    marginLeft: normalize(2),
    fontSize: normalize(11, "fontSize"),
    color: Colors.grey.background_reservation_grey,
    lineHeight: normalize(20),
    fontFamily: "regular",
  },
  container_icon: {
    ...css.row_space_between,
  },
  wrapper_icon: {
    flexDirection: "row",
    alignItems: "center",
  },
  text_icon: {
    fontSize: normalize(9, "fontSize"),
    color: Colors.grey.likes_grey,
    lineHeight: normalize(20),
    alignSelf: "center",
    marginLeft: normalize(4),
    fontFamily: "regular",
  },
});
