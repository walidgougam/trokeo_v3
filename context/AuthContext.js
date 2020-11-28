import createDataContext from "./CreateDataContext";
import { signup, signin, getAllProductApi, getUserApi } from "../API/API";
import { AsyncStorage } from "react-native";

const authReducer = (state, action) => {
  // console.log(state, "state");
  // console.log(action, "action");
  switch (action.type) {
    case "SIGN_UP":
      return { ...state, token: action.payload };
    case "SIGN_IN":
      return { ...state, token: action.payload };
    case "ADD_ERROR":
      return { ...state, errorMessage: action.payload };
    case "CLEAR_ERROR_MESSAGE":
      return { ...state, errorMessage: "" };
    case "SIGN_OUT":
      return { token: null, errorMessage: "" };
    case "CREATE_PRODUCT":
      return { ...state, product: action.payload };
    case "CATEGORY_PRODUCT":
      return { ...state, category: action.payload };
    case "CHANGE_PICTURE":
      return { ...state, picture: action.payload };
    case "GET_ALL_PRODUCT":
      return { ...state, getAllProduct: action.payload };
    case "GET_USER":
      return { ...state, user: action.payload };
    case "GET_SPECIFIC_USER":
      return { ...state, specificUser: action.payload };
    case "EDIT_PROFILE":
      return { ...state, editProfile: action.payload };
    case "SEARCH_FILTER_PRODUCT":
      return {
        ...state,
        search: {
          condition: action.payload.condition,
          category: action.payload.category,
          distance: action.payload.distance,
        },
      };
    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: "CLEAR_ERROR_MESSAGE" });
  };
};

const tryLocalSignIn = (dispatch) => {
  return async (callback, goSignUp) => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        dispatch({ type: "SIGN_IN", payload: token });
        callback();
      } else {
        goSignUp();
      }
    } catch (err) {
      console.log(err, "error");
    }
  };
};

const signUp = (dispatch) => {
  return async (email, password, callback) => {
    try {
      await signup(email, password, dispatch, callback);
    } catch (err) {
      console.log("erreur sign up");
    }

    // callback();
  };
};

const signIn = (dispatch) => {
  return async (email, password, callback) => {
    try {
      await signin(email, password, dispatch, callback);
    } catch (err) {
      console.log("erreur sign in");
    }

    // callback();
  };
};

const signOut = (dispatch) => {
  return async (callback) => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "SIGN_OUT" });
    callback();
  };
};

// PRODUCT

const createProductContext = (dispatch) => {
  return async (
    title,
    description,
    conditionProduct,
    productPicture,
    callback
  ) => {
    dispatch({
      type: "CREATE_PRODUCT",
      payload: { title, description, conditionProduct, productPicture },
    });
    callback;
  };
};

const categoryProductContext = (dispatch) => {
  return async (category) => {
    dispatch({
      type: "CATEGORY_PRODUCT",
      payload: category,
    });
  };
};

const changePictureContext = (dispatch) => {
  return async (picture) => {
    dispatch({
      type: "CHANGE_PICTURE",
      payload: picture,
    });
  };
};

const getAllProductContext = (dispatch) => {
  return async (product) => {
    dispatch({
      type: "GET_ALL_PRODUCT",
      payload: product,
    });
  };
};

const getUserContext = (dispatch) => {
  return async () => {
    try {
      getUserApi(dispatch);
    } catch (err) {
      console.log("cets la merde");
    }
    // callback();
  };
};

const getSpecificUserContext = (dispatch) => {
  return async (user) => {
    dispatch({
      type: "GET_SPECIFIC_USER",
      payload: user,
    });
  };
};

const editProfileContext = (dispatch) => {
  return async (
    picture,
    firstName,
    lastName,
    about,
    email,
    phoneNumber,
    female,
    callback
  ) => {
    dispatch({
      type: "EDIT_PROFILE",
      payload: {
        picture,
        firstName,
        lastName,
        about,
        email,
        phoneNumber,
        female,
        callback,
      },
    });
    callback;
  };
};

const searchFilterProductContext = (dispatch) => {
  return async (search) => {
    dispatch({
      type: "SEARCH_FILTER_PRODUCT",
      payload: search,
    });
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  {
    signUp,
    signIn,
    signOut,
    clearErrorMessage,
    tryLocalSignIn,
    createProductContext,
    categoryProductContext,
    changePictureContext,
    getAllProductContext,
    getUserContext,
    getSpecificUserContext,
    editProfileContext,
    searchFilterProductContext,
  },
  { token: null, errorMessage: "" }
);
