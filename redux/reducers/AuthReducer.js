import {TRY_LOGIN} from '../Constant';

const AuthReducers = (state = [], action) => {
  console.log(action, 'action');
  console.log(action.payload, 'action.payload');
  switch (action.type) {
    case TRY_LOGIN:
      return action.payload;
    default:
      return state;
  }
};

export {AuthReducers};
