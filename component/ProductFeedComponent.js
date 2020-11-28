import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
//STYLE
import normalize from "react-native-normalize";
//COMPONENT
import CardProductComponent from "./card/CardProductComponent";

export default function ProductFeedComponent({
  allProduct,
  navigation,
  clickFromChild,
}) {
  // CONTEXT
  const { state } = useContext(AuthContext);

  //CONTEXT STATE
  const category = state?.search?.category;
  const distance = state?.search?.distance;
  const condition = state?.search?.condition;

  const numColumns = 2;
  const WIDTH = Dimensions.get("window").width;
  const formatData = (dataList, numColumns) => {
    const totalRows = Math.floor(dataList?.length / numColumns);
    let totalLastRow = dataList?.length - totalRows * numColumns;

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      dataList?.push({ name: "blank", empty: true });
      totalLastRow++;
    }
    return dataList;
  };

  const renderItem = ({ item, index }) => {
    if (item?.empty) {
      return <View key={index} style={{ flex: 1 }}></View>;
    }
    return (
      <>
        <CardProductComponent
          key={index}
          clickFromChild={clickFromChild}
          userData={item?.user}
          productId={item?._id}
          imageProduct={item?.productPicture}
          titleProduct={item?.title}
          descriptionProduct={item?.description}
          likesProduct={item?.likes}
          distanceOwner={item?.distance}
          navigation={navigation}
          bookedProduct={item?.booked}
          categoriesProduct={item?.category}
          conditionProduct={item?.condition}
        />
      </>
    );
  };

  // const optionFilter = (e) => {
  //   return () => {
  //     if (category !== undefined || condition !== undefined) {
  //       console.log("category 1", category);
  //       console.log(
  //         category.find((e) => e === category[0]),
  //         "blablabla"
  //       );
  //       return (e) => e === category[0];
  //     } else {
  //       console.log("category 2", category);
  //       return e;
  //     }
  //   };
  // };

  //STYLES
  const { _container, wrapper_list } = styles;
  return (
    <View style={_container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={wrapper_list}
        data={formatData(allProduct, numColumns)}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        numColumns={numColumns}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    marginHorizontal: normalize(21),
    justifyContent: "space-between",
  },
  wrapper_list: {
    marginTop: normalize(22),
  },
});
