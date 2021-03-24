import axios from 'axios';
import {Platform} from 'react-native';
import {IOS_URL, ANDROID_URL} from '../../API/constant';
import AsyncStorage from '@react-native-community/async-storage';

export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';

export const editProfileAction = (
  picture,
  firstName,
  lastName,
  about,
  email,
  phoneNumber,
  female,
) => {
  return (dispatch) => {
    dispatch({
      type: 'EDIT_PROFILE_SUCCESS',
      payload: {
        picture,
        firstName,
        lastName,
        about,
        email,
        phoneNumber,
        female,
      },
    });
  };
};
