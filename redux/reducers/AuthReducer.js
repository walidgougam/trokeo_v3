import {LOGIN_TYPE, REGISTER_TYPE} from '../actions/AuthAction';

const initialState = {};

export default function authReducer(state = initialState, action) {
  console.log(state, 'state from reducer');
  console.log(action, 'action from reducer');
  switch (action.type) {
    case LOGIN_TYPE:
      return state;
    case REGISTER_TYPE:
      return action.payload;
    default:
      return state;
  }
}
