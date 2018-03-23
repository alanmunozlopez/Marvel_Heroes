import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

const HeroCard = props => (
  <View
    style={styles.card}
  >
    <TouchableOpacity
      onPress={() => { console.log('hero here dude'); }}
    >
      <View style={styles.cardImage}>
        <Image
          style={styles.cardDisplayImage}
          source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
        />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardContentName}>
            Hulk
        </Text>
        <Text style={styles.cardContentDetails}>
            a green man...
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  row: {
    fontSize: 24,
    padding: 42,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
  card: {
    width: '40%',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    margin: '5%',
    borderWidth: 2,
    borderColor: 'black',
  },
  cardImage: {
    width: '100%',
  },
  cardDisplayImage: {
    width: '100%', height: 150,
  },
  cardContent: {
    padding: 16,
    backgroundColor: 'red',
  },
  cardContentName: {
    fontSize: 25,
    margin: 0,
    textAlign: 'center',
    color: 'white',
  },
  cardContentDetails: {
    fontSize: 15,
    margin: 0,
    textAlign: 'center',
    color: 'white',
  },
});

export default HeroCard;
