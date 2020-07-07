import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

const WelcomeScreen = (props) => {
  return (
    <View style={styles.welcomeStyle}>
      <Text style={styles.welcomeTitle}>Welcome to fine social network</Text>
      <Text style={styles.descriptionStyle}>
        fine is a social network that allows you to express your feelings and
        thought while having a support from various people
      </Text>
      <TouchableOpacity
        style={styles.btnGetStarted}
        onPress={() => props.navigation.navigate('Register')}>
        <Text style={styles.btnGetStartedText}> Get Started </Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.hairline} />
        <Text style={styles.loginButtonBelowText1}>or</Text>
        <View style={styles.hairline} />
      </View>
      <TouchableOpacity style={styles.btnGmail}>
        <Text style={styles.btnGmailText}> Sign Up with gmail</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  welcomeTitle: {
    color: 'white',
    fontFamily: 'Muli-Bold',
    fontSize: 28,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: -140,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
  },
  descriptionStyle: {
    color: 'white',
    fontFamily: 'Muli-Light',
    fontSize: 15,
    paddingLeft: 28,
    paddingRight: 28,
    paddingTop: 20,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
  },
  btnGetStarted: {
    width: 320,
    height: 55,
    marginTop: 60,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  btnGetStartedText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Muli-Bold',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  hairline: {
    backgroundColor: '#A2A2A2',
    height: 2,
    width: 124,
    marginTop: 13,
  },
  loginButtonBelowText1: {
    fontSize: 18,
    paddingHorizontal: 30,
    alignSelf: 'center',
    color: 'white',
    fontFamily: 'Muli-ExtraLight',
  },
  btnGmail: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnGmailText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Muli-ExtraLight',
  },
});
export default WelcomeScreen;
