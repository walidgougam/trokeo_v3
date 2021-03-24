import ImagePicker from 'react-native-image-picker';

export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const UPLOAD_IMAGE_ERROR = 'UPLOAD_IMAGE_ERROR';

export const uploadPictureAction = () => {
  return (dispatch) => {
    let options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log(response?.uri, 'source');
        const res = response;
        dispatch({type: UPLOAD_IMAGE_SUCCESS, payload: response});
      }
    });
  };
};
