import {combineReducers} from 'redux';
import authReducer from './AuthReducer';
import {productReducer, searchProductReducer} from './ProductReducer';
import uploadPictureReducer from './UploadReducer';

export default combineReducers({
  authReducer,
  productReducer,
  searchProductReducer,
  uploadPictureReducer,
});
