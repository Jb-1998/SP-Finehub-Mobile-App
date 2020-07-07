import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const RegistrationScreen = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.registerStyle}>
      <Text style={styles.registerTitle}> Add your email and password</Text>
      <Text style={styles.descriptionStyle}>
        fine is a social network that allows you to express your feelings and
        thought while having a support from various people
      </Text>
      <TextInput
        style={styles.textInputStyle}
        placeholder="First Name"
        placeholderTextColor="#9B9B9B"></TextInput>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Last Name"
        placeholderTextColor="#9B9B9B"></TextInput>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Email address"
        placeholderTextColor="#9B9B9B"></TextInput>
      <TextInput
        style={styles.textInputStyle}
        placeholder="password"
        placeholderTextColor="#9B9B9B"
        secureTextEntry={true}></TextInput>
      <View style={styles.checkBox}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={() =>
            toggleCheckBox ? setToggleCheckBox(false) : setToggleCheckBox(true)
          }
          tintColors="white"
        />
        <Text style={styles.policy}>
          By clicking Sign Up, you agree to our
          <Text style={styles.highLight}> Terms</Text> and that you have read
          our <Text style={styles.highLight}>Data Use Policy</Text>.
        </Text>
      </View>
      <TouchableOpacity style={styles.btnSignUp}>
        <Text style={styles.btnSignUpText}> Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  registerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  registerTitle: {
    color: 'white',
    fontSize: 21,
    marginBottom: 20,
    marginTop: -50,
    fontWeight: 'bold',
  },
  textInputStyle: {
    height: 60,
    width: 350,
    borderColor: '#939393',
    borderWidth: 0.5,
    paddingLeft: 15,
    marginBottom: 15,
    color: 'white',
    fontSize: 17,
    borderRadius: 0,
  },
  btnSignUp: {
    marginTop: 60,
    width: 350,
    height: 55,
    backgroundColor: '#785ed8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnSignUpText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Muli-Bold',
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
    marginBottom: 50,
    textAlign: 'center',
  },
  checkBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '84%',
    paddingRight: 40,
    marginTop: 50,
  },
  policy: {
    color: 'white',
    marginLeft: 10,
  },
  highLight: {
    color: '#785ed8',
  },
});

export default RegistrationScreen;
