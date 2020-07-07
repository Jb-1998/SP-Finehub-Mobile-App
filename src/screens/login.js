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
const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => setErrorMessage(error.message));
  };
  return (
    <View style={styles.loginStyle}>
      <Image
        source={require('../assets/images/fineNew.png')}
        style={styles.logoStyle}
      />
      <View style={styles.errorMessage}>
        {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      </View>

      <TextInput
        style={styles.textInputStyle}
        placeholder="Email address"
        placeholderTextColor="#9B9B9B"
        autoCapitalize="none"
        onChangeText={(email) => setEmail({email})}
        value={email}></TextInput>
      <TextInput
        style={styles.textInputStyle}
        placeholder="password"
        placeholderTextColor="#9B9B9B"
        secureTextEntry={true}
        onChangeText={(password) => setPassword({password})}
        value={password}></TextInput>

      <TouchableOpacity style={styles.btnSignIn} onPress={handleLogin}>
        <Text style={styles.btnSignInText}> Sign In</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.btnGetStarted}>
        <Text style={styles.btnSignInText}> Get Started </Text>
      </TouchableOpacity> */}
      <View style={styles.container}>
        <View style={styles.hairline} />
        <Text style={styles.loginButtonBelowText1}>or</Text>
        <View style={styles.hairline} />
      </View>
      <TouchableOpacity
        style={styles.btnGmail}
        onPress={() => props.navigation.navigate('Welcome')}>
        <Text style={styles.btnGmailText}>
          Don't have account yet? <Text style={styles.btnSignUp}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  loginDescription: {
    color: 'white',
  },
  btnSignIn: {
    marginTop: 60,
    width: 350,
    height: 55,
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
    width: 320,
    height: 55,
    marginTop: 10,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  logoStyle: {
    width: 126,
    height: 169,
    marginBottom: 100,
    marginTop: 0,
  },
  textInputStyle: {
    height: 50,
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

export default LoginScreen;
