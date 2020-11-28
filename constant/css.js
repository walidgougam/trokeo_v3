import colors from "./colors";
import normalize from "react-native-normalize";
import fontStyles from "../constant/fonts";

export default {
  text_input: {
    fontSize: normalize(12, "fontSize"),
    // fontFamily: "regular",
    // lineHeight: normalize(20),
    color: colors.text_description_black,
  },
  text_description: {
    fontSize: normalize(12, "fontSize"),
    fontFamily: "roman",
    color: colors.text_description_black,
    lineHeight: normalize(20),
    marginBottom: normalize(11),
  },
  text_title: {
    fontSize: normalize(14, "fontSize"),
    // fontFamily: "regular",
    lineHeight: 20,
  },
  title: {
    color: colors.main_green,
    fontSize: normalize(16, "fontSize"),
    marginBottom: normalize(11),
    lineHeight: normalize(20),
    // fontFamily: "heavy",
  },
  btn_login: {
    fontSize: normalize(16, "fontSize"),
    lineHeight: normalize(20),
    // fontFamily: "regular",
  },
  border_bottom: {
    borderBottomColor: colors.placeholder_grey,
    borderBottomWidth: 1,
  },
  row_space_between: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
};
