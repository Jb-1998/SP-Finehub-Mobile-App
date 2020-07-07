import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FeedScreen = (props) => {
  return (
    <View style={styles.feedStyle}>
      <Text>Hello world</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  feedStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
});

export default FeedScreen;
