import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from '../actions/AuthAction';

const initialState = {};

export default function authReducer(state = initialState, action) {
  console.log(state, 'state from reducer');
  console.log(action, 'action from reducer');
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;
    case LOGIN_ERROR:
      return action.payload;
    case REGISTER_SUCCESS:
      return action.payload;
    case REGISTER_ERROR:
      return action.payload;
    default:
      return state;
  }
}
