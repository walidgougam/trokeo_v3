import * as Font from "expo-font";

export const loadFont = async () => {
  try {
    await Font.loadAsync({
      regular: require("./fonts/OpenSans-Regular.ttf"),
      semiBold: require("./fonts/OpenSans-SemiBold.ttf"),
      bold: require("./fonts/OpenSans-Bold.ttf"),
      heavy: require("./fonts/Avenir-Heavy.ttf"),
      roman: require("./fonts/Avenir-Roman.ttf"),
      medium: require("./fonts/Avenir-Medium.ttf"),
      book: require("./fonts/Avenir-Book.ttf"),
    });
  } catch (e) {
    console.log(e);
  }
};
