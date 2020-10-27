import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  ActionSheetIOS,
  Platform,
} from "react-native";
import colors from "../../constant/colors";
import fontStyles from "../../constant/fonts";
import { RightIcon } from "../../assets/icon/Icon";
import { goodsCondition } from "../../helpers";
import { createProductApi } from "../../API";
import { Context as AuthContext } from "../../context/AuthContext";
import css from "../../constant/css";
// import RNPickerSelect from "react-native-picker-select";
import * as ImagePicker from "expo-image-picker";
import normalize from "react-native-normalize";
import { BottomSheet, ListItem } from "react-native-elements";
import { Button, Snackbar } from "react-native-paper";

import BtnHomeToggle from "../../component/button/BtnHomeToggle";
import CardPictureIcon from "../../component/picture/CardPictureIcon";
import CardAddPictureIcon from "../../component/picture/CardAddPictureIcon";
import BtnBlueAction from "../../component/button/BtnBlueAction";
import PickerSelect from "../../component/PickerSelect";

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
  const [errorOnCreateProduct, setErrorOnCreateProduct] = useState();
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(true);

  // CONTEXT
  const { state, createProductContext } = useContext(AuthContext);

  useEffect(() => {
    console.log("avatar source");
  }, [avatarSource]);

  const list = [
    {
      title: "Supprimer",
      containerStyle: { borderTopLeftRadius: 20, borderTopRightRadius: 20 },
      titleStyle: { display: "flex", alignSelf: "center", color: "red" },
      onPress: () => setIsBottomSheetVisible(false),
    },
    {
      title: "Annuler",
      containerStyle: {},
      titleStyle: { color: "blue", display: "flex", alignSelf: "center" },
      onPress: () => setIsBottomSheetVisible(false),
    },
  ];

  // const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setErrorOnCreateProduct("");

  const goToCategoryList = () => {
    return navigation.navigate("SelectCategory", { goods });
  };

  const handleChoosePicture = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result, "result picture screen");

    if (!result.cancelled) {
      let source = { uri: result.uri };
      setAvatarSource((prevState) => {
        return [...prevState, { uri: source.uri }];
      });
    }
  };

  const handleSelect = (e) => {
    setConditionProduct(e);
    console.log(e, "handle select from create");
  };

  const createProduct = async () => {
    const userId = await AsyncStorage.getItem("userId");

    if (!title || !description || !conditionProduct || !state.category) {
      setErrorOnCreateProduct("true");
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
      setErrorOnCreateProduct("false");
      // setCategoryProduct("");
    }
  };

  const deleteProductPictureIos = (img) => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Annuler", "Supprimer"],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 0,
        title:
          "Voulez-vous supprimer cette image ? Attention vous ne pourrez plus la récupérer",
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
        } else if (buttonIndex === 1) {
          const newAvatarSource = avatarSource;
          const index = newAvatarSource.indexOf(img);
          if (index > -1) {
            newAvatarSource.splice(index, 1);
            return setAvatarSource((prevState) => {
              return [...newAvatarSource];
            });
          }
        }
      }
    );
  };

  const handleDeleteProductPicture = (img) => {
    if (img) {
      Platform.OS === "ios"
        ? deleteProductPictureIos(img)
        : setIsBottomSheetVisible(true);
    }
  };

  //STYLES
  const {
    _container,
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
    <View style={_container}>
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
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => handleDeleteProductPicture(avatarSource[0])}
        >
          <CardPictureIcon image={avatarSource[0]} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => handleDeleteProductPicture(avatarSource[1])}
        >
          <CardPictureIcon image={avatarSource[1]} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => handleDeleteProductPicture(avatarSource[2])}
        >
          <CardPictureIcon image={avatarSource[2]} />
        </TouchableOpacity>
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
        {/* <PickerSelect
          data={goodsCondition}
          handleSelect={(e) => handleSelect(e)}
          selectedLabel={conditionProduct}
        /> */}
        {/* <RNPickerSelect
            style={{ borderBottomColor: "black", borderBottomWidth: 1 }}
            onValueChange={(value) => setConditionProduct(value)}
            placeholder={{
              label: "Sélectionner",
            }}
            items={goodsCondition.map((item, index) => {
              return { label: item, value: item };
            })}
          /> */}
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
          style={{
            backgroundColor: colors.main_green,
            color: colors.text_white,
          }}
          theme={{ colors: { accent: colors.text_white } }}
          visible={errorOnCreateProduct === "false"}
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
      <>
        <Snackbar
          style={{
            backgroundColor: "red",
            color: colors.text_white,
          }}
          theme={{ colors: { accent: colors.text_white } }}
          visible={errorOnCreateProduct === "true"}
          onDismiss={onDismissSnackBar}
          action={{
            label: "Ok",
            onPress: () => {
              // Do something
            },
          }}
        >
          Remplissez tous les champs
        </Snackbar>
      </>
      {Platform.OS === "android" && (
        <BottomSheet isVisible={isBottomSheetVisible}>
          {list.map((l, i) => (
            <ListItem
              key={i}
              containerStyle={l?.containerStyle}
              onPress={l?.onPress}
            >
              <ListItem.Content>
                <ListItem.Title style={l?.titleStyle}>
                  {l?.title}
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </BottomSheet>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  _container: {
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
    // ...fontStyles.bold,
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
    alignItems: "center",
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
    // ...fontStyles.regular,
  },
  _input: {
    fontSize: normalize(12, "fontSize"),
    color: "black",
    // ...fontStyles.regular,
    // lineHeight: normalize(20),
    borderColor: colors.icon_profile_grey,
    borderWidth: 1,
    padding: normalize(11),
    // display: "flex",
    // justifyContent: "center",
    marginBottom: normalize(13),
    borderRadius: normalize(1),
  },
  text_max_length: {
    color: colors.text_description_black,
    fontSize: normalize(10, " fontSize"),
    lineHeight: normalize(20),
    // ...fontStyles.regular,
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
