import React from "react";
import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
//STYLES
import normalize from "react-native-normalize";
import {Colors} from "../../constant/colors";
import fontStyles from "../../constant/fonts";
//PICTURE
import { CrossGreyIcon } from "../../assets/icon/Icon";
//COMPONENT
import BtnBlueAction from "../button/BtnBlueAction";

export default function ModalChat({
  show,
  handleModalShow,
  navigation,
  product,
  userId,
  recieverId,
}) {
  const goToReviewScreen = () => {
    navigation.navigate("Review", {
      fromModalChat: {
        product,
        recieverId,
        userId,
      },
    });
    handleModalShow();
  };

  // STYLES
  const {
    wrapper_cross_icon,
    text_modal,
    background_modal,
    container_modal,
    wrapper_modal,
    expand_clickable_area,
  } = styles;
  return (
    <Modal transparent={true} visible={show}>
      <View style={background_modal}>
        <View style={container_modal}>
          <View style={wrapper_modal}>
            <TouchableOpacity
              hitSlop={expand_clickable_area}
              activeOpacity={fontStyles.activeOpacity}
              onPress={handleModalShow}
              style={wrapper_cross_icon}
            >
              <CrossGreyIcon />
            </TouchableOpacity>
            <Text style={text_modal}>
              Cliquer sur "confirmer" pour valider l'échange avec le membre
            </Text>
            <View style={{ marginHorizontal: 43, marginBottom: normalize(25) }}>
              <BtnBlueAction
                onPress={() => goToReviewScreen()}
                backgroundColor={Colors.btn_action}
                title="Confirmer"
                width={normalize(236, "width")}
                color={Colors.white.absolute}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  background_modal: {
    flex: 1,
    backgroundColor: Colors.black.black_modal_59,
  },
  container_modal: {
    backgroundColor: Colors.white.absolute,
    width: normalize(321, "width"),
    height: normalize(166, "height"),
    borderRadius: 20,
    display: "flex",
    marginTop: 184,
    alignSelf: "center",
  },
  wrapper_modal: {
    flex: 1,
    justifyContent: "space-between",
  },
  wrapper_cross_icon: {
    display: "flex",
    alignSelf: "flex-end",
    marginRight: normalize(24),
    marginTop: normalize(18),
  },
  text_modal: {
    marginHorizontal: 28,
    textAlign: "center",
    fontSize: normalize(14, "fontSize"),
  },
  expand_clickable_area: { top: 10, bottom: 10, left: 10, right: 10 },
});
