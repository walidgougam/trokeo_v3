import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  AsyncStorage,
  Button,
  TouchableHighlight,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import normalize from "react-native-normalize";
import colors from "../../constant/colors";
import css from "../../constant/css";
import { Formik } from "formik";
import * as Yup from "yup";
import { WrongEmailIcon, GoodEmailIcon } from "../../assets/icon/Icon";
import { loginApi } from "../../API";
import fontStyles from "../../constant/fonts";

import BtnBlueAction from "../../component/button/BtnBlueAction";
import InputAndroid from "../../component/input/InputAndroid";
import InputIos from "../../component/input/InputIos";
import BackgroundComponent from "../../component/BackgroundComponent";

const EmailLoginScreen = ({ navigation }) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const route = useRoute();
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values, "alors");
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .required("Required")
      .email("Invalid email format")
      .required("Required"),
    password: Yup.string().trim().min(8, "Too Short!").max(50, "Too Long!"),
  });

  const inputValidation = (errors, values) => {
    if (errors.email || errors.password || !values.email || !values.password) {
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
  const goNextScreen = (values, errors, touched) => {
    if (
      errors.email ||
      errors.password ||
      (!touched.email && !touched.password)
    ) {
      return null;
    }

    loginApi(values.email, values.password, () => {
      return navigation.navigate("HomeBottomTab");
    });
  };

  const {
    container_white,
    _title,
    wrapper_forget_password,
    forget_password,
  } = styles;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, setFieldTouched, touched, errors }) => (
        <BackgroundComponent
          noGreenLine={true}
          navigation={navigation}
          route={route}
        >
          <View style={container_white}>
            <Text style={_title}>Connectez-vous</Text>
            <View style={{ marginBottom: normalize(24) }}>
              {Platform.OS === "ios" ? (
                <InputIos
                  login
                  value={values.email}
                  iconValidation={emailIconValidation(errors, touched, values)}
                  placeholder="Votre adresse email"
                  onChangeText={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                />
              ) : (
                <InputAndroid
                  login
                  value={values.email}
                  iconValidation={emailIconValidation(errors, touched, values)}
                  placeholder="Votre adresse email"
                  onChangeText={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                />
              )}
            </View>
            <View>
              {Platform.OS === "ios" ? (
                <InputIos
                  login
                  password
                  iconValidation={passwordIconValidation(
                    errors,
                    touched,
                    values
                  )}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  showPassword={() => setHidePassword(!hidePassword)}
                  hidePassword={true}
                  placeholder="Votre mot de passe"
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                />
              ) : (
                <InputAndroid
                  login
                  password
                  iconValidation={passwordIconValidation(
                    errors,
                    touched,
                    values
                  )}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  showPassword={() => setHidePassword(!hidePassword)}
                  hidePassword={true}
                  placeholder="Votre mot de passe"
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                />
              )}
            </View>
            <TouchableHighlight style={wrapper_forget_password}>
              <Text style={forget_password}>Mot de passe oublié</Text>
            </TouchableHighlight>
          </View>
          <View>
            <View style={{ marginHorizontal: normalize(70) }}>
              <BtnBlueAction
                title="Continuer"
                onPress={() => {
                  goNextScreen(values, errors, touched);
                }}
                backgroundColor={
                  inputValidation(errors, values)
                    ? colors.btn_action
                    : colors.btn_action_37
                }
                color={colors.text_white}
              />
            </View>
          </View>
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
  },
  text_input_question: {
    ...css.text_description,
  },
  input_warning: {
    fontSize: normalize(10, "fontSize"),
    color: colors.text_description_black,
    ...fontStyles.roman,
  },
  wrapper_forget_password: {
    marginTop: normalize(36),
    alignItems: "center",
  },
  forget_password: {
    ...css.text_title,
    color: colors.forget_password_grey,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: colors.forget_password_grey,
  },
});

export default EmailLoginScreen;
