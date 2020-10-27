import React, { useState, useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Form, Item, Input, Label } from "native-base";
import colors from "../../constant/colors";
import normalize from "react-native-normalize";
import fontStyles from "../../constant/fonts";
import { Context as AuthContext } from "../../context/AuthContext";

import PickerSelect from "../../component/PickerSelect";

export default function InputEditProfileComponent({
  phoneNumber,
  setLastName,
  setFirstName,
  setEmail,
  setPhoneNumber,
  setAbout,
  firstName,
  lastName,
  about,
  email,
}) {
  //STATE
  const [female, setFemale] = useState();
  const [selectedLabel, setSelectedLabel] = useState("");

  // USECONTEXT
  const { state, editProfileContext } = useContext(AuthContext);

  const selectGender = (value) => {
    if (value === "male") {
      setFemale(false);
    } else {
      setFemale(true);
    }
  };

  const handleSelect = (e) => {
    console.log(e, "select");
  };

  //STYLES
  const { label_input, _input, wrapper_input } = styles;
  return (
    <Form>
      <Item style={wrapper_input} floatingLabel last>
        <Label style={label_input}>Nom</Label>
        <Input
          style={_input}
          value={lastName}
          onChangeText={(e) => {
            setLastName(e);
          }}
        />
      </Item>
      <Item style={wrapper_input} floatingLabel last>
        <Label style={label_input}>Prénom</Label>
        <Input
          style={_input}
          value={firstName}
          onChangeText={(e) => {
            setFirstName(e);
          }}
        />
      </Item>
      <Item style={wrapper_input} floatingLabel last>
        <Label style={label_input}>A propos</Label>
        <Input
          style={_input}
          multiline
          value={about}
          onChangeText={(e) => {
            setAbout(e);
          }}
        />
      </Item>
      <Item style={{ borderColor: colors.placeholder_grey }} floatingLabel last>
        <Label style={label_input}>Email</Label>
        <Input
          style={_input}
          value={email}
          onChangeText={(e) => {
            setEmail(e);
          }}
        />
      </Item>
      <Item style={{ borderColor: colors.placeholder_grey }} floatingLabel last>
        <Label style={label_input}>Téléphone</Label>
        <Input
          style={_input}
          value={phoneNumber}
          onChangeText={(e) => {
            setPhoneNumber(e);
          }}
        />
      </Item>
      {/* <Item style={{ borderColor: colors.placeholder_grey }} floatingLabel last> */}
      <Label style={styles.label_input}>Genre</Label>
      <View style={[_input, { borderColor: colors.placeholder_grey }]}>
        <PickerSelect
          data={["homme", "femme"]}
          handleSelect={(e) => handleSelect(e)}
          selectedLabel={selectedLabel}
        />
      </View>
      {/* </Item> */}
      {/* <RNPickerSelect
          style={{
            placeholder: {
              marginLeft: 14,
            },
            placeholderTextColor: { color: "green" },
          }}
          onValueChange={(value) => selectGender(value)}
          placeholder={{
            label: "Genre",
          }}
          items={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
        /> */}
    </Form>
  );
}

const styles = StyleSheet.create({
  wrapper_input: {
    borderColor: colors.placeholder_grey,
  },
  label_input: {
    color: colors.placeholder_grey,
    fontSize: normalize(14, "fontSize"),
  },
  input: {
    fontSize: normalize(14, "fontSize"),
    ...fontStyles.semiBold,
    color: colors.black,
    paddingBottom: normalize(25),
  },
});
