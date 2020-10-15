import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../constant/colors";
import normalize from "react-native-normalize";
import { products } from "../../helpersDataBase";
import { OrganizationIcon } from "../../assets/icon/Icon";
import fontStyles from "../../constant/fonts";

import HeaderOrganization from "../../component/header/HeaderOrganization";
import BtnHomeToggle from "../../component/button/BtnHomeToggle";

import { renderForOrganization } from "../../helpers";
import { ScrollView } from "react-native-gesture-handler";

export default function OrganizationScreen({ navigation }) {
  // STATE
  const [goodTab, setGoodTab] = useState(true);
  const [productFromApi, setProductFromApi] = useState();

  useEffect(() => {
    setProductFromApi(products);
  }, []);

  // STYLES
  const {
    container,
    wrapper_organisation_flag,
    title_organization,
    wrapper_toggle_btn,
  } = styles;
  return (
    <View style={container}>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderForOrganization(goodTab, productFromApi, navigation)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    ...fontStyles.regular,
  },
});
