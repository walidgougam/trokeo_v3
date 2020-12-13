import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
//PICTURE
import {
  GroupWithHeart,
  ManPainting,
  PiggyBank,
  LogoTrokeo,
} from "../../assets/image/images";
import { ArrowLeftIcon } from "../../assets/icon/Icon";
//STYLE
import normalize from "react-native-normalize";
import {Colors} from "../../constant/colors";
import fontStyles from "../../constant/fonts";
import { loadFont } from "../../assets/Autre";
import { Spacings } from "../../constant/layout";

export default function EcoCitizenScreen({ navigation }) {
  useEffect(() => {
    loadFont();
  });
  // STYLES
  const {
    wrapper_header,
    arrow_left,
    _logo,
    _image,
    _title,
    _description,
    wrapper_description,
  } = styles;
  return (
    <ScrollView style={{ backgroundColor: Colors.white.absolute }}>
      <View style={wrapper_header}>
        <TouchableOpacity
          activeOpacity={fontStyles.activeOpacity}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          style={arrow_left}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftIcon />
        </TouchableOpacity>
        <View style={_logo}>
          <LogoTrokeo
            width={normalize(266, "width")}
            height={normalize(99, "height")}
          />
        </View>
      </View>
      <View style={[_image, { marginTop: normalize(29) }]}>
        <GroupWithHeart />
      </View>
      <View style={wrapper_description}>
        <Text style={_title}>Le geste eco-citoyen</Text>
        <Text style={_description}>
          Lutter contre la consommation de masse c’est possible avec Trokéo
          n’achetez plus, échangez !
        </Text>
      </View>
      <View style={_image}>
        <PiggyBank />
      </View>
      <View style={wrapper_description}>
        <Text style={_title}>Economisez de l’argent</Text>
        <Text style={_description}>
          Le troc vous permettra d’accéder à des offres répondant à vos besoins
          tout en vous libérant d’objets encombrants
        </Text>
      </View>
      <View style={_image}>
        <ManPainting />
      </View>
      <View style={wrapper_description}>
        <Text style={_title}>Faite partagez votre savoir faire</Text>
        <Text style={_description}>
          Proposer vos prestations contre un service ou un objet auprès de la
          communauté de trokeurs.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper_header: {
    backgroundColor: Colors.green.main,
    height: normalize(230),
    alignItems: "center",
  },
  arrow_left: {
    position: "absolute",
    top: normalize(31),
    left: normalize(11),
  },
  _logo: {
    marginTop: normalize(79),
  },
  _image: {
    alignItems: "center",
    marginBottom: normalize(37),
  },
  wrapper_description: {
    marginHorizontal: normalize(22),
  },
  _title: {
    fontSize: normalize(20, "fontSize"),
    lineHeight: normalize(20),
    marginBottom: normalize(Spacings.L),
    color: Colors.title_eco_citizen,
    fontFamily: "semiBold",
  },
  _description: {
    fontSize: normalize(15, "fontSize"),
    color: Colors.title_eco_citizen,
    lineHeight: normalize(20),
    marginBottom: normalize(20),
    fontFamily: "regular",
  },
});
