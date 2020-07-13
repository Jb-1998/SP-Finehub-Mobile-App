import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const CardComponent = (props) => {
  return (
    <View style={styles.cardStyle}>
      <View style={styles.headerSection}>
        <View style={styles.userDetails}>
          <Image
            source={require('../assets/images/Picture1.png')}
            style={styles.userPic}
          />
          <Text style={styles.userName}>John Benedick Sta. Romana</Text>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="more-horizontal" size={28} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.postText}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </Text>
      </View>
      <View style={styles.reactSection}>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="heart" size={25} color="white" />
        </TouchableOpacity>
        <View style={styles.timeSection}>
          <Icon name="clock" size={25} color="white" />
          <Text style={styles.timeText}>23 mins ago</Text>
        </View>
      </View>
    </View>
  );
};

const FeedScreen = (props) => {
  return (
    <View style={styles.feedStyle}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  feedStyle: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: '#121212',
  },
  scrollContainer: {
    width: '100%',
    paddingBottom: '20%',
  },
  cardStyle: {
    borderStyle: 'solid',
    borderWidth: 0.1,
    borderRadius: 4,
    borderColor: 'white',
    width: '95%',
    height: '26%',
    paddingLeft: 25,
    paddingTop: 25,
    marginTop: 5,
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 25,
  },
  userDetails: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userPic: {
    width: 50,
    height: 50,
  },
  userName: {
    color: 'white',
    fontFamily: 'Muli-Medium',
    fontSize: 16,
    paddingLeft: 15,
  },
  bodySection: {
    paddingLeft: '17%',
    paddingTop: 25,
    paddingRight: 25,
  },
  postText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Muli-Regular',
  },
  reactSection: {
    paddingTop: 25,
    paddingLeft: '17%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 25,
  },
  timeText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Muli-Light',
    paddingLeft: 15,
  },
});

export default FeedScreen;
