import axios from "axios";
import { AsyncStorage, Alert, Platform } from "react-native";
// import RNFetchBlob from "rn-fetch-blob";

export const registerApi = async (
  email,
  password,
  firstName,
  lastName,
  userPicture,
  female,
  callback
) => {
  await axios({
    method: "POST",
    url:
      Platform.OS === "ios"
        ? "http://localhost:5000/user/register"
        : "http://192.168.1.9:5000/user/register",
    data: { email, password, firstName, lastName, userPicture, female },
  })
    .then((res) => {
      console.log(res, "result register api ");
      AsyncStorage.setItem("userId", res.data.userData._id);
      callback();
    })
    .catch((err) => {
      console.log(err, "error on register api");
    });
};

export const registerGoogleApi = async (
  email,
  firstName,
  lastName,
  userPicture,
  callback
) => {
  await axios({
    method: "POST",
    url:
      Platform.OS === "ios"
        ? "http://localhost:5000/user/login"
        : "http://192.168.1.9:5000/user/login",
    data: { email, firstName, lastName, userPicture },
  })
    .then((res) => {
      console.log(res, "result register api google ");
      AsyncStorage.setItem("userId", res.data.userData._id);
      AsyncStorage.setItem("userName", res.data.userData.firstName);
      callback();
    })
    .catch((err) => {
      console.log(err, "error on register");
    });
};

export const loginApi = (email, password, callback) => {
  axios({
    method: "POST",
    url:
      Platform.OS === "ios"
        ? "http://localhost:5000/user/login"
        : "http://192.168.1.9:5000/user/login",
    data: { email, password },
  })
    .then((res) => {
      console.log(res, "res login");
      AsyncStorage.setItem("token", res.data.data.token);
      AsyncStorage.setItem("userId", res.data.data._id);
      callback();
    })
    .catch((err) => {
      console.log(err, "error on loginAPi");
    });
};

export const loginGoogleApi = () => {};

export const addImageApi = (picture, fileName) => {
  // RNFetchBlob.fetch(
  //   "POST",
  //   "http://192.168.1.95000/register/uploadPicture",
  //   {
  //     Authorization: "Bearer access-token",
  //     otherHeader: "foo",
  //     "Content-Type": "multipart/form-data",
  //   },
  //   [
  //     // element with property `filename` will be transformed into `file` in form data
  //     { name: "image", filename: fileName, data: picture },
  //   ]
  // ).then((resp) => {
  //   console.log(resp);
  // });
};

export const createProductApi = async (
  title,
  description,
  productPicture,
  condition,
  category,
  user,
  isServices,
  isGoods,
  isFromOrganization,
  callback
) => {
  let userId = await AsyncStorage.getItem("userId");
  axios({
    method: "POST",
    url:
      Platform.OS === "ios"
        ? "http://localhost:5000/product/createproduct"
        : "http://192.168.1.95000/product/createproduct",
    data: {
      title,
      description,
      productPicture,
      condition,
      category,
      user,
      isServices,
      isGoods,
      isFromOrganization,
      userId,
    },
  })
    .then((res) => {
      console.log("produit creer dans api.js");
      callback();
    })
    .catch((err) => {
      console.log(err, "error on loginAPi");
      callback();
    });
};

export const getUserApi = async (dispatch) => {
  let id = await AsyncStorage.getItem("userId");
  axios({
    method: "GET",
    url:
      Platform.OS === "ios"
        ? `http://localhost:5000/user/${id}`
        : `http://192.168.1.9:5000/user/${id}`,
  })
    .then((res) => {
      dispatch({ type: "GET_USER", payload: res.data.user });
      console.log(res, "get user api");
    })
    .catch((err) => {
      console.log(err, "error on get user api");
    });
};

export const editProfileUserApi = async (
  firstName,
  lastName,
  about,
  email,
  phoneNumber,
  female,
  userPicture,
  callback
) => {
  let userId = await AsyncStorage.getItem("userId");
  axios({
    method: "POST",
    url:
      Platform.OS === "ios"
        ? "http://localhost:5000/user/edit"
        : "http://192.168.1.9:5000/user/edit",
    data: {
      userId,
      firstName,
      lastName,
      about,
      email,
      phoneNumber,
      female,
      userPicture,
    },
  })
    .then((res) => {
      console.log(res.data, "edit user api");
      callback();
    })
    .catch((err) => {
      console.log(err, "error on loginAPi");
    });
};

export const handleLikeApi = async (userId, productId) => {
  await axios({
    method: "POST",
    url:
      Platform.OS === "ios"
        ? "http://localhost:5000/product/handlelike"
        : "http://192.168.1.9:5000/product/handlelike",
    data: { userId, productId },
  })
    .then((res) => {
      console.log(res.data, "res handlelike api");
    })
    .catch((err) => {
      console.log(err, "error on handle like api");
    });
};

export const createReviewApi = async (
  userId,
  recieverId,
  stars,
  review,
  callback
) => {
  await axios({
    method: "POST",
    url:
      Platform.OS === "ios"
        ? "http://localhost:5000/user/createreview"
        : "http://192.168.1.9:5000/user/createreview",
    data: { userId, recieverId, stars, review },
  })
    .then((res) => {
      console.log(res.data, "res create review api");
      callback();
    })
    .catch((err) => {
      console.log(err, "error on create review api");
    });
};
