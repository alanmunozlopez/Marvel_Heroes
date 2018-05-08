import React from 'react';
import {
  StyleSheet,
  View,
  Linking,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeroDetailsView = props => (
  <View>
    { props.description ?
        <View>
          <Text style={styles.title}> Description </Text>
          <Text style={styles.textInfo}> {props.description} </Text>
        </View>
      : null
    }
    {
      props.events ?
      <View>
        <Text style={styles.title}> Events </Text>
        {props.events.map(item => (
          <Text style={styles.textInfo}> {item.name} </Text>
          ))}
      </View>
      : null
    }
    {
      props.links ?
      <View> 
        <Text style={styles.title}> Links </Text>{props.links.map(item => (
          <Text style={styles.textLink} onPress={() => Linking.openURL(item.url)} > <Ionicons name="ios-link" size={17} color="blue" /> Marvel {item.type} </Text>
        ))}
      </View>
      : null
    }
  </View>
);

const styles = StyleSheet.create({
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

export default HeroDetailsView;
