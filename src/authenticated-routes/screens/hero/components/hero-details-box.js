import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
} from 'react-native';
import SwipeableViews from 'react-swipeable-views-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const setDetailsBox = (props) => {
  const viewslo = [];
  console.log('kkk');
  console.log(props);
  const events = props.events ? props.events.slice(0, 5) : false;
  const urls = props.urls ? props.urls.slice(0, 3) : false;

  if (props.description) {
    viewslo.push(<View>
      <Text style={styles.title}> Description </Text>
      <Text style={styles.textInfo}> {props.description} </Text>
    </View>);
  }
  if (events) {
    viewslo.push(<View> <Text style={styles.title}> Events </Text> {events.map(item => (
      <Text style={styles.textInfo}> {item.name} </Text>
    ))}
    </View>);
  }
  if (urls) {
    viewslo.push(<View> <Text style={styles.title}> Links </Text>{urls.map(item => (
      <Text style={styles.textLink} onPress={() => Linking.openURL(item.url)} > <Ionicons name="ios-link" size={17} color="blue" /> Marvel {item.type} </Text>
    ))}
    </View>);
  }

  return viewslo;
};

const HeroDetailsBox = props =>
  // viewslo = [];
  // setDetailsBox(props);
  (
    <View
      style={styles.container}
    >
      <SwipeableViews>
        {
        setDetailsBox(props).map(item => (
          item
        ))
      }
      </SwipeableViews>
    </View>
  );
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    opacity: 0.8,
    backgroundColor: 'white',
  },
  textInfo: {
    // textShadowColor: 'gray',
    // textShadowOffset: { width: -1, height: 1 },
    // textShadowRadius: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  textLink: {
    // textShadowColor: 'gray',
    // textShadowOffset: { width: -1, height: 1 },
    // textShadowRadius: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'blue',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    padding: 4,
    paddingBottom: 8,
  },
});

export default HeroDetailsBox;
