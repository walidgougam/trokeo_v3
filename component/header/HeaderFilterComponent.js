import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {Context as AuthContext} from '../../context/AuthContext';
//PICTURE
import {CrossGreyIcon} from '../../assets/icon/Icon';
//STYLE
import {Colors} from '../../constant/colors';
import normalize from 'react-native-normalize';
import fontStyles from '../../constant/fonts';

export default function HeaderFilterComponent() {
  //STATE
  const [allOptionSearch, setAllOptionSearch] = useState();
  const [loading, setLoading] = useState(true);

  // CONTEXT
  const {state, searchFilterProductContext} = useContext(AuthContext);

  //CONTEXT STATE
  const category = state?.search?.category;
  const distance = state?.search?.distance;
  const condition = state?.search?.condition;

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      let allOptions = [];
      if (distance !== undefined) {
        for (let i = 0; i < distance.length; i++) {
          if (allOptions.filter((e) => e.data !== distance[i]))
            allOptions.push({type: 'distance', data: distance[i]});
        }
      }
      if (category !== undefined) {
        for (let i = 0; i < category.length; i++) {
          if (allOptions.filter((e) => e.data !== category[i]))
            allOptions.push({type: 'category', data: category[i]});
        }
      }
      if (condition !== undefined) {
        for (let i = 0; i < condition.length; i++) {
          if (allOptions.filter((e) => e.data !== condition[i]))
            allOptions.push({type: 'condition', data: condition[i]});
        }
      }
      setAllOptionSearch(allOptions);
      setLoading(false);
    }
    return () => {
      mounted = false;
    };
  }, [condition, distance, category]);

  const deleteOptionSearch = (filter, type) => {
    const deleteOption = allOptionSearch.filter(
      (event) => event.data !== filter,
    );
    const newFilterSearch = [];
    for (let i = 0; i < deleteOption.length; i++) {
      newFilterSearch.push(deleteOption[i]);
    }

    let newCondition = [];
    let newCategory = [];
    let newDistance = [];

    for (let i = 0; i < newFilterSearch.length; i++) {
      if (newFilterSearch[i].type === 'category') {
        newCategory.push(newFilterSearch[i].data);
      } else if (newFilterSearch[i].type === 'condition') {
        newCondition.push(newFilterSearch[i].data);
      } else if (newFilterSearch[i].type === 'distance') {
        newDistance.push(newFilterSearch[i].data);
      }
    }
    if (type === 'condition') {
      return searchFilterProductContext({
        category: category,
        condition: newCondition,
        distance: distance,
      });
    } else if (type === 'category') {
      return searchFilterProductContext({
        category: newCategory,
        condition: condition,
        distance: distance,
      });
    } else {
      return searchFilterProductContext({
        category: category,
        condition: condition,
        distance: newDistance,
      });
    }
  };

  const deleteOptionFilter = (filter, type) => {
    Alert.alert(
      `Supprimer`,
      ` ${filter}`,
      [
        {
          text: 'ok',
          onPress: () => {
            deleteOptionSearch(filter, type);
          },
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };
  //STYLES
  const {
    container,
    wrapper_text_filter,
    text_filter,
    expand_clickable_area,
  } = styles;
  return loading ? (
    <View></View>
  ) : (
    <View style={container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {allOptionSearch
          ?.filter((event) => event.data !== null)
          .map((filter, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => deleteOptionFilter(filter.data, filter.type)}
                activeOpacity={fontStyles.activeOpacity}
                style={[wrapper_text_filter]}>
                <Text style={text_filter}> {filter.data}</Text>
                <View style={{marginLeft: 7}}>
                  <CrossGreyIcon width={7} height={7} />
                </View>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: Colors.grey.placeholder_grey,
    borderBottomWidth: 1,
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapper_text_filter: {
    borderColor: Colors.grey.placeholder_grey,
    borderWidth: 1,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 27,
    borderRadius: 13,
    paddingHorizontal: 7,
  },
  text_filter: {
    fontSize: normalize(14, 'fontSize'),
    // fontFamily: "semiBold",
    lineHeight: 20,
    color: Colors.black.text_description_black,
  },
  expand_clickable_area: {top: 10, bottom: 10, left: 10, right: 10},
});
