import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useIsFocused} from '@react-navigation/native';
//API
import {IOS_URL, ANDROID_URL} from '../../API/constant';
import axios from 'axios';
//STYLES
import {Colors, BackgroundColors} from '../../constant/colors';
import fontStyles from '../../constant/fonts';
import normalize from 'react-native-normalize';
import {loadFont} from '../../assets/Autre';
//COMPONENT
import CardMessageComponent from '../../component/card/CardMessageComponent';
import {Spacings} from '../../constant/layout';
import MessageValidation from '../../component/MessageValidation';

export default function AllMessageScreen({navigation}) {
  //STATE
  const [isLoading, setIsLoading] = useState(true);
  const [allMessage, setAllMessage] = useState([]);
  const [deletedMessage, setDeletedMessage] = useState(false);

  // FOCUS ON SCREEN
  const isFocuser = useIsFocused();

  useEffect(() => {
    loadFont();
  });

  const goToChat = (recieverId, senderId, product) => {
    return navigation.navigate('Chat', {
      fromAllMessage: {recieverId, senderId, product},
    });
  };
  const onDismissSnackBar = () => setDeletedMessage(false);

  const getAllRecieverChat = async () => {
    const userid = await AsyncStorage.getItem('userId');
    await axios({
      method: 'GET',
      url:
        Platform.OS === 'ios'
          ? `${IOS_URL}/chat/allrecieverchat/${userid}`
          : `${ANDROID_URL}/chat/allrecieverchat/${userid}`,
    })
      .then((res) => {
        setAllMessage(res?.data?.chat);
      })
      .catch((err) => {
        console.log(err, 'err on getallrecieverchat');
      });
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getAllRecieverChat();
      setIsLoading(false);
    }

    return () => {
      mounted = false;
    };
  }, [isFocuser]);

  // STYLES
  const {container, _header, text_title, wrapper_allmessage} = styles;

  return isLoading ? (
    <ActivityIndicator size="large" style={{flex: 1}} />
  ) : (
    <View style={container}>
      <View style={_header}>
        <Text style={text_title}>Messages</Text>
      </View>
      <View style={wrapper_allmessage}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={allMessage}
          // contentContainerStyle={}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={fontStyles.activeOpacity}
              onPress={() => {
                console.log(item, 'item');
                goToChat(item?.reciever?._id, item?.sender, item?.product);
              }}>
              <CardMessageComponent
                deleteMessage={() => {
                  getAllRecieverChat();
                  setDeletedMessage(true);
                }}
                sender={item?.reciever?.firstName}
                message={item?.messages[item.messages.length - 1]?.text}
                pictureProduct={item?.product?.productPicture[0]}
                createdAt={item?.messages[item.messages.length - 1]?.createdAt}
                titleProduct={item?.product?.title}
                recieverId={item?.reciever?._id}
                category={item?.product?.category}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item?._id}
        />
      </View>
      <>
        <MessageValidation
          backgroundColor={BackgroundColors.green.main}
          accent={Colors.white.absolute}
          color={Colors.white.absolute}
          visible={deletedMessage}
          onDismiss={onDismissSnackBar}
          label={'Ok'}
          message={'Message supprimé'}
        />
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BackgroundColors.white.absolute,
    flex: 1,
  },
  _header: {
    backgroundColor: BackgroundColors.green.main,
    height: normalize(70, 'height'),
    justifyContent: 'flex-end',
  },
  text_title: {
    marginBottom: normalize(13),
    fontSize: normalize(18, 'fontSize'),
    // fontFamily: 'bold',
    lineHeight: 20,
    color: Colors.white.absolute,
    marginLeft: normalize(Spacings.XS),
  },
  wrapper_allmessage: {
    marginHorizontal: normalize(12),
    marginBottom: normalize(97),
  },
});
