import axios from "axios";
import { AsyncStorage, Alert, Platform } from "react-native";
import { IOS_URL, ANDROID_URL } from "./API";

export const getProductApi = async () => {
  let response;
  await axios({
    method: "GET",
    url:
      Platform.OS === "ios"
        ? `${IOS_URL}/product/getproduct`
        : `${ANDROID_URL}/product/getproduct`,
  })
    .then((res) => {
      response = res?.data?.product;
    })
    .catch((err) => {
      console.log(err, "error on getallproductapi");
    });

  return response;
};

export const followGoodsCategoryApi = async (userId, categoryGoodsFollow) => {
  let result;

  await axios({
    method: "POST",
    url:
      Platform.OS === "ios"
        ? `${IOS_URL}/user/editcategorygoodfollow`
        : `${ANDROID_URL}/user/editcategorygoodfollow`,
    data: { userId, categoryGoodsFollow },
  })
    .then((res) => {
      console.log("result on follow good ");
      result = res;
    })
    .catch((err) => {
      console.log(err, "error on follow good");
    });

  console.log(result, "---the response---");
  if (result) {
    return result;
  }
};

export const followServicesCategoryApi = async (
  userId,
  categoryServicesFollow
) => {
  await axios({
    method: "POST",
    url:
      Platform.OS === "ios"
        ? `${IOS_URL}/user/editcategoryservicefollow`
        : `${ANDROID_URL}/user/editcategoryservicefollow`,
    data: { userId, categoryServicesFollow },
  })
    .then((res) => {
      console.log("result follow service ");
    })
    .catch((err) => {
      console.log(err, "error on follow service");
    });
};
