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
      onPress={() => { props.heroClick({ id: props.id, name: props.name }); }}
    >
      <View style={styles.cardImage}>
        <Image
          style={styles.cardDisplayImage}
          source={{ uri: props.image }}
        />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardContentName}>
          {props.name}
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
    backgroundColor: 'red',
  },
  cardImage: {
    width: '100%',
    backgroundColor: 'black',
  },
  cardDisplayImage: {
    width: '100%', height: 150,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'red',
  },
  cardContentName: {
    fontSize: 21,
    margin: 0,
    textAlign: 'center',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContentDetails: {
    fontSize: 15,
    margin: 0,
    textAlign: 'center',
    color: 'white',
  },
});

export default HeroCard;
