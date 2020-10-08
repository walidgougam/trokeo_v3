import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  Alert,
} from "react-native";
import colors from "../../constant/colors";
import normalize from "react-native-normalize";
import { RightIcon } from "../../assets/icon/Icon";
import fontStyles from "../../constant/fonts";
import { goodsCondition } from "../../helpers";
import { Context as AuthContext } from "../../context/AuthContext";
import css from "../../constant/css";
import { createProductApi } from "../../API";
// import ImagePicker from "react-native-image-picker";
import RNPickerSelect from "react-native-picker-select";
import { Button, Snackbar } from "react-native-paper";

import BtnHomeToggle from "../../component/button/BtnHomeToggle";
import CardPictureIcon from "../../component/picture/CardPictureIcon";
import CardAddPictureIcon from "../../component/picture/CardAddPictureIcon";
import BtnBlueAction from "../../component/button/BtnBlueAction";

export default function CreateProduct({ navigation }) {
  // STATE
  const [goods, setGoods] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("hello");
  const [conditionProduct, setConditionProduct] = useState("");
  const [categoryProduct, setCategoryProduct] = useState();
  const [avatarSource, setAvatarSource] = useState([]);
  // const [pictureSource, setPictureSource] = useState("");
  const [visible, setVisible] = useState(false);

  // CONTEXT
  const { state, createProductContext } = useContext(AuthContext);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const goToCategoryList = () => {
    return navigation.navigate("SelectCategory", { goods });
  };

  // const handleChoosePicture = async () => {
  //   try {
  //     const options = {
  //       title: "my pic app",
  //       takePhotoButtonTitle: "Take photo with your camera",
  //       chooseFromLibraryButtonTitle: "Choose photo from library",
  //     };

  //     ImagePicker.showImagePicker(options, (response) => {
  //       let fileName =
  //         response.fileName ||
  //         response?.uri?.substr(response.uri.lastIndexOf("/") + 1);

  //       if (response.didCancel) {
  //         console.log("User cancelled image picker");
  //       } else if (response.error) {
  //         console.log("Image Picker Error: ", response.error);
  //       } else {
  //         let source = { uri: response.uri };
  //         setAvatarSource((prevState) => {
  //           return [...prevState, { uri: source.uri }];
  //         });
  //         // setPictureSource(response.data);
  //       }
  //     });
  //   } catch (err) {
  //     console.log(err, "error on handle choose photo");
  //   }
  // };

  const createProduct = async () => {
    const userId = await AsyncStorage.getItem("userId");

    if (!title || !description || !conditionProduct || !state.category) {
      console.log("remplissez les champs");
    } else {
      createProductApi(
        title,
        description,
        avatarSource,
        conditionProduct,
        state?.category,
        userId,
        !goods, // isServices
        goods, // isGoods
        false // isFromOrganisation
      );
      setTitle("");
      setDescription("");
      setPicture("");
      setConditionProduct("");
      setAvatarSource([]);
      setVisible(true);
      // setCategoryProduct("");
    }
  };

  //STYLES
  const {
    container,
    _header,
    text_title,
    wrapper_toggle_btn,
    wrapper_camera_picture,
    wrapper_input,
    wrapper_select_goods_condition,
    _label,
    _input,
    wrapper_category,
    text_category,
  } = styles;

  return (
    <View style={container}>
      <View style={_header}>
        <Text style={text_title}>Créer une annonce</Text>
      </View>
      <View style={wrapper_toggle_btn}>
        <BtnHomeToggle
          title="Biens"
          focus={goods}
          changeFocus={() => setGoods(true)}
        />
        <BtnHomeToggle
          title="Services"
          focus={!goods}
          changeFocus={() => setGoods(false)}
        />
      </View>
      <View style={wrapper_camera_picture}>
        <CardPictureIcon image={avatarSource[0]} />
        <CardPictureIcon image={avatarSource[1]} />
        <CardPictureIcon image={avatarSource[2]} />
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => handleChoosePicture()}
        >
          <CardAddPictureIcon />
        </TouchableOpacity>
      </View>
      <View style={wrapper_input}>
        <Text style={_label}>Titre</Text>
        <TextInput
          placeholder="Titre: lampe, échelle, cadre…"
          style={_input}
          onChangeText={(e) => setTitle(e)}
          value={title}
        />
        <Text style={_label}>Description</Text>
        <TextInput
          onChangeText={(e) => setDescription(e)}
          multiline
          placeholder="Donner les caractéristiques du bien proposé (taille, couleur, dimensions …)"
          style={_input}
          maxLength={200}
          value={description}
        />
        <Text style={styles.text_max_length}>200 caractères maximum.</Text>
      </View>
      <View style={wrapper_select_goods_condition}>
        <Text style={_label}>Etat du bien</Text>
        <RNPickerSelect
          style={{ borderBottomColor: "black", borderBottomWidth: 1 }}
          onValueChange={(value) => setConditionProduct(value)}
          placeholder={{
            label: "Sélectionner",
          }}
          items={goodsCondition.map((item, index) => {
            return { label: item, value: item };
          })}
        />
        {/* <TextInput placeholder="Selectionner" style={_input} /> */}
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        style={wrapper_category}
        onPress={() => goToCategoryList()}
      >
        <Text style={text_category}>
          {state?.category ? state?.category : "Catégorie"}
        </Text>
        <RightIcon />
      </TouchableOpacity>
      <View style={{ marginHorizontal: 70, marginTop: 50 }}>
        <BtnBlueAction
          backgroundColor={colors.btn_action}
          color="white"
          title="Publier"
          onPress={() => createProduct()}
        />
      </View>
      <>
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: "Ok",
            onPress: () => {
              // Do something
            },
          }}
        >
          Produit crée
        </Snackbar>
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background_white,
    flex: 1,
  },
  _header: {
    backgroundColor: colors.main_green,
    height: normalize(70, "height"),
    justifyContent: "flex-end",
  },
  text_title: {
    marginBottom: normalize(13),
    fontSize: normalize(18, "fontSize"),
    ...fontStyles.bold,
    lineHeight: 20,
    color: colors.text_white,
    marginLeft: normalize(62),
  },
  wrapper_toggle_btn: {
    flexDirection: "row",
    height: normalize(47, "height"),
  },
  wrapper_camera_picture: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: normalize(50),
    ...css.border_bottom,
    paddingVertical: normalize(17),
  },
  wrapper_input: {
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(11),
    ...css.border_bottom,
  },
  _label: {
    color: colors.text_description_black,
    fontSize: normalize(12, " fontSize"),
    lineHeight: normalize(20),
    marginBottom: normalize(13),
    ...fontStyles.regular,
  },
  _input: {
    fontSize: normalize(12, "fontSize"),
    color: "black",
    ...fontStyles.regular,
    lineHeight: normalize(20),
    borderColor: colors.icon_profile_grey,
    borderWidth: normalize(1),
    padding: normalize(11),
    marginBottom: normalize(13),
    borderRadius: normalize(1),
  },
  text_max_length: {
    color: colors.text_description_black,
    fontSize: normalize(10, " fontSize"),
    lineHeight: normalize(20),
    ...fontStyles.regular,
  },
  wrapper_select_goods_condition: {
    paddingHorizontal: normalize(20),
    paddingTop: normalize(8),
    paddingBottom: normalize(19),
    ...css.border_bottom,
  },
  wrapper_category: {
    flexDirection: "row",
    ...css.border_bottom,
    justifyContent: "space-between",
    paddingHorizontal: normalize(18),
    paddingVertical: normalize(14),
  },
  text_category: {
    ...css.text_input,
  },
});
