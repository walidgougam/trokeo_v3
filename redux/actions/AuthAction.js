import axios from 'axios';
import {Platform} from 'react-native';
import {IOS_URL, ANDROID_URL} from '../../API/constant';
import AsyncStorage from '@react-native-community/async-storage';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const loginAction = (email, password, callback) => {
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
        dispatch({type: LOGIN_SUCCESS, payload: res.data});
        callback();
      })
      .catch((err) => {
        console.log(err, 'err on login');
        dispatch({type: LOGIN_ERROR, payload: err});
      });
  };
};

export const REGISTER = (result) => {
  console.log(result, 'result action register');
  return (dispatch) => {
    dispatch({type: REGISTER_SUCCESS, payload: result});
  };
};
