import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
  Keyboard,
} from "react-native";
import colors from "../../constant/colors";
import normalize from "react-native-normalize";
import { HidePasswordIcon } from "../../assets/icon/Icon";
import css from "../../constant/css";

export default function InputIos({
  onChangeText,
  secureTextEntry,
  value,
  placeholder,
  showPassword,
  password,
  marginBottom,
  onBlur,
  iconValidation,
}) {
  return (
    <View style={[styles.container_input, { marginBottom: marginBottom }]}>
      <View style={styles.wrapper_input}>
        <TextInput
          blurOnSubmit={false}
          onSubmitEditing={() => Keyboard.dismiss()}
          maxLength={30}
          style={styles.input}
          placeholderTextColor={colors.text_input}
          placeholder={placeholder}
          underlineColorAndroid="transparent"
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        {password && (
          <TouchableOpacity
            activeOpacity={0.6}
            style={{ marginRight: normalize(13) }}
            onPress={showPassword}
          >
            <HidePasswordIcon />
          </TouchableOpacity>
        )}
        {iconValidation}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container_input: {
    ...css.row_space_between,
    alignItems: "center",
    borderColor: colors.icon_profile_grey,
    borderWidth: 1,
    borderRadius: normalize(1),
    paddingHorizontal: normalize(14),
  },
  wrapper_input: {
    height: normalize(42, "height"),
    borderColor: "transparent",
    justifyContent: "center",
  },
  input: {
    ...css.text_input,
    width: normalize(250),
    height: "100%",
    alignSelf: "center",
  },
});
