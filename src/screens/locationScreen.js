import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LocationScreen = (props) => {
  return (
    <View style={styles.editStyle}>
      <Text style={styles.colorText}> Location Screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  editStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  colorText: {
    color: 'white',
  },
});

export default LocationScreen;
