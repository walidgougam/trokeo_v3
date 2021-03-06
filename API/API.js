import axios from 'axios';
import {Alert, Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
// import RNFetchBlob from "rn-fetch-blob";
import {IOS_URL, ANDROID_URL} from './constant';

const HEADERS = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
};
export const registerGoogleApi = async (
  email,
  firstName,
  lastName,
  userPicture,
  callback,
) => {
  await axios({
    method: 'POST',
    url:
      Platform.OS === 'ios'
        ? `${IOS_URL}/user/login`
        : `${ANDROID_URL}/user/login`,
    data: {email, firstName, lastName, userPicture},
  })
    .then((res) => {
      console.log(res, 'result register api google ');
      AsyncStorage.setItem('userId', res.data.userData._id);
      AsyncStorage.setItem('userName', res.data.userData.firstName);
      callback();
    })
    .catch((err) => {
      console.log(err, 'error on register');
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

const prepareData = (image, body) => {
  const data = new FormData();

  data.append('file', {
    name: image.fileName,
    type: image.type,
    uri:
      Platform.OS === 'android' ? image.uri : image.uri.replace('file://', ''),
  });

  Object.keys(body).forEach((key) => {
    console.log('key, rest[key]', key, body[key]);
    data.append(key, body[key]);
  });

  return data;
};

export const createProductApi = async (
  title,
  description,
  // productPicture,
  condition,
  category,
  user,
  isServices,
  isGoods,
  isFromOrganization,
  image,
  callback = () => {},
) => {
  console.log('IMAGE RESPONSE!!!', image);
  let userId = await AsyncStorage.getItem('userId');
  const data = prepareData(image, {
    title,
    description,
    condition,
    category,
    user,
    isServices,
    isGoods,
    isFromOrganization,
    userId,
  });
  axios
    .post(
      Platform.OS === 'ios'
        ? `${IOS_URL}/product/createproduct`
        : `${ANDROID_URL}/product/createproduct`,
      data,
    )
    .then((res) => {
      console.log('produit creer dans api.js', res);
      callback();
    })
    .catch((err) => {
      console.log(err, 'error on loginAPi');
      callback();
    });
};

export const getUserApi = async (dispatch) => {
  let id = await AsyncStorage.getItem('userId');
  axios({
    method: 'GET',
    url:
      Platform.OS === 'ios'
        ? `${IOS_URL}/user/${id}`
        : `${ANDROID_URL}/user/${id}`,
  })
    .then((res) => {
      dispatch({type: 'GET_USER', payload: res.data.user});
      console.log(res, 'get user api');
    })
    .catch((err) => {
      console.log(err, 'error on get user api');
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
  callback,
) => {
  let userId = await AsyncStorage.getItem('userId');
  axios({
    method: 'POST',
    url:
      Platform.OS === 'ios'
        ? `${IOS_URL}/user/edit`
        : `${ANDROID_URL}/user/edit`,
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
      console.log(res.data, 'edit user api');
      callback();
    })
    .catch((err) => {
      console.log(err, 'error on loginAPi');
    });
};

export const handleLikeApi = async (userId, productId) => {
  await axios({
    method: 'POST',
    url:
      Platform.OS === 'ios'
        ? `${IOS_URL}/product/handlelike`
        : `${ANDROID_URL}/product/handlelike`,
    data: {userId, productId},
  })
    .then((res) => {
      console.log(res.data, 'res handlelike api');
    })
    .catch((err) => {
      console.log(err, 'error on handle like api');
    });
};

export const createReviewApi = async (
  userId,
  recieverId,
  stars,
  review,
  callback,
) => {
  await axios({
    method: 'POST',
    url:
      Platform.OS === 'ios'
        ? `${IOS_URL}/user/createreview`
        : `${ANDROID_URL}/user/createreview`,
    data: {userId, recieverId, stars, review},
  })
    .then((res) => {
      console.log(res.data, 'res create review api');
      callback();
    })
    .catch((err) => {
      console.log(err, 'error on create review api');
    });
};
