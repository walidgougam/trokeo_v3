import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { renderForOrganization } from "../../helpers";
import { products } from "../../helpersDataBase";
import { Context as AuthContext } from "../../context/AuthContext";
//STYLES
import colors from "../../constant/colors";
import normalize from "react-native-normalize";
import fontStyles from "../../constant/fonts";
import { loadFont } from "../../assets/Autre";
//COMPONENT
import HeaderOrganization from "../../component/header/HeaderOrganization";
import BtnHomeToggle from "../../component/button/BtnHomeToggle";
import HeaderFilterComponent from "../../component/header/HeaderFilterComponent";
//PICTURE
import { OrganizationIcon } from "../../assets/icon/Icon";

export default function OrganizationScreen({ navigation }) {
  // STATE
  const [goodTab, setGoodTab] = useState(true);
  const [productFromApi, setProductFromApi] = useState();

  // CONTEXT
  const { state } = useContext(AuthContext);

  //CONTEXT STATE
  const category = state?.search?.category;
  const distance = state?.search?.distance;
  const condition = state?.search?.condition;

  useEffect(() => {
    setProductFromApi(products);
  }, []);

  useEffect(() => {
    loadFont();
  });

  const isProductFilter = () => {
    if (category?.length > 0 || distance?.length > 0 || condition?.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  // STYLES
  const {
    _container,
    wrapper_organisation_flag,
    title_organization,
    wrapper_toggle_btn,
  } = styles;
  return (
    <View style={_container}>
      <HeaderOrganization isLogo navigation={navigation} />
      <View style={wrapper_organisation_flag}>
        <Text style={title_organization}>
          Dons demandés par les associations
        </Text>
        <View style={{ zIndex: 10 }}>
          <OrganizationIcon />
        </View>
      </View>
      <View style={wrapper_toggle_btn}>
        <BtnHomeToggle
          title="Biens"
          focus={goodTab}
          changeFocus={() => setGoodTab(true)}
        />
        <BtnHomeToggle
          title="Services"
          focus={!goodTab}
          changeFocus={() => setGoodTab(false)}
        />
      </View>
      {isProductFilter() && (
        <HeaderFilterComponent
          category={category}
          condition={condition}
          distance={distance}
        />
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderForOrganization(goodTab, productFromApi, navigation)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: colors.background_white,
  },
  wrapper_organisation_flag: {
    backgroundColor: colors.main_green,
    height: normalize(70, "height"),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper_toggle_btn: {
    flexDirection: "row",
    height: normalize(57, "height"),
  },
  title_organization: {
    position: "absolute",
    marginVertical: normalize(25),
    fontSize: normalize(17, "fontSize"),
    lineHeight: normalize(20),
    color: colors.background_white,
    fontFamily: "regular",
  },
});
