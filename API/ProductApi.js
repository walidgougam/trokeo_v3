import axios from 'axios';
import {Alert, Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {IOS_URL, ANDROID_URL} from './constant';

export const followGoodsCategoryApi = async (userId, categoryGoodsFollow) => {
  let result;

  await axios({
    method: 'POST',
    url:
      Platform.OS === 'ios'
        ? `${IOS_URL}/user/editcategorygoodfollow`
        : `${ANDROID_URL}/user/editcategorygoodfollow`,
    data: {userId, categoryGoodsFollow},
  })
    .then((res) => {
      console.log('result on follow good ');
      result = res;
    })
    .catch((err) => {
      console.log(err, 'error on follow good');
    });

  console.log(result, '---the response---');
  if (result) {
    return result;
  }
};

export const followServicesCategoryApi = async (
  userId,
  categoryServicesFollow,
) => {
  await axios({
    method: 'POST',
    url:
      Platform.OS === 'ios'
        ? `${IOS_URL}/user/editcategoryservicefollow`
        : `${ANDROID_URL}/user/editcategoryservicefollow`,
    data: {userId, categoryServicesFollow},
  })
    .then((res) => {
      console.log('result follow service ');
    })
    .catch((err) => {
      console.log(err, 'error on follow service');
    });
};
