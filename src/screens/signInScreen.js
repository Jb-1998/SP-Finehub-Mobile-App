import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import * as firebase from 'firebase';

const SignInScreen = (props) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [errorMessage, setErrorMessage] = useState(null);

  // handleLogin = () => {
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .catch((error) => setErrorMessage(error.message));
  // };
  return (
    <View style={styles.loginStyle}>
      <View style={styles.loginImage}>
        <Image
          source={require('../assets/images/icon.png')}
          style={styles.logoStyle}
        />
        <Text style={styles.stayText}>Please fill in the credentials</Text>
      </View>

      <View style={styles.loginbtnStyle}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="email address"
          placeholderTextColor="#9B9B9B"></TextInput>
        <TextInput
          style={styles.textInputStyle}
          placeholder="password"
          secureTextEntry
          placeholderTextColor="#9B9B9B"></TextInput>
        <TouchableOpacity
          style={styles.btnSignIn}
          onPress={() => props.navigation.navigate('Main')}>
          <Text style={styles.btnSignInText}> Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnGetStarted}
          onPress={() => props.navigation.navigate('Welcome')}>
          <Text style={styles.btnSignInText}> sign up </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginStyle: {
    flex: 1,
    backgroundColor: '#121212',
  },
  loginbtnStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
  },
  loginImage: {
    backgroundColor: '#121212',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingLeft: 50,
    paddingTop: 80,
  },
  welcomeText: {
    color: 'white',
    fontFamily: 'Muli-ExtraBold',
    fontSize: 40,
    width: '80%',
    paddingTop: 150,
  },
  stayText: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Muli-Regular',
    width: '70%',
    paddingTop: 100,
  },

  btnSignIn: {
    marginTop: 60,
    width: 330,
    height: 65,
    backgroundColor: '#785ed8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnSignInText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Muli-Bold',
  },
  btnGetStarted: {
    marginTop: 35,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    width: 50,
    height: 60,
  },
  textInputStyle: {
    height: 60,
    width: 350,
    borderColor: '#939393',
    borderWidth: 0.5,
    paddingLeft: 15,
    marginBottom: 15,
    color: '#9B9B9B',
    fontSize: 17,
    borderRadius: 3,
  },
  forgotPass: {
    color: 'white',
    fontFamily: 'Muli-Bold',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  hairline: {
    backgroundColor: '#9B9B9B',
    height: 1,
    width: 124,
    marginTop: 13,
  },
  loginButtonBelowText1: {
    fontSize: 18,
    paddingHorizontal: 30,
    alignSelf: 'center',
    color: '#9B9B9B',
  },
  btnGmail: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnGmailText: {
    color: '#9B9B9B',
    fontSize: 15,
  },
  btnSignUp: {
    color: '#785ed8',
  },
  error: {
    color: '#e9446a',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  errorMessage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
});

export default SignInScreen;
