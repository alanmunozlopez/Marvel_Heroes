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
      onPress={() => { props.heroClick({ id: props.id, name: props.name, description: props.description, wiki: props.wiki, image: props.image, events: props.events }); }}
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
  card: {
    flex: 1,
    shadowColor: 'gray',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    // margin: '5%',
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    margin: 8,
  },
  cardImage: {
    width: '100%',
    backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cardDisplayImage: {
    width: '100%', height: 150,
  },
  cardContent: {
    // padding: 16,
    flexDirection: 'row',
    backgroundColor: 'red',
    width: '100%',
    padding: 8,
  },
  cardContentName: {
    flex: 1,
    width: '100%',
    fontSize: 21,
    textAlign: 'center',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    fontWeight: 'bold',
  },
  cardContentDetails: {
    fontSize: 15,
    textAlign: 'center',
    color: 'red',
  },
});

export default HeroCard;
