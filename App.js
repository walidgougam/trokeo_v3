import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Icon, Dimensions } from "react-native";
import { Provider as AuthProvider } from "./context/AuthContext";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import normalize from "react-native-normalize";
import { LogBox } from "react-native";
import {
  AddWhiteIcon,
  AddGreenIcon,
  DealWhiteIcon,
  DealGreenIcon,
  HomeWhiteIcon,
  HomeGreenIcon,
  MessageWhiteIcon,
  MessageGreenIcon,
  ProfileWhiteIcon,
  ProfileGreenIcon,
} from "./assets/icon/Icon";
import {Colors, BackgroundColors }from "./constant/colors";

// LOGIN
import SplashScreen from "./screens/login/SplashScreen";
import LoginScreen from "./screens/login/LoginScreen";
import EmailRegisterScreen from "./screens/login/EmailRegisterScreen";
import EmailLoginScreen from "./screens/login/EmailLoginScreen";
import NameScreen from "./screens/login/NameScreen";
import PictureScreen from "./screens/login/PictureScreen";
import GenderScreen from "./screens/login/GenderScreen";

// HOME
import HomeScreen from "./screens/home/HomeScreen";
import ProductDetailScreen from "./screens/home/ProductDetailScreen";

//ORGANIZATION
import OrganizationScreen from "./screens/organization/OrganizationScreen";

// CREATION
import CreateProduct from "./screens/creation/CreateProduct";
import SelectCategoryScreen from "./screens/creation/SelectCategoryScreen";

//MESSAGE
import AllMessageScreen from "./screens/message/AllMessageScreen";
import ChatScreen from "./screens/message/ChatScreen";
import LeaveReviewScreen from "./screens/message/LeaveReviewScreen";

// PROFILE
import EcoCitizenScreen from "./screens/profile/EcoCitizenScreen";
import EditProfileScreen from "./screens/profile/EditProfileScreen";
import FavoritesScreen from "./screens/profile/FavoritesScreen";
import FollowProductsScreen from "./screens/profile/customization/FollowProductsScreen";
import GainVisibilityScreen from "./screens/profile/settings/GainVisibilityScreen";
import GoodOrServiceScreen from "./screens/profile/customization/GoodOrServiceScreen";
import HelpCenterScreen from "./screens/profile/HelpCenterScreen";
import NotificationScreen from "./screens/profile/settings/NotificationScreen";
import OrganizationModeScreen from "./screens/profile/OrganizationModeScreen";
import ProfileScreen from "./screens/profile/ProfileScreen";
import ProfileUserDetailsScreen from "./screens/profile/ProfileUserDetailsScreen";
import ProfileUserAllReviewScreen from "./screens/profile/ProfileUserAllReviewScreen";
import SettingDetailScreen from "./screens/profile/settings/SettingDetailScreen";
import TermsOfService from "./screens/profile/TermsOfService";

// SEARCH
import SearchOptionScreen from "./screens/search/SearchOptionScreen";
import SearchByCategoryScreen from "./screens/search/SearchByCategoryScreen";
import SearchByConditionScreen from "./screens/search/SearchByConditionScreen";
import SearchByDistanceScreen from "./screens/search/SearchByDistanceScreen";

// OTHER
import WorkInProgress from "./screens/WorkInProgress";

//NAVIGATION'S INITIALIZATION
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

import * as Font from "expo-font";
import Fonts from "./assets/Fonts";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

const createBottomTabs = () => {
  return (
    <MaterialBottomTabs.Navigator
      barStyle={{
        backgroundColor: BackgroundColors.white.absolute,
        height: normalize(56),
      }}
    >
      <MaterialBottomTabs.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) =>
            focused ? <HomeGreenIcon /> : <HomeWhiteIcon />,
        }}
      />
      <MaterialBottomTabs.Screen
        name="OrganizationStack"
        component={OrganizationScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) =>
            focused ? <DealGreenIcon /> : <DealWhiteIcon />,
        }}
      />
      <MaterialBottomTabs.Screen
        name="CreateProduct"
        component={CreateProduct}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) =>
            focused ? <AddGreenIcon /> : <AddWhiteIcon />,
        }}
      />
      <MaterialBottomTabs.Screen
        name="MessageStack"
        component={AllMessageScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) =>
            focused ? <MessageGreenIcon /> : <MessageWhiteIcon />,
        }}
      />
      <MaterialBottomTabs.Screen
        name="ProfileStack"
        component={ProfileScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) =>
            focused ? <ProfileGreenIcon /> : <ProfileWhiteIcon />,
        }}
      />
    </MaterialBottomTabs.Navigator>
  );
};

function NavigationContainerComponent() {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash" // lOGIN
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmailRegister"
          component={EmailRegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmailLogin"
          component={EmailLoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Name"
          component={NameScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Picture"
          component={PictureScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Gender"
          component={GenderScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeBottomTab" // HOME
          component={createBottomTabs}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: BackgroundColors.purple.absolute },
          }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchOption"
          component={SearchOptionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CategoryList"
          component={SearchByCategoryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConditionList"
          component={SearchByConditionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchByDistance"
          component={SearchByDistanceScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OrganizationBottomTab"
          component={OrganizationScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreateProduct"
          component={CreateProduct}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SelectCategory"
          component={SelectCategoryScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Chat" // MESSAGE
          component={ChatScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Review"
          component={LeaveReviewScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen // PROFILE
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileUserDetails"
          component={ProfileUserDetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileUserReview"
          component={ProfileUserAllReviewScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SettingDetail"
          component={SettingDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PaymentVisibility"
          component={GainVisibilityScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About"
          component={EcoCitizenScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Follow"
          component={FollowProductsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GoodOrService"
          component={GoodOrServiceScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OrganizationMode"
          component={OrganizationModeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HelpCenter"
          component={HelpCenterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Favorite"
          component={FavoritesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Terms"
          component={TermsOfService}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  const [fontState, setFontState] = useState({});
  const loadFont = async () => {
    try {
      await Font.loadAsync({
        OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
      });

      // setFontState({
      //   OpenSansBold,
      // });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    loadFont;
  }, []);
  return (
    <AuthProvider>
      <NavigationContainerComponent />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BackgroundColors.white.absolute,
    alignItems: "center",
    justifyContent: "center",
  },
});
