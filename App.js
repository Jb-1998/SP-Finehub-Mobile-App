/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import GeneralStatusBarColor from './src/components/GeneralStatusBarColor';
import Login from './src/screens/login';
import Welcome from './src/screens/welcome';
import Register from './src/screens/registration';
import Intro from './src/screens/introScreen';
import Navigator from './src/navigations/navigation';
import IntroScreen from './src/screens/introScreen';
import {StatusBar} from 'react-native';

export default function App() {
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    StatusBar.setBackgroundColor('#121212');
  });
  return <Navigator />;
}
