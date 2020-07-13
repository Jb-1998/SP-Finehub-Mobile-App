import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const UserScreen = (props) => {
  return (
    <View style={styles.editStyle}>
      <Text style={styles.colorText}> User Screen </Text>
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

export default UserScreen;
