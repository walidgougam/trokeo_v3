import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet, ScrollView, Platform, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {ActivityIndicator} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';
// import * as Location from 'expo-location';
//STYLE
import {Colors, BackgroundColors} from '../../constant/colors';
import normalize from 'react-native-normalize';
import {loadFont} from '../../assets/Autre';
//COMPONENT
import HeaderNotification from '../../component/header/HeaderNotification';
import HeaderFilterComponent from '../../component/header/HeaderFilterComponent';
import BtnHomeToggle from '../../component/button/BtnHomeToggle';
import NoGeolocationComponent from '../../component/NoGeolocationComponent';
import ProductFeedComponent from '../../component/ProductFeedComponent';
import NoProductComponent from '../../component/NoProductComponent';
//REDUX
import {useDispatch, useSelector} from 'react-redux';

export default function HomeScreen({navigation}) {
  //STATE
  const [goodTab, setGoodTab] = useState(true);
  const [locationState, setLocationState] = useState(true);
  const [loading, setLoading] = useState(false);

  const getProduct = useSelector((state) => state.productReducer);
  const searchProduct = useSelector((state) => state.searchProductReducer);

  const category = searchProduct?.category;
  const distance = searchProduct?.distance;
  const condition = searchProduct?.condition;

  // FOCUS ON SCREEN
  const isFocuser = useIsFocused();

  useEffect(() => {
    console.log('ca marche selma');
  });

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      console.log(getProduct, 'getproduct');
      loadFont();
    }
    return () => {
      mounted = false;
    };
  }, [category, distance, condition]);

  const getCurrentLocation = async () => {
    let {status} = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
    }
    let location = await Location.getCurrentPositionAsync({});
    if (location) {
      AsyncStorage.setItem('location', JSON.stringify(location));
      setLocationState(location);
    }
  };

  const clickFromChildLike = () => {
    getAllProduct();
  };

  const returnGoodProductSearch = (goodProduct) => {
    if (
      (condition !== undefined && condition.length > 0) ||
      (category !== undefined && category.length > 0) ||
      (distance !== undefined && distance.length > 0)
    ) {
      let allOptionSearch = [].concat(condition, category, distance);
      let data = [];
      for (let i = 0; i < allOptionSearch.length; i++) {
        if (
          allOptionSearch?.includes(goodProduct[i]?.category) ||
          allOptionSearch?.includes(goodProduct[i]?.condition)
        ) {
          data.push(goodProduct[i]);
        }
      }
      return data;
    }
    return goodProduct;
  };

  const renderScreen = () => {
    console.log(getProduct, 'getProduct renderscreen');
    const serviceProduct = getProduct?.filter(
      (e) => e.isServices === true && e.isFromOrganization === false,
    );
    const goodProduct = getProduct?.filter(
      (e) => e.isGoods === true && e.isFromOrganization === false,
    );
    if (!goodTab && serviceProduct?.length === 0) {
      return <NoProductComponent onPress={() => getAllProduct()} />;
    }
    //pas de bien dans longlet bien
    else if (goodTab && goodProduct?.length === 0) {
      return <NoProductComponent onPress={() => getAllProduct()} />;
    }
    // service dans l'onglet service
    else if (!goodTab && serviceProduct?.length > 0) {
      return (
        <ProductFeedComponent
          navigation={navigation}
          allProduct={serviceProduct}
          clickFromChild={() => clickFromChildLike()}
        />
      );
    }
    // bien dans l'onglet bien
    else if (goodTab && goodProduct?.length > 0) {
      return (
        <ProductFeedComponent
          navigation={navigation}
          allProduct={returnGoodProductSearch(goodProduct)}
          clickFromChild={() => clickFromChildLike()}
        />
      );
    }
  };

  const isProductFilter = () => {
    if (category?.length > 0 || distance?.length > 0 || condition?.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  //STYLE
  const {no_internet_connexion, _container, wrapper_toggle_btn} = styles;

  if (Object.keys(getProduct).length === 0) {
    return (
      <View style={no_internet_connexion}>
        <Text>Pas de connexion internet</Text>
      </View>
    );
  }

  if (loading) {
    return <ActivityIndicator size="large" style={{flex: 1}} />;
  }

  return (
    <View style={_container}>
      {console.log(getProduct, 'getProduct')}
      {console.log(searchProduct, 'search product')}
      <HeaderNotification isLogo navigation={navigation} />
      <View style={wrapper_toggle_btn}>
        <BtnHomeToggle
          fromScreenWithProduct
          title="Biens"
          focus={goodTab}
          changeFocus={() => setGoodTab(true)}
          lengthGoods={getProduct?.filter((e) => e?.isGoods === true).length}
        />
        <BtnHomeToggle
          fromScreenWithProduct
          title="Services"
          focus={!goodTab}
          changeFocus={() => setGoodTab(false)}
          lengthServices={
            getProduct?.filter((e) => e.isServices === true).length
          }
        />
      </View>
      {isProductFilter() && <HeaderFilterComponent />}
      <ScrollView>
        {!locationState ? (
          <NoGeolocationComponent getLocation={() => getCurrentLocation()} />
        ) : (
          renderScreen()
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  no_internet_connexion: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  _container: {
    flex: 1,
    backgroundColor: BackgroundColors.white.absolute,
  },
  wrapper_toggle_btn: {
    flexDirection: 'row',
    height: normalize(57, 'height'),
  },
});
