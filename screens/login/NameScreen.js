import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import normalize from "react-native-normalize";
import { useRoute } from "@react-navigation/native";
import css from "../../constant/css";
import colors from "../../constant/colors";
import { Formik } from "formik";
import * as Yup from "yup";

import InputIos from "../../component/input/InputIos";
import InputAndroid from "../../component/input/InputAndroid";
import GreenLineLoaderLogin from "../../component/GreenLineLoaderLogin";
import HeaderComponent from "../../component/header/HeaderComponent";
import BtnBlueAction from "../../component/button/BtnBlueAction";
import BackgroundComponent from "../../component/BackgroundComponent";

const NameScreen = ({ navigation }) => {
  // STATE
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // ROUTE
  const route = useRoute();
  const { email, password } = route.params;

  const initialValues = {
    firstName: "",
    lastName: "",
  };

  const onSubmit = (values) => {
    console.log(values, "alors");
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .trim()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .trim()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const goNextScreen = (values, errors, touched) => {
    return navigation.navigate("Picture", {
      email,
      password,
      firstName: values.firstName,
      lastName: values.lastName,
    });
    if (
      errors.firstName ||
      errors.lastName ||
      (!touched.firstName && !touched.lastName)
    ) {
      return null;
    } else {
      return navigation.navigate("Picture", {
        email,
        password,
        firstName: values.firstName,
        lastName: values.lastName,
      });
    }
  };

  const inputValidation = (errors, values) => {
    if (
      errors.firstName ||
      errors.lastName ||
      (!values.firstName && !values.lastName)
    ) {
      return false;
    } else {
      return true;
    }
  };

  // STYLES
  const { container_white, text_question, text_description } = styles;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, setFieldTouched, touched, errors }) => (
        <BackgroundComponent
          navigation={navigation}
          route={route}
          // title="Créer mon compte"
        >
          <View style={container_white}>
            <Text style={text_question}>Quel est votre nom ? </Text>
            <Text style={text_description}>
              Vous apparaitrez sous la forme Prénom.N sur la plateforme.
            </Text>
            {Platform.OS === "ios" ? (
              <InputIos
                placeholder="Prénom"
                marginBottom={normalize(11)}
                onChangeText={handleChange("firstName")}
                onBlur={() => setFieldTouched("firstName")}
                value={values.password}
              />
            ) : (
              <InputAndroid
                placeholder="Prénom"
                marginBottom={normalize(11)}
                onChangeText={handleChange("firstName")}
                onBlur={() => setFieldTouched("firstName")}
                value={values.password}
              />
            )}
            {Platform.OS === "ios" ? (
              <InputIos
                placeholder="Nom"
                onChangeText={handleChange("lastName")}
                onBlur={() => setFieldTouched("lastName")}
                value={values.password}
              />
            ) : (
              <InputAndroid
                placeholder="Nom"
                onChangeText={handleChange("lasttName")}
                onBlur={() => setFieldTouched("lastName")}
                value={values.password}
              />
            )}
          </View>
          <View style={{ marginHorizontal: normalize(70) }}>
            <BtnBlueAction
              title="Continuer"
              onPress={() => goNextScreen(values, errors, touched)}
              backgroundColor={
                inputValidation(errors, values)
                  ? colors.btn_action
                  : colors.btn_action_37
              }
              color={colors.text_white}
            />
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
  text_question: {
    ...css.title,
  },
  text_description: {
    ...css.text_description,
  },
});

export default NameScreen;
