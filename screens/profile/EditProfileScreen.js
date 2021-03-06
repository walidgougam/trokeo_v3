import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Switch} from 'react-native-paper';
import {Context as AuthContext} from '../../context/AuthContext';
//STYLE
import {Colors, BackgroundColors} from '../../constant/colors';
import {loadFont} from '../../assets/Autre';
import normalize from 'react-native-normalize';
import css from '../../constant/css';
//API
import {editProfileUserApi} from '../../API/API';
//COMPONENT
import HeaderComponent from '../../component/header/HeaderComponent';
import PictureProfileScreen from '../../component/picture/PictureProfileScreen';
import InputEditProfileComponent from '../../component/input/InputEditProfileComponent';
import BtnBlueAction from '../../component/button/BtnBlueAction';
//REDUX
import {useDispatch, useSelector} from 'react-redux';
import {editProfileAction} from '../../redux/actions/ProfileAction';

export default function EditProfileScreen({navigation}) {
  // ROUTE
  const route = useRoute();
  const {userData} = route.params;

  // CONTEXT
  const {state, editProfileContext} = useContext(AuthContext);

  // STATE
  const [picture, setPicture] = useState();
  const [firstName, setFirstName] = useState(userData?.firstName);
  const [lastName, setLastName] = useState(userData?.lastName);
  const [about, setAbout] = useState(userData?.about);
  const [email, setEmail] = useState(userData?.email);
  const [phoneNumber, setPhoneNumber] = useState(userData?.phoneNumber);
  const [female, setFemale] = useState(userData?.female);
  const [userPicture, setUserPicture] = useState(userData?.userPicture);
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  //REDUX
  const dispatch = useDispatch();

  useEffect(() => {
    loadFont();
  });

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  const goBackProfile = () => {
    dispatch(
      editProfileAction(
        picture,
        firstName,
        lastName,
        about,
        email,
        phoneNumber,
      ),
    );
    editProfileUserApi(
      firstName,
      lastName,
      about,
      email,
      phoneNumber,
      female,
      state?.picture,
      () => navigation.goBack(),
    );
  };

  // STYLES
  const {
    _container,
    wrapper_profile_info,
    wrapper_geoloc,
    geoloc_text,
  } = styles;

  return (
    <View style={_container}>
      <HeaderComponent navigation={navigation} title="Mise à jour du profil" />
      <KeyboardAvoidingView enabled={true} behavior={'position'}>
        <ScrollView>
          <View style={wrapper_profile_info}>
            <PictureProfileScreen
              editProfile
              avatar={(e) => setUserPicture(e)}
              width={normalize(86, 'width')}
              height={normalize(86, 'height')}
              fontSize={normalize(11, 'fontSize')}
              userPicture={userData?.userPicture}
            />
          </View>
          <InputEditProfileComponent
            setFirstName={(e) => setFirstName(e)}
            setLastName={(e) => setLastName(e)}
            setEmail={(e) => setEmail(e)}
            setPhoneNumber={(e) => setPhoneNumber(e)}
            setAbout={(e) => setAbout(e)}
            phoneNumber={phoneNumber}
            firstName={firstName}
            lastName={lastName}
            about={about}
            email={email}
          />
          <View style={wrapper_geoloc}>
            <Text style={geoloc_text}>Géolocalisation</Text>
            <Switch
              enabled
              value={isSwitchOn}
              onValueChange={onToggleSwitch}
              color={Colors.blue.switch_btn_blue}
              style={{marginRight: normalize(33)}}
            />
          </View>
          <View
            style={{marginTop: normalize(64), marginHorizontal: normalize(70)}}>
            <BtnBlueAction
              title="Enrengistrez"
              color={Colors.white.absolute}
              backgroundColor={BackgroundColors.blue.btn_action}
              onPress={() => goBackProfile()}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: BackgroundColors.white.absolute,
  },
  wrapper_profile_info: {
    alignSelf: 'center',
    marginTop: normalize(34),
  },
  container_section: {
    height: '100%',
    marginTop: normalize(72),
    marginBottom: normalize(54),
  },
  wrapper_input: {
    borderColor: Colors.grey.placeholder_grey,
  },
  label_input: {
    color: Colors.grey.placeholder_grey,
    fontSize: normalize(14, 'fontSize'),
  },
  wrapper_geoloc: {
    ...css.row_space_between,
    marginTop: normalize(12),
    alignItems: 'center',
  },
  geoloc_text: {
    ...css.text_title,
    // fontFamily: "regular",
    color: Colors.grey.placeholder_grey,
    marginLeft: normalize(15),
  },
});
