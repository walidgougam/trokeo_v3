import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  regular: {
    fontFamily: "OpenSans-Regular",
  },
  semiBold: {
    ...Platform.select({
      ios: {
        fontFamily: "OpenSans-SemiBold",
      },
    }),
  },
  bold: {
    ...Platform.select({
      ios: {
        fontFamily: "OpenSans-Bold",
      },
      //   android: {
      //     fontFamily: "Montserrat Bold",
      //   },
    }),
  },
  heavy: {
    ...Platform.select({
      ios: {
        fontFamily: "Avenir-Heavy",
      },
    }),
  },
  roman: {
    ...Platform.select({
      ios: {
        fontFamily: "Avenir-Roman",
      },
    }),
  },
  medium: {
    ...Platform.select({
      ios: {
        fontFamily: "Avenir-Medium",
      },
    }),
  },
  book: {
    ...Platform.select({
      ios: {
        fontFamily: "Avenir-Book",
      },
    }),
  },
});

export default styles;
