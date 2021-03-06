import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Colors, BackgroundColors} from '../../constant/colors';
import axios from 'axios';
import {useRoute} from '@react-navigation/native';
import {IOS_URL, ANDROID_URL} from '../../API/constant';

import HeaderComponent from '../../component/header/HeaderComponent';
import CardReview from '../../component/card/CardReview';

export default function ProfileUserAllReviewScreen({navigation}) {
  // ROUTE
  const route = useRoute();
  const {profileId} = route.params;

  //STATE
  const [review, setReview] = useState([]);

  const getUserReview = async () => {
    try {
      let response = await axios.get(
        Platform.OS === 'ios'
          ? `${IOS_URL}/user/getreview/${profileId}`
          : `${ANDROID_URL}/user/getreview`,
      );
      if (response) {
        setReview(response.data.review);
      }
    } catch (error) {
      console.log(error, 'error on get message client');
    }
  };

  useEffect(() => {
    getUserReview();
  }, []);

  // STYLES
  const {container} = styles;

  return (
    <View style={container}>
      <HeaderComponent navigation={navigation} title="Avis" />
      <FlatList
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={styles.wrapper_list}
        data={review}
        renderItem={({item, index}) => {
          return (
            <>
              <CardReview
                review={item?.review}
                stars={item?.stars}
                profilePicture={item?.userId?.userPicture}
                profileName={item?.userId?.firstName}
              />
            </>
          );
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BackgroundColors.white.absolute,
  },
});
