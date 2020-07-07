import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

const IntroScreen = (props) => {
  return (
    <View style={styles.introStyle}>
      <ImageBackground
        source={require('../assets/images/covernew1.png')}
        style={styles.image}>
        <LinearGradient
          colors={['rgba(0, 0, 0,0)', 'rgba(0, 0, 0,0)', 'rgba(0, 0, 0, 0.8)']}
          style={styles.contentContainer}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.title}>fine</Text>
            <Text style={styles.subtitle}>Stay connected and be yourself!</Text>
            <Text style={styles.signinText}>sign in to start</Text>
            <View
              style={{
                paddingTop: 20,
                paddingLeft: '50%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  paddingRight: 10,
                  fontFamily: 'Muli-Regular',
                }}>
                Get Started
              </Text>
              <TouchableOpacity
                style={{
                  borderRadius: 50,
                  borderColor: 'white',
                  borderStyle: 'solid',
                  borderWidth: 1,
                  width: 70,
                  height: 70,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => props.navigation.navigate('SignIn')}>
                <Icon name="arrow-right" size={40} color="#785ed8" />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  introStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 20,
    overflow: 'visible',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
  },
  descriptionContainer: {
    paddingLeft: 15,
    paddingVertical: '120%',
  },
  title: {
    fontFamily: 'Muli-ExtraBold',
    fontSize: 70,
    color: 'white',
    flexDirection: 'column',
  },
  subtitle: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Muli-Bold',
    paddingRight: 70,
  },
  signinText: {
    color: '#c4c4c4',
    fontFamily: 'Muli-Regular',
    fontSize: 18,
    marginTop: 10,
  },
});

export default IntroScreen;
