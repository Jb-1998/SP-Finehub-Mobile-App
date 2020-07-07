import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import * as firebase from 'firebase';

const LoadingScreen = (props) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      props.navigation.navigate(user ? 'Feed' : 'Intro');
    });
  });

  return (
    <View style={styles.loadingStyle}>
      <Text>Loading....</Text>
      <ActivityIndicator size="large"></ActivityIndicator>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
});

export default LoadingScreen;
