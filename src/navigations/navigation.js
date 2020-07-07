import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import {fromLeft} from 'react-navigation-transitions';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import LoginScreen from '../screens/login';
import WelcomeScreen from '../screens/welcome';
import RegistrationScreen from '../screens/registration';
import FeedScreen from '../screens/feedScreen';
import IntroScreen from '../screens/introScreen';
import LoadingScreen from '../screens/loadingScreen';
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

const MainNavigator = createSwitchNavigator({
  Loading: LoadingScreen,
  Feed: FeedNavigator,
  Auth: AuthNavigator,
});

export default createAppContainer(AuthNavigator);
