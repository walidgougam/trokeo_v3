import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import colors from "../../constant/colors";
import normalize from "react-native-normalize";
import { HidePasswordIcon } from "../../assets/icon/Icon";

export default function InputAndroid({
  onChangeText,
  secureTextEntry,
  placeholder,
  showPassword,
  password,
  value,
  onBlur,
  iconValidation,
}) {
  return (
    <View style={styles.container_android}>
      <TextInput
        style={styles.input_android}
        maxLength={30}
        autoCapitalize="none"
        placeholderTextColor={colors.text_input}
        placeholder={placeholder}
        underlineColorAndroid="transparent"
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
      />
      <View style={styles.wrapper_icon_android}>
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
  container_android: {
    borderColor: colors.icon_profile_grey,
    borderWidth: 1,
    flexDirection: "row",
    borderColor: "#BFBDBD",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  input_android: {
    flex: 2,
  },
  wrapper_icon_android: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: normalize(15),
    alignSelf: "center",
  },
});
