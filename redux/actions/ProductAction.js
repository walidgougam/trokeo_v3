import axios from 'axios';
import {Platform} from 'react-native';
import {IOS_URL, ANDROID_URL} from '../../API/constant';
import AsyncStorage from '@react-native-community/async-storage';

export const GET_PRODUCT = 'GET_PRODUCT';
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';

export const getProductAction = () => {
  return (dispatch) => {
    return axios({
      method: 'GET',
      url:
        Platform.OS === 'ios'
          ? `${IOS_URL}/product/getproduct`
          : `${ANDROID_URL}/product/getproduct`,
    })
      .then((res) => {
        dispatch({type: GET_PRODUCT, payload: res.data.product});
      })
      .catch((err) => {
        console.log(err, 'error on getallproductapi');
      });
  };
};

export const searchProductAction = (res) => {
  console.log(res, 'res search product');
  return (dispatch) => {
    dispatch({type: SEARCH_PRODUCT, payload: res});
  };
};

export const createProductAction = (
  title,
  description,
  conditionProduct,
  productPicture,
) => {
  return (dispatch) => {
    dispatch({
      type: CREATE_PRODUCT_SUCCESS,
      payload: {title, description, conditionProduct, productPicture},
    });
    callback;
  };
};
