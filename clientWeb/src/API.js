import axios from "axios";
// import RNFetchBlob from "rn-fetch-blob";

export const registerApi = async (
  email,
  password,
  firstName,
  lastName,
  female,
  callback
) => {
  await axios({
    method: "POST",
    url: "http://localhost:5000/user/register",
    data: { email, password, firstName, lastName, female },
  })
    .then((res) => {
      console.log(res, "result register api ");
      localStorage.setItem("userId", res.data.userData._id);
      localStorage.setItem("userName", res.data.userData.firstName);
      callback();
    })
    .catch((err) => {
      console.log(err, "error on register");
    });
};

export const registerGoogleApi = async (
  email,
  firstName,
  lastName,
  userPicture,
  callback
) => {
  await axios({
    method: "POST",
    url: "http://localhost:5000/user/registergoogle",
    data: { email, firstName, lastName, userPicture },
  })
    .then((res) => {
      console.log(res, "result register api google ");
      localStorage.setItem("userId", res.data.userData._id);
      localStorage.setItem("userName", res.data.userData.firstName);
      callback();
    })
    .catch((err) => {
      console.log(err, "error on register");
    });
};

export const loginApi = (email, password, callback) => {
  axios({
    method: "POST",
    url: "http://localhost:5000/user/login",
    data: { email, password },
  })
    .then((res) => {
      console.log(res, "---res login api----");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data._id);
      localStorage.setItem("userName", res.data.firstName);
      callback();
    })
    .catch((err) => {
      console.log(err, "error on loginAPi");
    });
};

export const loginGoogleApi = () => {};

export const addImageApi = (picture, fileName) => {
  // RNFetchBlob.fetch(
  //   "POST",
  //   "http://localhost:5000/register/uploadPicture",
  //   {
  //     Authorization: "Bearer access-token",
  //     otherHeader: "foo",
  //     "Content-Type": "multipart/form-data",
  //   },
  //   [
  //     // element with property `filename` will be transformed into `file` in form data
  //     { name: "image", filename: fileName, data: picture },
  //   ]
  // ).then((resp) => {
  //   console.log(resp);
  // });
};

export const createProductApi = async (
  title,
  description,
  productPicture,
  condition,
  category,
  user,
  isServices,
  isGoods,
  isFromOrganization,
  callback
) => {
  let userId = await localStorage.getItem("userId");
  axios({
    method: "POST",
    url: "http://localhost:5000/product/createproduct",
    data: {
      title,
      description,
      productPicture,
      condition,
      category,
      user,
      isServices,
      isGoods,
      isFromOrganization,
      userId,
    },
  })
    .then((res) => {
      console.log("produit creer dans api.js");
      callback();
    })
    .catch((err) => {
      console.log(err, "error on loginAPi");
      callback();
    });
};

export const getUserApi = async (dispatch) => {
  let id = await localStorage.getItem("userId");
  axios({
    method: "GET",
    url: `http://localhost:5000/user/${id}`,
  })
    .then((res) => {
      dispatch({ type: "GET_USER", payload: res.data.user });
      console.log(res, "get user api");
    })
    .catch((err) => {
      console.log(err, "error on get user api");
    });
};

export const editProfileUserApi = async (
  firstName,
  lastName,
  about,
  email,
  phoneNumber,
  female,
  userPicture,
  callback
) => {
  let userId = await localStorage.getItem("userId");
  axios({
    method: "POST",
    url: "http://localhost:5000/user/edit",
    data: {
      userId,
      firstName,
      lastName,
      about,
      email,
      phoneNumber,
      female,
      userPicture,
    },
  })
    .then((res) => {
      console.log(res.data, "edit user api");
      callback();
    })
    .catch((err) => {
      console.log(err, "error on loginAPi");
    });
};
