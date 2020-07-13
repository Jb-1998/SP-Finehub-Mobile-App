/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import Login from './src/screens/login';
import Welcome from './src/screens/welcome';
import Register from './src/screens/registration';
import Intro from './src/screens/introScreen';
import Navigator from './src/navigations/navigation';
import IntroScreen from './src/screens/introScreen';
import SignInScreen from './src/screens/signInScreen';
import FeedScreen from './src/screens/feedScreen';
import {StatusBar} from 'react-native';

export default function App() {
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    StatusBar.setBackgroundColor('#121212');
  });
  return <Navigator />;
}
