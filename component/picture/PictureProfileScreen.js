import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import {Context as AuthContext} from '../../context/AuthContext';
//STYLES
import normalize from 'react-native-normalize';
import {Colors} from '../../constant/colors';
import fontStyles from '../../constant/fonts';
//COMPONENTS
import {ProfilePictureIcon} from '../../assets/icon/Icon';
//REDUX
import {useDispatch, useSelector} from 'react-redux';
import {uploadPictureAction} from '../../redux/actions/UploadFile';

export default function PictureProfileScreen({
  firstName,
  lastName,
  userPicture,
  fontSize,
  width,
  height,
  editProfile,
  avatar,
}) {
  //STATE
  const [avatarSource, setAvatarSource] = useState(userPicture);

  //REDUX
  const dispatch = useDispatch();
  const createProductReducer = useSelector((state) => state.productReducer);

  // const handleChoosePicture = async () => {
  //   console.log('bla');
  //   const hasPermission = await askForPermission();
  //   console.log(hasPermission, 'haspermissions');
  //   if (!hasPermission) {
  //     return;
  //   } else {
  //     // launch the camera with the following settings
  //     let image = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.All,
  //       allowsEditing: true,
  //       aspect: [3, 3],
  //       quality: 1,
  //     });
  //     // make sure a image was taken:
  //     console.log(image, 'imageimage');
  //     if (!image.cancelled) {
  //       setAvatarSource(image?.uri);
  //       changePictureContext(image?.uri);
  //     }
  //   }
  // };

  const renderName = () => {
    if (firstName && lastName) {
      return `${firstName}.${lastName.substring(0, 1)}`;
    } else if (!firstName && !lastName) {
      return 'firstname.lastname';
    } else if (firstName && !lastName) {
      return firstName;
    }
  };

  // STYLES
  const {pseudo, text_change_profile_picture} = styles;
  return (
    <View>
      {userPicture || avatarSource ? (
        <Image
          source={
            Platform.OS === 'ios'
              ? {uri: userPicture.uri || avatarSource.uri}
              : userPicture.uri || avatarSource.uri
          }
          style={{
            width: normalize(86),
            height: normalize(86),
            borderRadius: normalize(100),
            alignSelf: 'center',
          }}
        />
      ) : (
        <View style={{alignSelf: 'center'}}>
          <ProfilePictureIcon width={width} height={height} />
        </View>
      )}
      {editProfile ? (
        <TouchableOpacity onPress={() => dispatch(uploadPictureAction())}>
          <Text style={text_change_profile_picture}>
            Changer ma photo de profil
          </Text>
        </TouchableOpacity>
      ) : (
        <Text style={[pseudo, {fontSize}]}>{renderName()}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  pseudo: {
    marginTop: normalize(12),
    color: Colors.black.text_description_black,
    fontSize: normalize(14, 'fontSize'),
    lineHeight: normalize(20),
    textAlign: 'center',
    // fontFamily: "medium",
  },
  text_change_profile_picture: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: Colors.btn_action,
    color: Colors.btn_action,
    fontSize: normalize(13, 'fontSize'),
    marginTop: 11,
  },
});
