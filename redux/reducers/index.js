import {combineReducers} from 'redux';
import {AuthReducers} from './AuthReducer';

export default combineReducers({
  tryLogin: AuthReducers,
});
