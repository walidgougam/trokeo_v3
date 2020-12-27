import React from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { CrossGreyIcon } from "../../assets/icon/Icon";
import normalize from "react-native-normalize";
import {Colors, BackgroundColors} from "../../constant/colors";

import BtnBlueAction from "../button/BtnBlueAction";
import { Spacings } from "../../constant/layout";

export default function ModalDeleteMessage({
  show,
  handleModal,
  handleShow,
  recieverId,
}) {
  const handleModalChoice = (type) => {
    if (type === "block") {
      handleModal(recieverId, type);
      handleShow();
    } else if (type === "booked") {
      handleModal(recieverId, type);
      handleShow();
    } else if (type === "delete") {
      handleModal(recieverId, type);
      handleShow();
    }
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
              style={{
                // display: "flex",
                alignItems: "flex-end",
                marginTop: Spacings.L,
                marginRight: 24,
              }}
              onPress={handleShow}
              hitSlop={expand_clickable_area}
            >
              <CrossGreyIcon />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleModalChoice("block")}
              style={{ marginTop: 33 }}
            >
              <Text style={{ fontSize: 14 }}>Bloquer l’utilisateur</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleModalChoice("booked")}
              style={{ marginTop: 19 }}
            >
              <Text style={{ fontSize: 14 }}>Indiquer comme réservé</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleModalChoice("delete")}
              style={{ marginTop: 19 }}
            >
              <Text style={{ fontSize: 14 }}>Supprimer la conversation</Text>
            </TouchableOpacity>
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
    backgroundColor:BackgroundColors.white.absolute,
    width: normalize(270),
    height: normalize(196),
    borderRadius: normalize(20),
    display: "flex",
    alignSelf: "center",
    marginTop: normalize(184),
  },
  wrapper_modal: {
    flex: 1,
    // justifyContent: "space-around",
    marginLeft: normalize(43),
    paddingLeft: normalize(10),
  },
  wrapper_cross_icon: {
    display: "flex",
    alignSelf: "flex-end",
    marginRight: normalize(24),
    marginTop: normalize(18),
  },
  text_modal: {
    marginHorizontal: normalize(28),
    textAlign: "center",
    fontSize: normalize(14, "fontSize"),
  },
  expand_clickable_area: { top: 10, bottom: 10, left: 10, right: 10 },
});
