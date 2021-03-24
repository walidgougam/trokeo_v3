import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActionSheetIOS,
  Platform,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
// import ImagePicker from 'react-native-image-picker';
import {BottomSheet, ListItem} from 'react-native-elements';
import {Context as AuthContext} from '../../context/AuthContext';
import SelectPicker from 'react-native-form-select-picker';
//API
import {goodsCondition} from '../../helpers';
import {createProductApi} from '../../API/API';
//STYLES
import {Colors, BackgroundColors} from '../../constant/colors';
import fontStyles from '../../constant/fonts';
import css from '../../constant/css';
import normalize from 'react-native-normalize';
import {loadFont} from '../../assets/Autre';
//COMPONENT
import AddPicture from '../../component/picture/AddPicture';
import BtnHomeToggle from '../../component/button/BtnHomeToggle';
import BtnBlueAction from '../../component/button/BtnBlueAction';
import MessageValidation from '../../component/MessageValidation';
//PICTURE
import {RightIcon, ArrowBottomIcon} from '../../assets/icon/Icon';
//REDUX
import {useDispatch, useSelector} from 'react-redux';
import {uploadPictureAction} from '../../redux/actions/UploadFile';

export default function CreateProduct({navigation}) {
  // STATE
  const [goods, setGoods] = useState(true);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState('hello');
  const [conditionProduct, setConditionProduct] = useState('');
  const [avatarSource, setAvatarSource] = useState([]);
  const [errorOnCreateProduct, setErrorOnCreateProduct] = useState();
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  // CONTEXT
  const {state, createProductContext, categoryProductContext} = useContext(
    AuthContext,
  );
  //REDUX
  const dispatch = useDispatch();
  const createProductReducer = useSelector((state) => state.productReducer);

  //REDUX
  const uploadPictureReducer = useSelector(
    (state) => state.uploadPictureReducer,
  );
  useEffect(() => {}, [avatarSource]);

  useEffect(() => {
    loadFont();
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  });
  const list = [
    {
      title: 'Supprimer',
      containerStyle: {borderTopLeftRadius: 20, borderTopRightRadius: 20},
      titleStyle: {display: 'flex', alignSelf: 'center', color: 'red'},
      onPress: () => setIsBottomSheetVisible(false),
    },
    {
      title: 'Annuler',
      containerStyle: {},
      titleStyle: {color: 'blue', display: 'flex', alignSelf: 'center'},
      onPress: () => setIsBottomSheetVisible(false),
    },
  ];

  // const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setErrorOnCreateProduct('');

  const goToCategoryList = () => {
    return navigation.navigate('SelectCategory', {goods});
  };

  const handleSelect = (e) => {
    setConditionProduct(e);
  };

  const createProduct = async () => {
    const userId = await AsyncStorage.getItem('userId');

    if (!title || !description || !conditionProduct || !state.category) {
      setErrorOnCreateProduct('true');
    } else {
      createProductApi(
        title,
        description,
        // avatarSource,
        conditionProduct,
        state?.category,
        userId,
        !goods, // isServices
        goods, // isGoods
        false, // isFromOrganisation
        uploadPictureReducer,
      );
      setTitle('');
      setDescription('');
      setPicture('');
      setConditionProduct('');
      setAvatarSource([]);
      setErrorOnCreateProduct('false');
      categoryProductContext('');
    }
  };

  const deleteProductPictureIos = (img) => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Annuler', 'Supprimer'],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 0,
        title:
          'Voulez-vous supprimer cette image ? Attention vous ne pourrez plus la récupérer',
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
      },
    );
  };

  const handleDeleteProductPicture = (img) => {
    if (img) {
      Platform.OS === 'ios'
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
    wrapper_input,
    container_select_goods_condition,
    wrapper_select,
    _label,
    _input,
    wrapper_category,
    text_category,
    wrapper_btn,
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
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'space-between',
          // flexGrow: 1,
        }}>
        {/* <View style={{ flex: 1 }}> */}
        <>
          <AddPicture
            // avatar={uploadPictureReducer}
            onPress={(index) => handleDeleteProductPicture(avatarSource[index])}
            onChoosePicture={() => dispatch(uploadPictureAction())}
          />
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
              blurOnSubmit={true}
              onChangeText={(e) => setDescription(e)}
              multiline
              placeholder="Donner les caractéristiques du bien proposé (taille, couleur, dimensions …)"
              style={[_input, {marginBottom: 0}]}
              maxLength={200}
              value={description}
            />
            <Text style={styles.text_max_length}>200 caractères maximum.</Text>
          </View>
          {goods && (
            <View style={container_select_goods_condition}>
              <Text style={_label}>Etat du bien</Text>
              <View style={wrapper_select}>
                <SelectPicker
                  style={{width: '95%'}}
                  placeholder="Sélectionner"
                  onValueChange={(value) => {
                    setConditionProduct(value);
                  }}
                  selected={conditionProduct}>
                  {Object.values(goodsCondition).map((val, index) => (
                    <SelectPicker.Item label={val} value={val} key={index} />
                  ))}
                </SelectPicker>
                <ArrowBottomIcon />
              </View>
            </View>
          )}
          <TouchableOpacity
            activeOpacity={fontStyles.activeOpacity}
            style={wrapper_category}
            onPress={() => goToCategoryList()}>
            <Text style={text_category}>
              {state?.category ? state?.category : 'Catégorie'}
            </Text>
            <RightIcon />
          </TouchableOpacity>
        </>
        <View style={wrapper_btn}>
          <BtnBlueAction
            backgroundColor={Colors.btn_action}
            color={Colors.white.absolute}
            title="Publier"
            onPress={() => createProduct()}
          />
        </View>
        {/* </View> */}
      </ScrollView>
      <>
        <MessageValidation
          backgroundColor={BackgroundColors.green.main}
          accent={Colors.white.absolute}
          color={Colors.white.absolute}
          visible={errorOnCreateProduct === 'false'}
          onDismiss={onDismissSnackBar}
          label={'Ok'}
          message={'Produit crée'}
        />
      </>
      <>
        <MessageValidation
          backgroundColor={'red'}
          accent={Colors.white.absolute}
          color={Colors.white.absolute}
          visible={errorOnCreateProduct === 'true'}
          onDismiss={onDismissSnackBar}
          label={'Ok'}
          message={'Remplissez tous les champs'}
        />
      </>
      {Platform.OS === 'android' && (
        <BottomSheet isVisible={isBottomSheetVisible}>
          {list.map((l, index) => (
            <ListItem
              key={index}
              containerStyle={l?.containerStyle}
              onPress={l?.onPress}>
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
    backgroundColor: BackgroundColors.white.absolute,
    flex: 1,
  },
  _header: {
    backgroundColor: BackgroundColors.green.main,
    height: normalize(70, 'height'),
    justifyContent: 'flex-end',
  },
  text_title: {
    marginBottom: normalize(13),
    fontSize: normalize(18, 'fontSize'),
    // fontFamily: 'bold',
    lineHeight: 20,
    color: Colors.white.absolute,
    marginLeft: normalize(62),
  },
  wrapper_toggle_btn: {
    flexDirection: 'row',
    height: normalize(47, 'height'),
  },
  wrapper_input: {
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(11),
    ...css.border_bottom,
  },
  _label: {
    color: Colors.black.text_description_black,
    fontSize: normalize(12, ' fontSize'),
    lineHeight: normalize(20),
    marginBottom: normalize(13),
    // fontFamily: 'regular',
  },
  _input: {
    fontSize: normalize(12, 'fontSize'),
    color: 'black',
    // fontFamily: 'regular',
    // lineHeight: normalize(20),
    borderColor: Colors.grey.icon_profile_grey,
    borderWidth: 1,
    padding: normalize(11),
    // display: "flex",
    // justifyContent: "center",
    marginBottom: normalize(13),
    borderRadius: normalize(1),
  },
  text_max_length: {
    color: Colors.black.text_description_black,
    fontSize: normalize(10, ' fontSize'),
    lineHeight: normalize(20),
    // fontFamily: 'regular',
  },
  container_select_goods_condition: {
    paddingHorizontal: normalize(20),
    paddingTop: normalize(8),
    paddingBottom: normalize(19),
    ...css.border_bottom,
  },
  wrapper_select: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#BFBDBD',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingLeft: 10,
    paddingRight: 17,
  },
  wrapper_category: {
    flexDirection: 'row',
    ...css.border_bottom,
    justifyContent: 'space-between',
    paddingHorizontal: normalize(18),
    paddingVertical: normalize(14),
  },
  wrapper_btn: {
    marginHorizontal: normalize(70),
    paddingTop: normalize(23),
    paddingBottom: normalize(23),
  },
  text_category: {
    ...css.text_input,
    // fontFamily: 'regular',
  },
});
