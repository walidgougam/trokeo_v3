import {
  GET_PRODUCT,
  SEARCH_PRODUCT,
  CREATE_PRODUCT_SUCCESS,
} from '../actions/ProductAction';

const initialState = {};

export function productReducer(state = initialState, action) {
  console.log(state, 'state from reducer');
  console.log(action, 'action from reducer');
  switch (action.type) {
    case GET_PRODUCT:
      return action.payload;
    case CREATE_PRODUCT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export function searchProductReducer(state = initialState, action) {
  console.log(state, 'state from reducer');
  console.log(action, 'action from reducer');
  switch (action.type) {
    case SEARCH_PRODUCT:
      if (action.payload !== undefined) {
        return action.payload;
      } else return {};
    default:
      return state;
  }
}
