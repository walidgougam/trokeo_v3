import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import {IOS_URL, ANDROID_URL} from '../../API/constant';
//STYLE
import {Colors, BackgroundColors} from '../../constant/colors';
import css from '../../constant/css';
import {loadFont} from '../../assets/Autre';
import normalize from 'react-native-normalize';
//COMPONENT
import BtnBlueAction from '../../component/button/BtnBlueAction';
import RadioButton from '../../component/input/RadioBtnComponent';
import BackgroundComponent from '../../component/BackgroundComponent';
import MessageValidation from '../../component/MessageValidation';
//REDUX
import {useDispatch, useSelector} from 'react-redux';
import {REGISTER} from '../../redux/actions/AuthAction';

export default function GenderScreen({navigation}) {
  //ROUTE
  const route = useRoute();
  const {fromRegisterPicture} = route.params;
  const email = fromRegisterPicture.email;
  const password = fromRegisterPicture.password;
  const firstName = fromRegisterPicture.firstName;
  const lastName = fromRegisterPicture.lastName;
  const userPicture = fromRegisterPicture.userPicture;

  // STATE
  const [female, setFemale] = useState(false);
  const [errorOnRegister, setErrorOnRegister] = useState(false);

  //REDUX
  const dispatch = useDispatch();
  const registerData = useSelector((state) => state.authReducer);

  useEffect(() => {
    loadFont();
  });

  const onDismissSnackBar = () => setErrorOnRegister(false);

  const goNextScreen = async () => {
    return axios({
      method: 'POST',
      url:
        Platform.OS === 'ios'
          ? `${IOS_URL}/user/register`
          : `${ANDROID_URL}/user/register`,
      data: {
        email,
        password,
        firstName,
        lastName,
        female,
        userPicture: {uri: userPicture?.uri},
      },
    })
      .then((res) => {
        console.log(res, 'result register api ');
        AsyncStorage.setItem('userId', res?.data?.userData?._id);
        dispatch(REGISTER('success'));
      })
      .catch((err) => {
        console.log(err, 'error on register api');
        setErrorOnRegister(true);
        dispatch(REGISTER('errors'));
      });
  };

  //STYLES
  const {container_white, _title, text_description} = styles;
  return (
    <BackgroundComponent
      navigation={navigation}
      route={route}
      // title="Créer mon compte"
    >
      <View style={container_white}>
        <Text style={_title}>Pour finir !</Text>
        <Text style={text_description}>Vous êtes</Text>
        <View>
          <RadioButton
            title="un trokeur"
            value={!female}
            status={!female ? 'checked' : 'unchecked'}
            onPress={() => setFemale(false)}
          />
          <RadioButton
            title="une trokeuse"
            value={female}
            status={female ? 'checked' : 'unchecked'}
            onPress={() => setFemale(true)}
          />
        </View>
      </View>
      <View style={{marginHorizontal: normalize(70)}}>
        <BtnBlueAction
          title="Terminer"
          backgroundColor={Colors.btn_action}
          onPress={() => {
            goNextScreen();
          }}
          color={Colors.white.absolute}
        />
      </View>
      <>
        {console.log(errorOnRegister, 'erroronregister')}
        <MessageValidation
          backgroundColor={'red'}
          accent={Colors.white.absolute}
          color={Colors.white.absolute}
          visible={errorOnRegister}
          onDismiss={onDismissSnackBar}
          label={'Ok'}
          message={'erreur de connexion'}
        />
      </>
    </BackgroundComponent>
  );
}
