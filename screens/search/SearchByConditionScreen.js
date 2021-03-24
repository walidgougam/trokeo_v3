import React, {useState, useEffect, useContext} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {goodsCondition2} from '../../helpers';
import {useRoute} from '@react-navigation/native';
//STYLES
import {Colors, BackgroundColors} from '../../constant/colors';
//COMPONENT
import HeaderComponent from '../../component/header/HeaderComponent';
import CardSelectCategory from '../../component/card/CardSelectCategory';
//REDUX
import {useDispatch, useSelector} from 'react-redux';
import {searchProductAction} from '../../redux/actions/ProductAction';

export default function SearchByConditionScreen({navigation}) {
  // Route
  const route = useRoute();
  const {goods} = route.params;

  // STATE
  const [conditionSelected, setConditionSelected] = useState();

  // REDUX
  const searchProduct = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setConditionSelected(goodsCondition2);
  }, []);

  const handleCondition = (titleCondition, isSelected) => {
    const changeCondition = conditionSelected.map((el) => {
      return el?.titleCondition === titleCondition
        ? Object.assign({}, el, {isSelected})
        : el;
    });
    setConditionSelected(changeCondition);
    registerConditionOnContext(changeCondition);
  };

  const registerConditionOnContext = (changeCondition) => {
    let conditionFilter = [];
    for (let i = 0; i < changeCondition?.length; i++) {
      if (changeCondition[i]?.isSelected === true) {
        conditionFilter.push(changeCondition[i]?.titleCondition);
      }
      dispatch(
        searchProductAction({
          category: searchProduct[0]?.category,
          condition: conditionFilter,
          distance: searchProduct[0]?.distance,
        }),
      );
    }
  };

  return (
    <View style={styles.container}>
      <HeaderComponent title="Etat" navigation={navigation} />
      <FlatList
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={styles.wrapper_list}
        data={conditionSelected}
        renderItem={({item}) => {
          return (
            <CardSelectCategory
              title={item?.titleCondition}
              value={item?.isSelected}
              onPress={() =>
                handleCondition(item?.titleCondition, !item?.isSelected)
              }
            />
          );
        }}
        keyExtractor={(item) => item?.titleCondition}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BackgroundColors.white.absolute,
    flex: 1,
  },
});
