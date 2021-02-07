import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup';
//PICTURE
import {WrongEmailIcon, GoodEmailIcon} from '../../assets/icon/Icon';
//STYLES
import {Colors} from '../../constant/colors';
import css from '../../constant/css';
import normalize from 'react-native-normalize';
import {loadFont} from '../../assets/Autre';
//COMPONENT
import BtnBlueAction from '../../component/button/BtnBlueAction';
import InputAndroid from '../../component/input/InputAndroid';
import InputIos from '../../component/input/InputIos';
import BackgroundComponent from '../../component/BackgroundComponent';
import MessageValidation from '../../component/MessageValidation';

const EmailRegisterScreen = ({navigation}) => {
  //ROUTE
  const route = useRoute();
  //STATE
  const [hidePassword, setHidePassword] = useState(true);
  const [errorOnLogin, setErrorOnLogin] = useState(false);
  const [messageErrorRegister, setMessageErrorRegister] = useState('');

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  useEffect(() => {
    loadFont();
  });

  const initialValues = {
    email: '',
    password: '',
    confirmationPassword: '',
  };

  const onSubmit = (values) => {
    console.log(values, 'alors');
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .required('Required')
      .email('Invalid email format')
      .required('Required'),
    password: Yup.string().trim().min(8, 'Too Short!').max(50, 'Too Long!'),
    confirmationPassword: Yup.string()
      .trim()
      .min(8, 'Too Short!')
      .max(50, 'Too Long!'),
  });

  const inputValidation = (errors, values) => {
    if (
      errors.email ||
      errors.password ||
      errors.confirmationPassword ||
      !values.email ||
      !values.password ||
      !values.confirmationPassword
    ) {
      return false;
    } else {
      return true;
    }
  };

  const emailIconValidation = (errors, touched, values) => {
    if (!touched.email || !values.email) {
      return null;
    } else if (errors.email) {
      return <WrongEmailIcon />;
    } else {
      return <GoodEmailIcon />;
    }
  };

  const passwordIconValidation = (errors, touched, values) => {
    if (!touched.password || !values.password) {
      return null;
    } else if (errors.password) {
      return <WrongEmailIcon />;
    } else {
      return <GoodEmailIcon />;
    }
  };

  const confirmationPasswordIconValidation = (errors, touched, values) => {
    if (!touched.confirmationPassword || !values.confirmationPassword) {
      return null;
    } else if (errors.confirmationPassword) {
      return <WrongEmailIcon />;
    } else {
      return <GoodEmailIcon />;
    }
  };
  const goNextScreen = (values, errors, touched) => {
    if (
      errors.email ||
      errors.password ||
      (!touched.email && !touched.password)
    ) {
      setMessageErrorRegister("Erreur dans l'email et/ou le mot de passe");
      setErrorOnLogin(true);
    } else if (values.password !== values.confirmationPassword) {
      setMessageErrorRegister('Password are not matching');
      setErrorOnLogin(true);
    } else {
      return navigation.navigate('Name', {
        email: values.email,
        password: values.password,
      });
    }
  };

  const onDismissSnackBar = () => {
    setErrorOnLogin(false);
  };

  const {container_white, _title, text_input_question, input_warning} = styles;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({values, handleChange, setFieldTouched, touched, errors}) => (
        <BackgroundComponent
          noGreenLine={false}
          navigation={navigation}
          route={route}>
          <View style={container_white}>
            <Text style={_title}>Bienvenue !</Text>
            <Text style={text_input_question}>
              Tout d’abord, quelle est votre adresse email ?
            </Text>
            <View style={{marginBottom: normalize(24)}}>
              {Platform.OS === 'ios' ? (
                <InputIos
                  login
                  value={values.email}
                  iconValidation={emailIconValidation(errors, touched, values)}
                  placeholder="Votre adresse email"
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                />
              ) : (
                <InputAndroid
                  login
                  value={values.email}
                  iconValidation={emailIconValidation(errors, touched, values)}
                  placeholder="Votre adresse email"
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                />
              )}
              <Text style={input_warning}>
                Vous recevrez un email de confirmation
              </Text>
            </View>

            <Text style={text_input_question}>
              Ensuite, choisissez un mot de passe
            </Text>
            <View>
              {Platform.OS === 'ios' ? (
                <InputIos
                  login
                  password
                  iconValidation={passwordIconValidation(
                    errors,
                    touched,
                    values,
                  )}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  showPassword={() => setHidePassword(!hidePassword)}
                  hidePassword={true}
                  placeholder="Votre mot de passe"
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                />
              ) : (
                <InputAndroid
                  login
                  password
                  iconValidation={passwordIconValidation(
                    errors,
                    touched,
                    values,
                  )}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  showPassword={() => setHidePassword(!hidePassword)}
                  hidePassword={true}
                  placeholder="Votre mot de passe"
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                />
              )}
              <Text style={input_warning}>
                Il doit contenir au moins 8 caractères.
              </Text>
            </View>
            <Text style={[text_input_question, {marginTop: 24}]}>
              Confirmez votre mot de passe
            </Text>
            <View>
              {Platform.OS === 'ios' ? (
                <InputIos
                  login
                  password
                  iconValidation={confirmationPasswordIconValidation(
                    errors,
                    touched,
                    values,
                  )}
                  value={values.confirmationPassword}
                  secureTextEntry={hidePassword}
                  showPassword={() => setHidePassword(!hidePassword)}
                  hidePassword={true}
                  placeholder="Votre mot de passe"
                  onChangeText={handleChange('confirmationPassword')}
                  onBlur={() => setFieldTouched('confirmationPassword')}
                />
              ) : (
                <InputAndroid
                  login
                  password
                  iconValidation={confirmationPasswordIconValidation(
                    errors,
                    touched,
                    values,
                  )}
                  value={values.confirmationPassword}
                  secureTextEntry={hidePassword}
                  showPassword={() => setHidePassword(!hidePassword)}
                  hidePassword={true}
                  placeholder="Votre mot de passe"
                  onChangeText={handleChange('confirmationPassword')}
                  onBlur={() => setFieldTouched('confirmationPassword')}
                />
              )}
            </View>
          </View>
          <View>
            <View style={{marginHorizontal: normalize(70)}}>
              <BtnBlueAction
                title="Continuer"
                onPress={() => {
                  goNextScreen(values, errors, touched);
                }}
                backgroundColor={
                  inputValidation(errors, values)
                    ? Colors.btn_action
                    : Colors.btn_action_37
                }
                color={Colors.white.absolute}
              />
            </View>
          </View>
          <>
            <MessageValidation
              backgroundColor={'red'}
              accent={Colors.white.absolute}
              color={Colors.white.absolute}
              visible={errorOnLogin}
              onDismiss={onDismissSnackBar}
              label={'Ok'}
              message={messageErrorRegister}
            />
          </>
        </BackgroundComponent>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container_white: {
    marginHorizontal: normalize(16),
  },
  _title: {
    ...css.title,
    fontFamily: 'heavy',
  },
  text_input_question: {
    ...css.text_description,
    fontFamily: 'roman',
  },
  input_warning: {
    fontSize: normalize(10, 'fontSize'),
    color: Colors.black.text_description_black,
    fontFamily: 'roman',
  },
});

export default EmailRegisterScreen;
