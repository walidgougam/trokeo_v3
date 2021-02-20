import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Alert, Platform} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import {useRoute} from '@react-navigation/native';
//STYLE
import normalize from 'react-native-normalize';
import css from '../../constant/css';
import {Colors, BackgroundColors} from '../../constant/colors';
import {loadFont} from '../../assets/Autre';
//PICTURE
import {ProfilePictureIcon} from '../../assets/icon/Icon';
//COMPONENT
import BtnBlueAction from '../../component/button/BtnBlueAction';
import BackgroundComponent from '../../component/BackgroundComponent';

export default function PictureScreen({navigation}) {
  // ROUTE
  const route = useRoute();
  const {fromRegisterName} = route.params;
  const email = fromRegisterName.email;
  const password = fromRegisterName.password;
  const firstName = fromRegisterName.firstName;
  const lastName = fromRegisterName.lastName;

  // STATE
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {}, []);

  useEffect(() => {
    loadFont();
  });

  const askForPermission = async () => {
    const permissionResult = await Permissions.askAsync(Permissions.CAMERA);
    if (permissionResult.status !== 'granted') {
      Alert.alert('no permissions to access camera!', [{text: 'ok'}]);
      return false;
    }
    return true;
  };

  const handleChoosePicture = async () => {
    const hasPermission = await askForPermission();
    if (!hasPermission) {
      return;
    } else {
      // launch the camera with the following settings
      let image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [3, 3],
        quality: 1,
      });
      // make sure a image was taken:
      if (!image.cancelled) {
        setProfilePicture(image);
      }
    }
  };

  const goNextScreen = () => {
    // console.log(profilePicture, 'userPicture');
    // if (profilePicture) {
    return navigation.navigate('Gender', {
      fromRegisterPicture: {
        email,
        password,
        firstName,
        lastName,
        userPicture: profilePicture,
      },
    });
    // }
    //    else {
    //     Alert.alert('vous devez avoir une photo de profil');
    //   }
  };

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
  const {
    container_white,
    _title,
    text_description,
    profile_picture,
    _pseudo,
    _footer,
    wrapper_btn,
  } = styles;

  return (
    <BackgroundComponent navigation={navigation} route={route}>
      <View style={container_white}>
        <Text style={_title}>Choisir ma photo</Text>
        <Text style={text_description}>
          Vous aurez plus de chance d’échanger avec votre photo !
        </Text>
        {profilePicture ? ( // ancienement avatarSource
          <Image source={profilePicture} style={profile_picture} />
        ) : (
          <View style={{alignSelf: 'center'}}>
            <ProfilePictureIcon
              width={normalize(133, 'width')}
              height={normalize(133, 'height')}
            />
          </View>
        )}
        <Text style={[_pseudo, {fontSize: normalize(14)}]}>{renderName()}</Text>
      </View>
      <View style={_footer}>
        <View style={wrapper_btn}>
          <BtnBlueAction
            title="Ajouter une photo"
            backgroundColor={Colors.btn_action}
            color={Colors.white.absolute}
            onPress={() => handleChoosePicture()}
          />
        </View>
        <BtnBlueAction
          title={profilePicture ? 'Suivant' : 'Passer'}
          backgroundColor={Colors.white.absolute}
          color={Colors.btn_action}
          onPress={() => goNextScreen()}
        />
      </View>
    </BackgroundComponent>
  );
}

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: BackgroundColors.white.absolute,
  },
  container_white: {
    marginHorizontal: normalize(16),
  },
  _title: {
    ...css.title,
    // fontFamily: 'heavy',
  },
  text_description: {
    ...css.text_description,
    // fontFamily: 'roman',
    marginBottom: normalize(62),
  },
  profile_picture: {
    width: 133,
    height: 133,
    borderRadius: normalize(100),
    alignSelf: 'center',
  },
  _pseudo: {
    marginTop: normalize(12),
    color: Colors.black.text_description_black,
    fontSize: normalize(14, 'fontSize'),
    lineHeight: normalize(20),
    textAlign: 'center',
    // fontFamily: 'medium',
  },
  _footer: {
    marginHorizontal: normalize(70),
  },
  wrapper_btn: {
    marginBottom: normalize(18),
  },
});
