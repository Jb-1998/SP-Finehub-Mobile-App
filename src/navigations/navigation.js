import React from 'react';
import 'react-native-gesture-handler';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import LoginScreen from '../screens/login';
import WelcomeScreen from '../screens/welcome';
import RegistrationScreen from '../screens/registration';
import FeedScreen from '../screens/feedScreen';
import IntroScreen from '../screens/introScreen';
import LoadingScreen from '../screens/loadingScreen';
import SignInScreen from '../screens/signInScreen';
import LocationScreen from '../screens/locationScreen';
import ResoucesScreen from '../screens/resourcesScreen';
import EditScreen from '../screens/editScreen';
import UserScreen from '../screens/userScreen';
import Icon from 'react-native-vector-icons/Feather';

import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyAUS2fACg8ZHNWL7gpravTOGdYRsQrRKmQ',
  authDomain: 'fineapp-e7413.firebaseapp.com',
  databaseURL: 'https://fineapp-e7413.firebaseio.com',
  projectId: 'fineapp-e7413',
  storageBucket: 'fineapp-e7413.appspot.com',
  messagingSenderId: '830432767384',
  appId: '1:830432767384:web:671867e9f1a4119bcf0fed',
  measurementId: 'G-1BNKRXYBD5',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AuthNavigator = createStackNavigator(
  {
    Intro: {
      screen: IntroScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    SignIn: {
      screen: LoginScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Login: {
      screen: SignInScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: {
        headerTitle: () => {
          return null;
        },
        headerStyle: {
          backgroundColor: '#121212',
          height: 80,
          elevation: 0,
        },
        headerTintColor: 'white',
      },
    },
    Register: {
      screen: RegistrationScreen,
      navigationOptions: {
        headerTitle: () => {
          return null;
        },
        headerStyle: {
          backgroundColor: '#121212',
          height: 80,
          elevation: 0,
        },
        headerTintColor: 'white',
      },
    },
  },
  {
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
);

const FeedNavigator = createStackNavigator({
  Feed: {
    screen: FeedScreen,
  },
});

const FineBottomTabNavigator = createBottomTabNavigator(
  {
    NewsFeed: {
      screen: FeedScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Icon name="home" size={26} color={tabInfo.tintColor} />;
        },
        tabBarLabel: () => {
          return null;
        },
      },
    },
    location: {
      screen: LocationScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Icon name="map-pin" size={26} color={tabInfo.tintColor} />;
        },
        tabBarLabel: () => {
          return null;
        },
      },
    },
    Resources: {
      screen: ResoucesScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Icon name="book-open" size={26} color={tabInfo.tintColor} />;
        },
        tabBarLabel: () => {
          return null;
        },
      },
    },
    Edit: {
      screen: EditScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Icon name="edit" size={26} color={tabInfo.tintColor} />;
        },
        tabBarLabel: () => {
          return null;
        },
      },
    },
    Profling: {
      screen: UserScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Icon name="user" size={26} color={tabInfo.tintColor} />;
        },
        tabBarLabel: () => {
          return null;
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#785ed8',
      style: {
        height: 60,
        paddingTop: 10,
        paddingBottom: 15,
        backgroundColor: '#121212',
        borderTopWidth: 0.2,
        borderTopColor: '#2D2D2D',
      },
    },
  },
);

const MainNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  Main: FineBottomTabNavigator,
});

export default createAppContainer(MainNavigator);
