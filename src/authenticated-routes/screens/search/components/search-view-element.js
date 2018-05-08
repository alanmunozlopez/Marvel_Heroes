import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const SearchViewElement = (props) => {
  const heroImage = `${props.hero.thumbnail.path.replace('http:', 'https:')}.${props.hero.thumbnail.extension}`;
  return (
    <TouchableOpacity
      onPress={() => {
        props.rowClick({
          id: props.hero.id, name: props.hero.name, description: props.hero.description, wiki: props.hero.urls, image: heroImage, events: props.hero.events.items
          });
        }}
      // onPress={() => { console.log(props.hero); console.log(props); }}
    >
      <View
        style={styles.container}
      >
        <Image
          style={styles.rowImage}
          source={{ uri: `${props.hero.thumbnail.path.replace('http:', 'https:')}.${props.hero.thumbnail.extension}` }}
        />
        <Text
          style={styles.rowName}
        >
          {props.hero.name}
        </Text>
      </View>
    </TouchableOpacity>
  ) 
;};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 12,
  },
  rowImage: {
    width: 60,
    height: 60,
    borderRadius: 31,
    borderWidth: 1.5,
    borderColor: 'black',
    // backgroundColor: 'gray',
  },
  rowName: {
    fontSize: 14,
    padding: 21,
    flex: 3,
    color: 'red',
    fontWeight: 'bold',
    // marginLeft: 19,
  },

});

export default SearchViewElement;
