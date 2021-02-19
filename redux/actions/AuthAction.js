import axios from 'axios';
import {Platform} from 'react-native';
import {IOS_URL, ANDROID_URL} from '../../API/constant';
import AsyncStorage from '@react-native-community/async-storage';

export const LOGIN_TYPE = 'LOGIN_TYPE';
export const REGISTER_TYPE = 'REGISTER_TYPE';

export const LOGIN = (email, password, callback) => {
  return (dispatch) => {
    return axios({
      method: 'POST',
      url:
        Platform.OS === 'ios'
          ? `${IOS_URL}/user/login`
          : `${ANDROID_URL}/user/login`,
      data: {email, password},
    })
      .then((res) => {
        console.log(res, 'res login');
        AsyncStorage.setItem('token', res.data.data.token);
        AsyncStorage.setItem('userId', res.data.data._id);
        dispatch({type: LOGIN_TYPE, payload: res.data});
        callback();
      })
      .catch((err) => {
        console.log(err, 'err on login');
        dispatch({type: LOGIN_TYPE, payload: err});
      });
  };
};

export const REGISTER = (
  email,
  password,
  firstName,
  lastName,
  female,
  userPicture,
  callback,
) => {
  return (dispatch) => {
    return axios({
      method: 'POST',
      url:
        Platform.OS === 'ios'
          ? `${IOS_URL}/user/register`
          : `${ANDROID_URL}/user/register`,
      data: {
        email,
        password,
        firstName,
        lastName,
        female,
        userPicture: {uri: userPicture?.uri},
      },
    })
      .then((res) => {
        console.log(res, 'result register api ');
        AsyncStorage.setItem('userId', res?.data?.userData?._id);
        dispatch({type: REGISTER_TYPE, payload: res.data});
        callback();
      })
      .catch((err) => {
        console.log(err, 'error on register api');
        dispatch({type: REGISTER_TYPE, payload: err});
      });
  };
};
